// Herramientas
import { encryptHelper, desencryptHelper } from '@src/infrastructure/helpers/encrypt.helper';

/** Tipo de storage del navegador */
const storage: Storage = sessionStorage;
const storageLocal: Storage = localStorage;

/** Llaves del storage. */
const keys: IStorageKeys = {
	auth: encryptHelper('auth'),
	system: encryptHelper('system'),
	beneficiary: encryptHelper('beneficiary'),
};

/**
 * Guardar información en el session storage.
 * @param key Nombre del storage en la constante keys.
 * @param payload Información a guardar.
 */
const setStorage = (key: string, payload: any) => storage.setItem(key, encryptHelper(payload));

/**
 * Guardar información en el local storage.
 * @param key Nombre del storage en la constante keys.
 * @param payload Información a guardar.
 */
const setLocalStorage = (key: string, payload: any) => storageLocal.setItem(key, encryptHelper(payload));

/**
 * Obtener información del storage.
 * @param key Nombre del storage en la constante keys.
 * @return Información almacenada.
 */
const getStorage = <T>(key: string): T | undefined => {
	const PAYLOAD_ENCRYPT = storage.getItem(key);
	if (!PAYLOAD_ENCRYPT) {
		return;
	}
	return desencryptHelper<T>(PAYLOAD_ENCRYPT);
};

/**
 * Obtener información del local storage.
 * @param key Nombre del storage en la constante keys.
 * @return Información almacenada.
 */
const getLocalStorage = <T>(key: string): any => {
	const PAYLOAD_ENCRYPT = storageLocal.getItem(key);
	if (!PAYLOAD_ENCRYPT) {
		return;
	}
	return desencryptHelper<T>(PAYLOAD_ENCRYPT);
};

/**
 * Eliminar un item del storage.
 * @param key Nombre del storage en la constante keys.
 */
const removeStorage = (key: string) => storage.removeItem(key);

/**
 * Eliminar un item del local storage.
 * @param key Nombre del storage en la constante keys.
 */
const removeLocalStorage = (key: string) => storageLocal.removeItem(key);

/** Limpiar el storage. */
const clearStorage = () => storage.clear();

const encryptStorage = {
	setItem: setStorage,
	getItem: getStorage,
	removeItem: removeStorage,
	clearStorage,
};

// #region  Interfaces

interface IStorageKeys {
	auth: string;
	system: string;
	beneficiary: string;
}

// #endregion

export {
	keys,
	encryptStorage,
	setStorage,
	getLocalStorage,
	setLocalStorage,
	removeLocalStorage,
	getStorage,
	removeStorage,
	clearStorage,
};

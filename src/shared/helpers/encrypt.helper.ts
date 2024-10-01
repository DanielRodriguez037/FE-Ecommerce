import CryptoJS from 'crypto-js';

import { ENCRYPT_KEY, ENCRYPT_IV, ENCRYPT_KEY_SIZE } from '@services/settings/environments';

/**
 * Encriptar la información.
 * @param payload Información a guardar.
 * @return Información encrypt.
 */
const encryptHelper = (payload: any): string => {
	const payloadString = JSON.stringify(payload);

	const key = CryptoJS.enc.Utf8.parse(ENCRYPT_KEY);
	const iv = CryptoJS.enc.Utf8.parse(ENCRYPT_IV);
	const keySize = CryptoJS.enc.Utf8.parse(ENCRYPT_KEY_SIZE);

	const payloadEncrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(payloadString), key, {
		keySize,
		iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	});

	return payloadEncrypted.toString();
};

/**
 * Obtener el payload de la información encrypt.
 * @param encrypt String a desencriptar.
 * @return Información desencrypt.
 */
const desencryptHelper = <T>(encrypt: string): T | undefined => {
	if (encrypt === '' || encrypt.trim() === '') {
		return;
	}

	try {
		const key = CryptoJS.enc.Utf8.parse(ENCRYPT_KEY);
		const iv = CryptoJS.enc.Utf8.parse(ENCRYPT_IV);
		const keySize = CryptoJS.enc.Utf8.parse(ENCRYPT_KEY_SIZE);

		const bytes = CryptoJS.AES.decrypt(encrypt, key, {
			keySize,
			iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7,
		});

		const payloadJSON = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

		return payloadJSON;
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(err);
	}
};

export { encryptHelper, desencryptHelper };

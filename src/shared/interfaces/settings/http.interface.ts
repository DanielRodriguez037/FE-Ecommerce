/* eslint-disable @typescript-eslint/no-explicit-any */


// #region Interfaces

/** Interface para la configuración de los métodos axios. */
interface ISettingsService {
	/** Ruta del Endpoint. */
	url: string;
	/** Mostrar el loading, por defecto es true. */
	loading?: boolean;
	/** Cuerpo del servicio. */
	payload?: any;
	/** Encriptar la información del payload. */
	encrypt?: boolean;
	/** Mostrar mensajes de error. */
	showMessageReject?: boolean;
	/** Configuraciones generales del axios. */
	options?: {
		headers?: Record<string, string | number | boolean>;
		params?: any;
	};
	/** Cancelar la petición anterior. */
	cancel?: boolean;
	baseURL?: string;
}

interface IServerError {
	Code?: string;
	Title?: string;
	Message?: string;
	StatusCode?: number;
	Type?: 'warning' | 'info' | 'error' | 'success';
}

// #endregion

export { ISettingsService, IServerError };

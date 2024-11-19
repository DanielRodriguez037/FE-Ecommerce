import { ISettingsService } from '@domain/settings/http.interface';
import { ENDPOINT } from '@domain/settings/envairoment';
import axios from 'axios';

const get = async <T>({ url, payload, baseURL = ENDPOINT }: ISettingsService): Promise<T> => {
	const res = await axios.get(baseURL + url, { params: payload });
	if (res.status === 200) {
		return res.data;
	} else {
		throw new Error('Error');
	}
};

const post = async <T>({ url, payload, baseURL = ENDPOINT }: ISettingsService): Promise<T> => {
	const res = await axios.post(baseURL + url, payload);
	if (res.status === 200) {
		return res.data;
	} else {
		throw new Error('Error');
	}
};

const put = async <T>({ url, payload, baseURL = ENDPOINT }: ISettingsService): Promise<T> => {
	const res = await axios.put(baseURL + url, payload);
	if (res.status === 200) {
		return res.data;
	} else {
		throw new Error('Error');
	}
};

const remove = async <T>({ url, payload, baseURL = ENDPOINT }: ISettingsService): Promise<T> => {
	const res = await axios.delete(baseURL + url, payload);
	if (res.status === 200) {
		return res.data;
	} else {
		throw new Error('Error');
	}
};

export { get, post, put, remove };

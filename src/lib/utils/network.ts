import axios from 'axios';
import AppError from './error';
import Cookies from 'js-cookie';
import { toast } from '../stores/notification';

interface FetchProps {
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	url: string;
	data?: any;
	params?: any;
	formData?: boolean;
	isServer?: boolean;
}

const axiosFunction = async ({
	method = 'GET',
	url = '',
	data = {},
	params = {},
	formData = false,
	isServer = false
}: FetchProps) => {
	const form = new FormData();

	let networkData;

	if (formData) {
		for (const key in data) {
			form.append(key, data[key]);
		}
	} else {
		networkData = JSON.stringify(data);
	}

	const config: any = {
		method: method,
		url: `${isServer ? import.meta.env.VITE_SERVER_BASE_URL : import.meta.env.VITE_BASE_URL}${url}`,
		headers: {
			'Content-Type': formData ? 'multipart/form-data' : 'application/json',
			Authorization: `Bearer ${Cookies.get('token')}`
		},
		data: networkData
	};
	if (method == 'GET') {
		config['params'] = params;
	}

	const result = await axios(config)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			toast({ heading: 'Error', text: error.response.data.message, type: 'error' });
			throw new AppError(error.response.data.message);
		});

	return result;
};

export default axiosFunction;

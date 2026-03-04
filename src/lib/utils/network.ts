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

	try {
		const result = await axios(config);
		return result;
	} catch (error: any) {
		// Return mock data for development when no backend is available
		const mockData = getMockData(url);
		if (mockData !== null) {
			return { data: mockData };
		}
		
		// Show error toast only if response exists
		if (error.response?.data?.message) {
			toast({ heading: 'Error', text: error.response.data.message, type: 'error' });
			throw new AppError(error.response.data.message);
		}
		
		// For network errors, return mock data
		const fallbackMockData = getMockData(url);
		if (fallbackMockData !== null) {
			return { data: fallbackMockData };
		}
		
		throw new AppError('Unable to connect to server. Showing placeholder data.');
	}
};

// Mock data for development without backend
function getMockData(url: string): any {
	if (url.includes('deal/')) {
		return {
			comingSoon: true,
			message: 'Coming Soon - Deal details will be displayed here once the backend is integrated.',
			id: url.split('/')[1] || 1,
			name: 'Sample Deal',
			desc: 'Property description will appear here',
			price: '0',
			saleper: 0,
			frontImage: '',
			DealImages: [],
			endDate: '',
			units: [],
			vouchers: []
		};
	}
	if (url.includes('category/')) {
		return {
			comingSoon: true,
			message: 'Coming Soon - Category details will be displayed here once the backend is integrated.',
			id: url.split('/')[1] || 1,
			name: 'Sample Category',
			image: ''
		};
	}
	if (url.includes('deal')) {
		return {
			comingSoon: true,
			message: 'Coming Soon - Deals will be displayed here once the backend is integrated.',
			data: []
		};
	}
	if (url.includes('category')) {
		return {
			comingSoon: true,
			message: 'Coming Soon - Categories will be displayed here once the backend is integrated.',
			data: []
		};
	}
	if (url.includes('home/dropdown')) {
		return {
			comingSoon: true,
			message: 'Coming Soon - Dropdown data will be displayed here once the backend is integrated.',
			project: [],
			cities: [],
			location: [],
			property: []
		};
	}
	return null;
}

export default axiosFunction;

// export const API = {
// 	allEvents: {
// 		getEvents: process.env.NEXT_PUBLIC_DOMAIN,
// 	},
// };

import axios from 'axios';

const baseURL = 'https://batumievents.com/api/';
// Get all object
export const eventApi = async () => {
	try {
		const response = await axios.get(`${baseURL}`);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const eventApiId = async str => {
	try {
		const response = await axios.get(
			`https://batumievents.com/api/event.php?id=${str}`
		);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const eventApiSearch = async str => {
	try {
		const response = await axios.get(
			`https://batumievents.com/api/?search=batumi`
		);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const eventApiSearchs = async str => {
	try {
		const response = await axios.get(
			`https://batumievents.com/api/?search=${str}`
		);

		return response.data;
	} catch (error) {
		throw error;
	}
};

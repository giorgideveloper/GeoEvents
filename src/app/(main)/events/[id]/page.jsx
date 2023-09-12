/* eslint-disable jsx-a11y/alt-text */
'use client';
import { useEffect, useState } from 'react';
import { API, eventApi } from '../../../../../api/api';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

// eslint-disable-next-line @next/next/no-async-client-component
export default function Page(params) {
	const API_URL = 'https://batumievents.com/api/';
	let [post, setPost] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${API_URL}${params.params.id}`);
				setPost(response);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, []);

	const Dangerously = str => {
		const markup = { __html: `${str}` };
		return markup;
	};

	return <></>;
}

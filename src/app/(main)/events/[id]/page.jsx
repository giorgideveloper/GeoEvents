/* eslint-disable jsx-a11y/alt-text */
'use client';
import { useEffect, useState } from 'react';
import { API, eventApi } from '../../../../../api/api';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Navbar from '../../components/Navbar';

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

	return (
		<>
			<Navbar />
			<div
				role='status'
				className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center pt-4'
			>
				<div
					className='flex items-center justify-center w-full h-80  bg-gray-300 rounded  dark:bg-gray-300'
					style={{ height: '400px' }}
				>
					<svg
						className='w-20 h-10 text-gray-200 dark:text-gray-400'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 20 18'
					>
						<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
					</svg>
				</div>
				<div className='w-full'>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-8 max-w-[480px]'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px]'></div>
				</div>

				<span className='sr-only'>Loading...</span>
			</div>
			<div className='w-full pt-5'>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[720px] mb-4'></div>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[720px] mb-4'></div>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[720px] mb-4'></div>
			</div>
		</>
	);
}

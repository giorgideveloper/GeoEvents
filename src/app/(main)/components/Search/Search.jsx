'use client';
import React, { useEffect, useState } from 'react';
import { eventApiSearchs } from '../../../../../api/api';
import SearchContainer from './SearchContainer/SearchContainer';

export default function Search() {
	const [post, setPost] = useState('');
	const [item, setItme] = useState('');

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const search = async () => {
		if (post.length >= 3) {
			try {
				const response = await eventApiSearchs(post);

				setItme(response);
			} catch (e) {
				console.log(e);
			}
		}
	};
	useEffect(() => {
		search();
	}, [post]);

	return (
		<>
			<input
				value={post}
				onChange={e => setPost(e.target.value)}
				type='text'
				id='search-navbar'
				className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder='Search...'
			/>
			<div className='absolute dark:bg-gray-700/50 w-full text-gray-50 rounded-b-lg'>
				<SearchContainer item={item} />
			</div>
		</>
	);
}

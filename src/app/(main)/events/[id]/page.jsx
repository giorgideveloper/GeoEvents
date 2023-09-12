/* eslint-disable jsx-a11y/alt-text */
'use client';
import { useEffect, useState } from 'react';
import { eventApiId } from '../../../../../api/api';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

// eslint-disable-next-line @next/next/no-async-client-component
export default function Page(params) {
	let [post, setPost] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await eventApiId(params.params.id);
				setPost(response);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, [params.params.id]);

	const Dangerously = str => {
		const markup = { __html: `${str}` };
		return markup;
	};

	return (
		<>
			<Navbar />
			{post ? (
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 pt-8'>
						<>
							<div className='page  bg-white border border-gray-200 rounded-md shadow my-card col-span-2 '>
								<Image
									width={550}
									height={530}
									src={post.image}
									alt={'image'}
								/>

								<div className='p-5'>
									<h5 className='mb-2 text-3xl font-bold tracking-tight text-gray-900'>
										{post.name_ka}
									</h5>
									<p className='pb-3 font-bold text-sm'>აღწერა</p>
									<p
										className='mb-3 font-normal text-gray-700 dark:text-gray-600'
										dangerouslySetInnerHTML={
											post.text_ka === undefined
												? ''
												: Dangerously(post.text_ka.slice(0))
										}
									></p>
								</div>
							</div>
							<div class=' bg-white text-xl border sidebar border-gray-200 rounded-md shadow font-normal text-gray-700 dark:text-gray-700'>
								<p className='pt-6 pl-6 text-3xl font-bold'>ინფორმაცია </p>
								<ul className='p-6'>
									<li className='flex  pb-6'>
										{' '}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											class='w-8 h-8'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z'
											/>
										</svg>
										<span className='font-bold pl-2'>
											{' '}
											{post.category_name_ka}
										</span>
									</li>
									<li className='flex pb-6 '>
										{' '}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											class='w-8 h-8'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
											/>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
											/>
										</svg>
										<span className='font-bold pl-2'>
											{' '}
											{post.location_name_ka}
										</span>
									</li>
									<li className='flex  pb-6 '>
										{' '}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											class='w-8 h-8'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
											/>
										</svg>
										<span className='font-bold pl-2'> {'Free'}</span>
									</li>

									<li className='flex  '>
										{' '}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											class='w-8 h-8'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
											/>
										</svg>
										<span className='font-bold pl-2'>
											{' '}
											{`${post.start_date.slice(0, 10)} -
												${post.end_date.slice(0, 10)}`}
										</span>
									</li>
								</ul>
							</div>
						</>
					</div>
				</div>
			) : (
				'hai'
			)}
			{/* <div
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
			</div> */}
		</>
	);
}

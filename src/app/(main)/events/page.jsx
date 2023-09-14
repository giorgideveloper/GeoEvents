/* eslint-disable jsx-a11y/alt-text */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { eventApi } from '../../../../api/api';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

// eslint-disable-next-line @next/next/no-async-client-component
export default function Page() {
	let [post, setPost] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await eventApi();
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
			<div className='container mx-auto'>
				<h1 className='popular-events pt-8'>All Events</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-8'>
					{post
						? post.map(item => (
								<>
									<div key={item.id}>
										<Link href={`events/${item.id}`} alt=''>
											<div className='  bg-white border border-gray-200 rounded-lg shadow my-card'>
												<Image
													width={350}
													height={197}
													src={item.image}
													alt={'image'}
												/>

												<div className='p-5'>
													<h5 className='mb-2 text-lg font-bold tracking-tight text-gray-900'>
														{item.name_ka}
													</h5>

													<p
														className='mb-3 font-normal description text-gray-700 dark:text-gray-400'
														dangerouslySetInnerHTML={
															item.text_ka === undefined
																? ''
																: Dangerously(item.text_ka.slice(0, 120))
														}
													></p>
													<p className='font-bold'>{item.category_name_ka}</p>
												</div>
											</div>
										</Link>
									</div>
								</>
						  ))
						: 'Loading'}
				</div>
			</div>
			<Footer />
		</>
	);
}

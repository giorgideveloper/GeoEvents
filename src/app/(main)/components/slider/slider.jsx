/* eslint-disable jsx-a11y/alt-text */
'use client';
import { useEffect, useState } from 'react';
import { eventApi, eventApiSearch } from '../../../../../api/api';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// // Import Swiper styles
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line @next/next/no-async-client-component
import 'swiper/swiper-bundle.css'; // Import Swiper styles

export default function Slider() {
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

	// const Dangerously = str => {
	// 	const markup = { __html: `${str}` };
	// 	return markup;
	// };

	return (
		<>
			<div className='container max-w-screen-xl z-10 mx-auto my-slider'>
				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1   gap-1 pt-8'>
					<div className='col-span-2 '>
						{post ? (
							<div className='w-full relative '>
								<Swiper
									className='relative z-10'
									modules={[Navigation, Pagination, Scrollbar, A11y]}
									spaceBetween={50}
									slidesPerView={1}
									navigation
									pagination={{ clickable: true }}
									lazy='true'
								>
									{post?.map(img => (
										<SwiperSlide key={img.id}>
											{' '}
											<Link href={`events/${img.id}`}>
												<Image
													className='w-full cursor-pointer z-10  h-auto max-w-full'
													src={
														img.image ||
														'https://follow.geoevents.ge/media/media/obieqtebi/default.jpg'
													}
													alt={`${post.object_name}`}
													width={400}
													height={500}
													loading='lazy'
												/>
											</Link>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						) : (
							'loading'
						)}
					</div>
				</div>
			</div>
		</>
	);
}

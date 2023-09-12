/* eslint-disable jsx-a11y/alt-text */
'use client';
import { useEffect, useState } from 'react';
import { eventApiSearch } from '../../../../../api/api';
import Image from 'next/image';
import Link from 'next/link';

// // Import Swiper styles
import 'swiper/swiper-bundle.css'; // Import Swiper styles
// eslint-disable-next-line @next/next/no-async-client-component
export default function Slider() {
	let [post, setPost] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await eventApiSearch();
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
			<div className='container mx-auto my-slider'>
				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 pt-8'>
					{post ? (
						<div className='w-full relative  '>
							{' '}
							<Image
								className='w-full '
								src={post[0].image}
								alt={`image`}
								width={400}
								height={500}
							/>
							<div
								className=' top-0  z-20 absolute w-full h-full flex  slider-fade justify-center items-center 
             bg-slate-900/30 backdrop-brightness-35 '
							></div>
							<div className='absolute bg-slate-200/30 backdrop-brightness-35  z-50   md:text-4xl text-center inset-x-0 shadow-xl w-2/4 md:w-2/5 mx-auto  slider-title '>
								{post[0].name_ka}
							</div>
							<div className='absolute z-50 bottom-0 slider-btn   right-0'>
								<div className='flex'>
									<span className='pr-2'>
										{' '}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-8 h-8 '
											viewBox='0 0 21 21'
											fill='none'
										>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M10.4497 0.0167427C4.69695 0.00750187 0.026 4.66347 0.0167592 10.4162C0.00751844 16.1689 4.66348 20.8399 10.4162 20.8491C16.1689 20.8584 20.8399 16.2024 20.8491 10.4497C20.8584 4.69693 16.2024 0.0259835 10.4497 0.0167427ZM5.60474 11.3458L9.50453 15.2582C10.0122 15.7675 10.8366 15.7688 11.3459 15.2611C11.8551 14.7535 11.8565 13.9291 11.3488 13.4198L9.66813 11.7337L14.3369 11.7412C15.056 11.7424 15.6399 11.1604 15.641 10.4413C15.6422 9.72219 15.0602 9.13833 14.3411 9.13718L9.67231 9.12968L11.3584 7.449C11.8677 6.94137 11.869 6.11693 11.3614 5.60768C10.8537 5.09842 10.0293 5.0971 9.52004 5.60472L5.60769 9.50451C5.09844 10.0121 5.09711 10.8366 5.60474 11.3458Z'
												fill='white'
											/>
										</svg>
									</span>
									<span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-8 h-8'
											viewBox='0 0 21 21'
											fill='none'
										>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M10.4329 20.8491C16.1857 20.8491 20.8491 16.1857 20.8491 10.4329C20.8491 4.68021 16.1857 0.0167236 10.4329 0.0167236C4.68021 0.0167236 0.0167236 4.68021 0.0167236 10.4329C0.0167236 16.1857 4.68021 20.8491 10.4329 20.8491ZM15.2597 9.51225L11.3536 5.60617C10.8451 5.09771 10.0207 5.09771 9.51225 5.60617C9.00378 6.11465 9.00378 6.93904 9.51225 7.44752L11.1956 9.1309H6.52685C5.80777 9.1309 5.22482 9.71383 5.22482 10.4329C5.22482 11.152 5.80777 11.7349 6.52685 11.7349H11.1956L9.51225 13.4183C9.00378 13.9268 9.00378 14.7512 9.51225 15.2597C10.0207 15.7681 10.8451 15.7681 11.3536 15.2597L15.2597 11.3536C15.7681 10.8451 15.7681 10.0207 15.2597 9.51225Z'
												fill='white'
											/>
										</svg>
									</span>
								</div>{' '}
							</div>
						</div>
					) : (
						'loading'
					)}
				</div>
			</div>
		</>
	);
}

// 'use client';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
// import { eventApi } from '../../../../../api/api';

// export default function slider() {
// 	let [post, setPost] = useState();
// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await eventApi();
// 				setPost(response);
// 			} catch (e) {
// 				console.log(e);
// 			}
// 		};

// 		fetchData();
// 	}, []);
// 	return (
//
// 	);
// }

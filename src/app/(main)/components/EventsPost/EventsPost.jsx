import { eventApi } from '../../../../../api/api';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line @next/next/no-async-client-component
export default async function EventsPost() {
	const response = await eventApi();

	const Dangerously = str => {
		const markup = { __html: `${str}` };
		return markup;
	};

	return (
		<>
			<div className='container max-w-screen-xl mx-auto'>
				<h1 className='popular-events pt-8'>Popular Events</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-8'>
					{response
						? response.map(item => (
								<div key={item.id}>
									<div>
										<Link href={`events/${item.id}`} alt=''>
											<div className=' h-full bg-[#ccc0]    my-card'>
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
														className='mb-3 description font-normal text-gray-700 dark:text-gray-500'
														dangerouslySetInnerHTML={Dangerously(
															item.text_ka.slice(0, 150)
														)}
													></p>

													<p className='font-bold text-[#4F709C]'>
														{item.category_name_ka}
													</p>
												</div>
											</div>
										</Link>
									</div>
								</div>
						  ))
						: 's'}
				</div>
			</div>
		</>
	);
}

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SearchContainer({ item }) {
	return (
		<>
			<div className='overflow-auto    max-h-52  w-full md:w-96'>
				{item
					? item.map(item => (
							<div className='' key={item.id}>
								<Link href={`/events/${item.id}`} alt=''>
									<div className='p-2 h-full flex bg-white search-content z-50 shadow search-card  overflow-hidden '>
										<Image
											width={350}
											height={197}
											src={item.image}
											alt={'image'}
										/>

										<div className='p-5 h-full overflow-hidden'>
											<h5 className='mb-2 text-md font-bold tracking-tight  text-gray-900'>
												{item.name_ka}
											</h5>
										</div>
									</div>
								</Link>
							</div>
					  ))
					: ''}
			</div>
		</>
	);
}

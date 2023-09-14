import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

export default function SearchContainer({ item }) {
	useEffect(() => {
		console.log(item);
	}, [item]);

	return (
		<>
			{item
				? item.map(item => (
						<div className=' pb-5 z-50' key={item.id}>
							<Link href={`/events/${item.id}`} alt=''>
								<div className=' h-full bg-white border border-gray-200  shadow search-card '>
									<Image
										width={350}
										height={197}
										src={item.image}
										alt={'image'}
									/>

									<div className='p-5 h-full'>
										<h5 className='mb-2 text-xs font-bold tracking-tight text-gray-900'>
											{item.name_ka}
										</h5>
									</div>
								</div>
							</Link>
						</div>
				  ))
				: ''}
		</>
	);
}

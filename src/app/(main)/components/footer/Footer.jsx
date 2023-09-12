import React from 'react';

export default function Footer() {
	return (
		<div className='pt-10 bottom-0'>
			<footer className='bg-white  border-gray-200 dark:bg-gray-900 '>
				<div className='max-w-screen-2xl  flex flex-wrap items-center text-center justify-between text-cyan-50 mx-auto py-3'>
					<div className='flex  '>
						<p className='py-5'>© Copyright 2023</p>
					</div>
					<p className='py-5 text-slate-400/80 text-lg'>
						created by Irakli Beridze{' '}
					</p>
				</div>
			</footer>
		</div>
	);
}

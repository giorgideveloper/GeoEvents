import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { eventApi } from '../../../../api/api';
import Image from 'next/image';

export default async function page() {
	const response = await eventApi();
	console.log('🚀 ~ file: page.jsx:8 ~ page ~ response:', response);
	return (
		<>
			{' '}
			<Navbar />
			<div className='h-screen'>
				<h1 className=' text-4xl text-center pt-10'>ჩვენს შესახებ</h1>
				{response.map(res => (
					<>
						<Image width={350} height={197} src={res.image} alt={'image'} />
						<p key={res.id}>{res.category_name_ka}</p>
					</>
				))}
			</div>
			<Footer className='' />
		</>
	);
}

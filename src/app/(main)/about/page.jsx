import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function page() {
	return (
		<>
			{' '}
			<Navbar />
			<div>
				<h1 className=' text-4xl text-center pt-10'>ჩვენს შესახებ</h1>
			</div>
			<Footer className='' />
		</>
	);
}

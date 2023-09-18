import Navbar from '../components/Navbar';
import Events from '../components/EventsPost';
import Slider from '../components/slider/slider';
import Footer from '../components/footer/';
import { Metadata } from 'next';
import Head from 'next/head';
// either Static metadata

export default function Page() {
	return (
		<>
			<Head>
				<title>Your Page Title</title>
				<meta name='description' content='This is the page description.' />
			</Head>
			<div className='page-container'>
				<Navbar />
				<Slider />
				<Events />
			</div>
			<Footer />
		</>
	);
}

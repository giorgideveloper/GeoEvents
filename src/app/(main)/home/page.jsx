'use client';
import Navbar from '../components/Navbar';
import Events from '../components/EventsPost';
import Slider from '../components/slider/slider';
import Footer from '../components/footer/';

export default function Page() {
	return (
		<>
			<div className='page-container'>
				<Navbar />
				<Slider />
				<Events />
			</div>
			<Footer />
		</>
	);
}

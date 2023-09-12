'use client';
import Navbar from '../components/Navbar';
import Events from '../components/events/Events';
import Slider from '../components/slider/slider';

export default function Page() {
	return (
		<>
			<Navbar />
			<Slider />
			<Events />
		</>
	);
}

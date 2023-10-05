import Events from '../components/EventsPost';
import Slider from '../components/slider/slider';

// either Static metadata

export default function Page() {
	return (
		<>
			<div className='page-container'>
				<Slider />
				<Events />
			</div>
		</>
	);
}

import Navbar from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Loading from './Loading.jsx';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body suppressContentEditableWarning={true} className={inter.className}>
				<Navbar />
				<Loading />

				{children}
				<Footer />
			</body>
		</html>
	);
}

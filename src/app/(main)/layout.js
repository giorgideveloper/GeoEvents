import Navbar from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Loading from './Loading.jsx';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body suppressContentEditableWarning={true} className={inter.className}>
				<Loading />
				{children}
			</body>
		</html>
	);
}

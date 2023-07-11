import { Box } from '@chakra-ui/react';
import Footer from '@/components/ui/footer/Footer';
import Navbar from '@/components/ui/navbar/Navbar';
import Head from 'next/head';

function Layout({ children, pagina }) {
	return (
		<Box as="main">
			<Head>
				<title>{`Mini Store - ${pagina}`}</title>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</Box>
	);
}

export default Layout;

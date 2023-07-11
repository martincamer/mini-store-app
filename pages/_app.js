import MiniStoreCart from '@/components/MiniStoreCart';
import { MiniStoreProvider } from '@/context/MiniStoreContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<MiniStoreProvider>
			<MiniStoreCart />
			<Component {...pageProps} />
		</MiniStoreProvider>
	);
}

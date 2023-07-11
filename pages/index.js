import CarouselHome from '@/components/home/CarouselHome';
import LatestPosts from '@/components/home/LatestPosts';
import MobileProducts from '@/components/home/MobileProducts';
import NewYearSale from '@/components/home/NewYearSale';
import ServicesHome from '@/components/home/ServicesHome';
import ShopInstaOur from '@/components/ui/ShopInstaOur';
import Suscribe from '@/components/ui/Suscribe';
import Layout from '@/layout/Layout';

export default function Home() {
	return (
		<Layout pagina="Inicio">
			<CarouselHome />
			<ServicesHome />
			<MobileProducts />
			<NewYearSale />
			<LatestPosts />
			<Suscribe />
			<ShopInstaOur />
		</Layout>
	);
}

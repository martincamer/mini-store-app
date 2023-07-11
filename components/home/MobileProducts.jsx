import { productos } from '@/contents/products';
import { Box, Container, Text } from '@chakra-ui/react';
import Link from 'next/link';
import CardProductMobile from '../product/CardProductMobile';

const MobileProducts = () => {
	return (
		<Container
			maxW={1220}
			as={'section'}
			margin={'0 auto'}
			padding={'0 20px'}
		>
			<Box
				className="w-full flex flex-col gap-20 max-md:gap-10"
				as="div"
			>
				<Box
					as="div"
					className="w-full flex justify-between items-center"
				>
					<Text
						className="font-medium text-3xl max-md:text-2x max-md:text-lg"
						as={'h3'}
					>
						PRODUCTOS MOBILES
					</Text>
					<Link
						href={'/'}
						className="font-medium text-terciary text-xl max-md:text-lg decoration border-b-4 border-primary"
					>
						IR A LA TIENDA
					</Link>
				</Box>

				<Box className="grid grid-cols-4 max-md:grid-cols-2 w-full gap-12">
					{productos.mobile.map(card => (
						<CardProductMobile
							key={card._id}
							card={card}
						/>
					))}
				</Box>

				<Box
					as="div"
					className="w-full flex justify-between items-center"
				>
					<Text
						className="font-medium text-3xl max-md:text-lg"
						as={'h3'}
					>
						TOP RELOJES
					</Text>
					<Link
						href={'/'}
						className="font-medium text-terciary text-xl max-md:text-lg decoration border-b-4 border-primary"
					>
						IR A LA TIENDA
					</Link>
				</Box>

				<Box className="grid grid-cols-4 max-md:grid-cols-2 w-full gap-12">
					{productos.smart_watches.map(card => (
						<CardProductMobile
							key={card._id}
							card={card}
						/>
					))}
				</Box>
			</Box>
		</Container>
	);
};

export default MobileProducts;

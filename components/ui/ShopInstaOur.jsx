import { Box, Container, Text } from '@chakra-ui/react';
import uno from '../../public/fotos/Rectangle 172.png';
import dos from '../../public/fotos/Rectangle 173.png';
import tres from '../../public/fotos/Rectangle 174.png';
import cuatro from '../../public/fotos/Rectangle 175.png';
import cinco from '../../public/fotos/Rectangle 176.png';
import Image from 'next/image';

function ShopInstaOur() {
	return (
		<Container
			maxW={1440}
			margin={'0 auto'}
			padding={'10px 20px'}
			as="div"
		>
			<Box className="space-y-5">
				<Text
					className="text-terciary text-center font-medium text-4xl max-md:text-lg"
					as="h3"
				>
					COMPRA EN NUESTRO INSTAGRAM
				</Text>
			</Box>
			<Box className="flex flex-wrap max-md:justify-center gap-10 mt-20 max-md:mt-10">
				{show_imagenes.map(imagen => (
					<Image
						className="rounded-lg shadow-lg shadow-black/30 hover:scale-105 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer max-md:w-[140px]"
						key={imagen}
						alt="imagen"
						src={imagen.img}
					/>
				))}
			</Box>
		</Container>
	);
}

const show_imagenes = [
	{ img: uno },
	{ img: dos },
	{ img: tres },
	{ img: cuatro },
	{ img: cinco },
];

export default ShopInstaOur;

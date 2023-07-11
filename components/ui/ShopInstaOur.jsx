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
			padding={'50px 20px'}
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
			<Box>
				{show_imagenes.map(imagen => (
					<Image src={imagen} />
				))}
			</Box>
		</Container>
	);
}

const show_imagenes = [
	{
		uno: uno,
		dos: dos,
		tres: tres,
		cuatro: cuatro,
		cinco: cinco,
	},
];

export default ShopInstaOur;

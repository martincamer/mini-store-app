import { Box, Card, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

function CardProductMobile({ card }) {
	return (
		<Link href={`/producto/mobile/${card.url}`}>
			<Card className="hover:translate-x-1 transiton-all duration-300 flex flex-col gap-2">
				<Image
					className="h-full w-full rounded-lg"
					src={card.imagen}
					alt={`${card.titulo} imagen`}
				/>
				<Box
					as="div"
					className="flex justify-between  items-center"
				>
					<Text
						as={'p'}
						className="uppercase text-lg max-md:text-sm text-terciary font-medium"
					>
						{card.titulo}
					</Text>
					<Text
						className="font-medium text-primary text-lg max-md:text-sm"
						as="p"
					>
						$ {card.precio}
					</Text>
				</Box>
			</Card>
		</Link>
	);
}

export default CardProductMobile;

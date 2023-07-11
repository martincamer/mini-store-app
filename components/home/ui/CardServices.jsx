import { Box, Card, CardBody, Text } from '@chakra-ui/react';

const CardServices = ({ card }) => {
	return (
		<Card className="bg-fourty/90 shadow-lg shadow-black/20 p-10 max-md:p-5 rounded-md flex">
			<CardBody className="flex max-md:flex-col max-md:items-center gap-5">
				<Box className="text-primary">{card.icono}</Box>
				<Box>
					<Box className="flex flex-col gap-2">
						<Text className="uppercase font-medium text-terciary max-md:text-center">
							{card.titulo}
						</Text>
						<Text className="max-md:text-center">{card.descripcion}</Text>
					</Box>
				</Box>
			</CardBody>
		</Card>
	);
};

export default CardServices;

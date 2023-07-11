import { Box, Container, Text } from '@chakra-ui/react';

function Suscribe() {
	return (
		<Container
			maxW={1440}
			margin={'0 auto'}
			padding={'50px 20px'}
			as="div"
		>
			<Box className="bg-terciary px-5 py-10 flex items-center max-md:flex-col gap-10 max-md:gap-6">
				<Box className="w-3/4 space-y-3">
					<Text
						className="text-white text-xl max-md:text-center"
						as="h3"
					>
						SUSCRIBITE A NUESTROS PRODUCTOS
					</Text>
					<Text className="text-base text-gray-400 font-[300]">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Repudiandae, harum!
					</Text>
				</Box>
				<Box className="flex justify-between bg-white  w-full shadow-md shadow-gray-800">
					<input className="w-full outline-none p-2" />
					<Text className="bg-primary p-2 uppercase font-medium text-terciary max-md:text-sm">
						Suscribite
					</Text>
				</Box>
			</Box>
		</Container>
	);
}

export default Suscribe;

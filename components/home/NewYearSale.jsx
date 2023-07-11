import { Box, Button, Text, Container, useMediaQuery } from '@chakra-ui/react';

function NewYearSale() {
	const [isLargerThan769] = useMediaQuery('(max-width: 764px)');

	return (
		<Container
			maxW={'100%'}
			minH={'60vh'}
			mx={'0 auto'}
			as={'section'}
			className="bg-secondary mt-32 px-10 max-md:h-[100%] max-md:py-20 pt-20"
		>
			<Box
				maxW={1440}
				minH={'60vh'}
				className="grid grid-cols-2 max-md:grid-cols-1 items-center justify-items-center mx-auto max-md:gap-12 gap-14"
			>
				<Box
					className="w-full flex flex-col gap-8"
					as="div"
				>
					<Box className="flex items-center gap-2 ">
						<Box
							className="bg-terciary h-[2px] w-8 "
							as="div"
						/>
						<Text
							className="font-medium text-xl max-md:text-lg text-terciary"
							as={'p'}
						>
							10% OFF
						</Text>
					</Box>
					<Box>
						<Text className="font-normal text-6xl max-md:text-3xl text-terciary uppercase max-md:text-center">
							venta de año nuevo
						</Text>
					</Box>
					<Box className="max-md:flex max-md:justify-center">
						<Button className="bg-terciary text-white py-2 px-10 uppercase font-medium max-md:text-sm text-lg hover:shadow-md hover:shadow-gray-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
							comprar ya
						</Button>
					</Box>
				</Box>

				<Box
					className="h-full w-full rounded-t-xl max-md:rounded-lg max-md:shadow-lg max-md:shadow-black/30 max-md:w-[400px] max-md:h-[400px] max-md:max-w-full"
					backgroundImage={`url(https://www.apple.com/la/ios/photos/images/overview/icloud__f5ycsacai06e_large.jpg)`}
					backgroundSize={isLargerThan769 ? 'auto' : 'cover'}
					backgroundRepeat={'no-repeat'}
					backgroundPosition={'center'}
				></Box>
			</Box>
		</Container>
	);
}

export default NewYearSale;

import { useState } from 'react';
import { Box, Button, Container, Text } from '@chakra-ui/react';
import { productos } from '@/contents/products';
import Layout from '@/layout/Layout';
import CardProductMobile from '@/components/product/CardProductMobile';

function Tienda() {
	const [all, setAll] = useState(true);

	return (
		<Layout pagina="Tienda">
			<Container
				maxWidth={1220}
				className="mx-auto pt-[160px] max-md:px-10  max-md:py-[140px]"
			>
				<Box className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse">
					<Box
						className={`${
							all
								? 'translate-x-[0] opacity-1'
								: ' translate-x-[-500px] opacity-0'
						} grid grid-cols-4 gap-4 col-span-2 transition-all duration-300 ease-in-out max-md:col-span-1 max-md:grid-cols-2`}
					>
						{all &&
							productos.mobile.map(card => (
								<CardProductMobile
									card={card}
									key={card._id}
								/>
							))}
						{all &&
							productos.smart_watches.map(card => (
								<CardProductMobile
									card={card}
									key={card._id}
								/>
							))}
					</Box>
					<Box className="col-span-1 space-y-6">
						<Box>
							<input
								className="bg-gray-200/50 shadow-md shadow-black/10 p-2 w-full  text-gray-900 placeholder:text-gray-900 outline-none border-none"
								placeholder="buscar..."
							/>
						</Box>
						<Box className="space-y-4">
							<Text
								as={'p'}
								className="font-[500] text-terciary"
							>
								CATEGORIAS
							</Text>
							<Box className="flex flex-col justify-start items-start space-y-4 max-md:flex-row max-md:items-center max-md:gap-5 max-md:space-y-0">
								<Button
									className={`${
										all === true ? 'text-primary' : 'text-terciary'
									} max-md:text-sm`}
									onClick={() => setAll(!all)}
								>
									Todos los productos
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</Layout>
	);
}

export default Tienda;

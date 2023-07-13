import { Box, Button, Container, Text } from '@chakra-ui/react';
import Layout from '@/layout/Layout';
import Link from 'next/link';
import ServicesHome from '@/components/home/ServicesHome';
import Image from 'next/image';
import img from '../public/fotos/igor-miske-CwVE4xCAA8Y-unsplash.png';
import Suscribe from '@/components/ui/Suscribe';
import ShopInstaOur from '@/components/ui/ShopInstaOur';

function Contacto() {
	return (
		<Layout pagina={'About'}>
			<Container className="mx-auto space-y-20">
				<Box className="bg-fourty py-[140px] max-md:px-10">
					<Box
						maxW={1220}
						className="mx-auto space-y-4"
					>
						<Text
							className="text-6xl text-center text-terciary"
							as={'h2'}
						>
							Contacto
						</Text>
						<Box className="flex items-center justify-center gap-2">
							<Text className="text-primary">
								<Link href={'/'}>Home</Link>
							</Text>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-3 h-3 text-terciary"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>

							<Link href={'/contacto'}>Contacto</Link>
						</Box>
					</Box>
				</Box>

				<Box
					maxW={1220}
					className="mx-auto grid grid-cols-2 max-md:grid-cols-1 space-x-10 max-md:space-x-0 max-md:px-10 max-md:w-full max-md:space-y-10"
				>
					<Box className="flex flex-col justify-evenly mt-10 max-md:items-center max-md:space-y-5 space-y-4 max-md:mt-0">
						<Text className="text-terciary text-3xl font-medium">
							Contacto Info
						</Text>
						<Text className="max-md:text-center">
							Tortor dignissim convallis aenean et tortor at risus viverra
							adipiscing.
						</Text>
						<Box className="flex gap-x-20 max-md:flex-col max-md:gap-y-10">
							<Box>
								<Text className="text-terciary text-3xl font-medium">
									Oficina
								</Text>
								<Box>
									<Text>ARG Glenstone Ave 65802</Text>
									<Text>+123 222 333 44</Text>
									<Text>+123 666 777 88</Text>
									<Text>ministore@yourinfo.com</Text>
								</Box>
							</Box>
							<Box>
								<Text className="text-terciary text-3xl font-medium">
									Administracion
								</Text>
								<Box>
									<Text>ARG Glenstone Ave 65802</Text>
									<Text>+123 222 333 44</Text>
									<Text>+123 666 777 88</Text>
									<Text>ministore@yourinfo.com</Text>
								</Box>
							</Box>
						</Box>
					</Box>

					<Box className="space-y-6">
						<Box className="space-y-5">
							<Text className="text-terciary text-3xl font-medium">
								TIENES ALGUNA PREGUNTA?
							</Text>
							<Text>Usa el formulario para mandarme un mensaje.</Text>
							<form className="space-y-4">
								<Box className="flex space-x-4">
									<input
										className="w-full p-4 border-[1px] border-gray-300 text-gray-900 placeholder:text-gray-600 outline-none"
										type="text"
										placeholder="Pon tu nombre"
									/>
									<input
										className="w-full p-4 border-[1px] border-gray-300 text-gray-900 placeholder:text-gray-600 outline-none"
										type="text"
										placeholder="Pon tu apellido"
									/>
								</Box>

								<input
									className="w-full p-4 border-[1px] border-gray-300 text-gray-900 placeholder:text-gray-600 outline-none"
									type="number"
									placeholder="Pon tu telefono"
								/>
								<input
									className="w-full p-4 border-[1px] border-gray-300 text-gray-900 placeholder:text-gray-600 outline-none"
									type="text"
									placeholder="Escribe aqui tu asunto"
								/>
								<input
									className="w-full p-4 border-[1px] border-gray-300 text-gray-900 placeholder:text-gray-600 outline-none"
									type="text"
									placeholder="Escribe tu mensaje"
								/>

								<Button className="bg-terciary text-primary py-3 px-6 shadow-lg shadow-black/20">
									ENVIAR MENSAJE
								</Button>
							</form>
						</Box>
					</Box>
				</Box>

				<Box
					maxW={1220}
					className="mx-auto grid grid-cols-2 max-md:grid-cols-1 space-x-10 max-md:space-x-0 max-md:px-10 max-md:w-full"
				>
					<Image
						src={img}
						className="h-[350px]"
						alt=""
					/>
					<Box className="flex flex-col justify-evenly mt-10 max-md:items-center max-md:space-y-5">
						<Text className="text-terciary text-3xl font-medium">
							How was Ministore Found?
						</Text>
						<Text className="max-md:text-center">
							Risus augue curabitur diam senectus congue velit et. Sed vitae
							metus nibh sit era. Nulla adipiscing pharetra pellentesque
							maecenas odio eros at. Et libero vulputate amet duis erat volutpat
							vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing
							pharetra pellentesque maecenas odio eros at. Quam libero etiam et
							in ac at quis. Sed vitae metus nibh sit era. Nulla adipiscing
							pharetra pellentesque maecenas odio eros at. Et libero vulputate
							amet duis erat volutpat vitae eget. Quam libero etiam et in ac at
							quis. Risus augue curabitur diam senectus congue velit et.{' '}
						</Text>
						<Box>
							<Button className="bg-terciary text-primary py-3 px-6 shadow-lg shadow-black/20">
								SHOP OUR STORE
							</Button>
						</Box>
					</Box>
				</Box>

				<Box className="py-20">
					<Suscribe />
				</Box>
				<Box>
					<ShopInstaOur />
				</Box>
			</Container>
		</Layout>
	);
}

export default Contacto;

import { Box, Button, Container, Text } from '@chakra-ui/react';
import Layout from '@/layout/Layout';
import Link from 'next/link';
import ServicesHome from '@/components/home/ServicesHome';
import Image from 'next/image';
import img from '../public/fotos/igor-miske-CwVE4xCAA8Y-unsplash.png';
import Suscribe from '@/components/ui/Suscribe';
import ShopInstaOur from '@/components/ui/ShopInstaOur';

function about() {
	return (
		<Layout pagina={'About'}>
			<Container className="mx-auto">
				<Box className="bg-fourty py-[100px] max-md:px-10">
					<Box
						maxW={1220}
						className="mx-auto space-y-4"
					>
						<Text
							className="text-6xl text-center text-terciary"
							as={'h2'}
						>
							ABOUT US
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

							<Link href={'/about'}>About Us</Link>
						</Box>
					</Box>
				</Box>
				<Box className="py-20">
					<ServicesHome />
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

export default about;

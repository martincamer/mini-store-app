import Link from 'next/link';
import { Box, Button, Container, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

function Footer() {
	return (
		<Container
			maxW={1220}
			className="mx-auto py-20 px-10 grid grid-cols-4 space-x-20 max-lg:space-x-10 max-md:grid-cols-1 max-md:justify-center max-md:items-center max-md:space-y-10"
			as={'footer'}
		>
			<Box
				className="flex flex-col max-md:justify-center space-y-6"
				as="div"
			>
				<Text className="text-xl font-medium text-terciary max-md:text-center">
					MiniStore.
				</Text>
				<Text
					className="font-[300] text-terciary"
					as={'p'}
				>
					Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
					Gravida massa volutpat aenean odio erat nullam fringilla.
				</Text>
				<Box className="flex justify-around text-3xl text-primary ">
					<FaFacebook className="hover:scale-105 hover:text-terciary transition-all duration-300 ease-in-out cursor-pointer" />
					<FaInstagram className="hover:scale-105 hover:text-terciary transition-all duration-300 ease-in-out cursor-pointer" />
					<FaWhatsapp className="hover:scale-105 hover:text-terciary transition-all duration-300 ease-in-out cursor-pointer" />
					<FaTwitter className="hover:scale-105 hover:text-terciary transition-all duration-300 ease-in-out cursor-pointer" />
				</Box>
			</Box>
			<Box
				className="flex flex-col space-y-4"
				as="div"
			>
				<Text className="font-medium text-lg max-md:text-center">
					NUESTROS LINKS.
				</Text>

				<Box className="flex flex-col max-md:justify-center max-md:items-center space-y-2 text-sm">
					<Link
						className="hover:scale-105 hover:text-primary hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
						href={'/'}
					>
						HOME
					</Link>
					<Link
						className="hover:scale-105 hover:text-primary hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
						href={'/'}
					>
						ABOUT
					</Link>
					<Link
						className="hover:scale-105 hover:text-primary hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
						href={'/'}
					>
						SHOP
					</Link>
					<Link
						className="hover:scale-105 hover:text-primary hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
						href={'/'}
					>
						BLOGS
					</Link>
					<Link
						className="hover:scale-105 hover:text-primary hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
						href={'/'}
					>
						CONTACT
					</Link>
				</Box>
			</Box>
			<Box
				className="flex flex-col space-y-4 max-md:items-center"
				as="div"
			>
				<Text className="font-medium text-lg max-md:text-center">
					AYUDA & INFO.
				</Text>

				<Box className="flex flex-col space-y-2 text-sm">
					<Link
						className="hover:scale-105 hover:text-primary hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
						href={'/'}
					>
						PEDIR REEMBOLSO
					</Link>
					<Link
						className="hover:scale-105 hover:text-primary hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
						href={'/'}
					>
						CAMBIAR CONTRASEÑA
					</Link>
					<Link
						className="hover:scale-105 hover:text-primary hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
						href={'/'}
					>
						SOBRE LA EMPRESA
					</Link>
					<Link
						className="hover:scale-105 hover:text-primary hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
						href={'/'}
					>
						FAQS
					</Link>
					<Link
						className="hover:scale-105 hover:text-primary hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
						href={'/'}
					>
						PELOCIES ACEPTED
					</Link>
				</Box>
			</Box>
			<Box
				className="flex flex-col space-y-4"
				as="div"
			>
				<Text className="font-medium text-lg max-md:text-center">
					CONTACTANOS.
				</Text>

				<Box className="flex flex-col space-y-2 text-sm">
					<Box>
						<input
							className="bg-gray-200 px-10 py-4 rounded-lg text-gray-900 placeholder:text-gray-900 outline-none border-none w-full"
							placeholder="Correo Electronico"
						/>
						<Button className="bg-terciary text-primary py-2 px-4 rounded-lg mt-4">
							Send
						</Button>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}

export default Footer;

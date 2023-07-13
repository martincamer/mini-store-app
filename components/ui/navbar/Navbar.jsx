import React, { useContext, useState } from 'react';
import {
	Box,
	Button,
	Container,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	FormControl,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import MiniStoreContext from '@/context/MiniStoreContext';
import Link from 'next/link';

function Navbar() {
	const { handleClickCart } = useContext(MiniStoreContext);
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [click, setClick] = useState(false);

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);
	return (
		<Container
			padding={'20px max-md:px-0'}
			className="shadow-md shadow-black/10 fixed top-0 w-full bg-white z-40"
		>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				maxW={1220}
				margin={'0 auto'}
				padding={'20px'}
			>
				<Box
					className=" color-primary"
					as="div"
				>
					<Text
						as={'h3'}
						className="font-medium text-3xl text-terciary"
					>
						MiniStore-App.
					</Text>
				</Box>

				<Box
					className="flex gap-10 max-lg:hidden"
					as="nav"
				>
					{links.map(link => (
						<Link
							className="font-medium text-lg uppercase text-terciary hover:text-primary transition-all ease-out duration-300"
							href={link.href}
							key={link.link}
						>
							{link.link}
						</Link>
					))}
				</Box>

				<Box
					className="flex gap-8 max-lg:hidden"
					as="nav"
				>
					<Box
						className="cursor-pointer"
						onClick={handleClickCart}
						as="div"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
							/>
						</svg>
					</Box>
					<Box
						onClick={onOpen}
						as="div"
						className="cursor-pointer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>

						<Modal
							initialFocusRef={initialRef}
							finalFocusRef={finalRef}
							isOpen={isOpen}
							onClose={onClose}
							isCentered
						>
							<ModalContent className="bg-gray-100 shadow-lg p-4 max-w-[600px] mx-auto my-24 rounded-lg">
								<ModalCloseButton
									className="mb-4"
									css={{
										display: 'flex',
										justifyContent: 'end',
									}}
								/>
								<ModalBody pb={6}>
									<FormControl>
										<Input
											className="w-full rounded-lg p-2 outline-none shadow-md"
											ref={initialRef}
											placeholder="Buscar un producto...."
										/>
									</FormControl>
									<FormControl>
										<Input
											className="mt-5 bg-white p-2 px-10 rounded-lg shadow-md text-base font-normal text-gray-400 cursor-pointer"
											ref={initialRef}
											type="submit"
											value={'Buscar'}
										/>
									</FormControl>
								</ModalBody>
							</ModalContent>
						</Modal>
					</Box>
					<Box as="div">
						<Link href={'/login'}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
								/>
							</svg>
						</Link>
					</Box>
				</Box>
				<Box
					className="hidden max-md:block"
					onClick={() => setClick(!click)}
				>
					{!click ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					)}
				</Box>
			</Box>
			{click && (
				<Box
					className={`${
						click
							? 'translate-x-[0] opacity-1'
							: ' translate-x-[-500px] opacity-0'
					} fixed  w-full h-[50%] bg-gray-100 flex flex-col items-center justify-center space-y-8 z-30 transition-all duration-300 ease-in-out`}
				>
					{links.map(link => (
						<Link
							className="font-medium text-xl uppercase text-terciary hover:text-primary transition-all ease-out duration-300"
							href={link.href}
							key={link.link}
						>
							{link.link}
						</Link>
					))}
				</Box>
			)}
		</Container>
	);
}

const links = [
	{ link: 'home', href: '/' },
	{ link: 'tienda', href: 'tienda' },
	{ link: 'about', href: 'about' },
	{ link: 'blog', href: 'blog' },
	{ link: 'contacto', href: 'contacto' },
];

export default Navbar;

import { useRouter } from 'next/router';
import {
	Box,
	Button,
	Card,
	CardBody,
	Container,
	List,
	ListItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useMediaQuery,
} from '@chakra-ui/react';
import { productos } from '@/contents/products';
import Layout from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import MiniStoreContext from '@/context/MiniStoreContext';

function Mobile() {
	const { addToCart } = useContext(MiniStoreContext);

	const [isLargerThan1200] = useMediaQuery('(max-width: 1200px)');

	const params = useRouter();

	console.log(params.query.url);

	return (
		<Layout pagina={'producto'}>
			<Container
				maxW={isLargerThan1200 ? '100%' : 1220}
				className="py-[100px] px-[20px] max-lg:py-[40px] flex flex-col gap-20"
				margin={'0 auto'}
			>
				<Box
					maxW={isLargerThan1200 ? '100%' : 990}
					margin={'0 auto'}
				>
					{productos.mobile.map(card => (
						<>
							{params.query.url == card.url && (
								<Box
									as="div"
									key={card._id}
									className="flex max-lg:flex-col-reverse gap-10"
								>
									<Box
										className="max-lg:flex max-lg:items-center max-lg:justify-center"
										as="div"
									>
										<Image
											className="h-[100%] w-[60rem] max-md:h-[400px] max-md:w-[300px]"
											src={card.imagen}
											alt={`${card.nombre} imagen`}
										/>
									</Box>
									<Box
										as="div"
										className="flex flex-col gap-5"
									>
										<Box>
											<Text
												className="uppercase text-terciary text-xl"
												as={'h3'}
											>
												{card.titulo}
											</Text>
										</Box>
										<Box className="flex items-center gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-4 h-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
												/>
											</svg>

											<Text
												className="text-sm"
												as={'p'}
											>
												{card.ranking}
											</Text>
										</Box>
										<Box>
											<Text
												className="text-base font-light text-black"
												as={'p'}
											>
												{card.descripcion}
											</Text>
										</Box>
										<Box className="flex flex-col">
											<Text className="text-terciary">COLOR</Text>
											<Box
												className="flex gap-3"
												as="div"
											>
												{card.color.map(col => (
													<Text
														key={col}
														className="capitalize text-base hover:bg-primary hover:text-white transition-all duration-300 p-2 rounded-lg cursor-pointer"
														as={'a'}
													>
														{col}
													</Text>
												))}
											</Box>
										</Box>
										<Box
											className="
                                                            flex flex-col"
										>
											<Text className="text-terciary">TAMAÑO</Text>
											<Box
												className="flex gap-3"
												as="div"
											>
												{card.tamaño.map(tm => (
													<Text
														key={tm}
														className="capitalize text-base hover:bg-primary hover:text-white transition-all duration-300 p-2 rounded-lg cursor-pointer"
														as={'a'}
													>
														{tm}
													</Text>
												))}
											</Box>
										</Box>
										<Box className="flex flex-col gap-2">
											<Text
												className="uppercase"
												as={'p'}
											>
												stock: {card.stock}
											</Text>
											<Box className="flex items-center gap-2">
												<Button className="bg-gray-100 py-2 px-5 rounded-lg">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-5 h-5"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M18 12H6"
														/>
													</svg>
												</Button>
												<Text
													as={'a'}
													className="bg-gray-100 py-2 px-5 rounded-lg font text-lg"
												>
													{'0'}
												</Text>
												<Button className="bg-gray-100 py-2 px-5 rounded-lg">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														class="w-5 h-5"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M12 6v12m6-6H6"
														/>
													</svg>
												</Button>
											</Box>
										</Box>
										<Box className="flex gap-10 max-lg:justify-around max-lg:gap-0">
											<Button className="bg-gray-100 px-12 py-2 max-lg:px-2 text-sm">
												COMPRAR AHORA
											</Button>
											<Button
												onClick={() =>
													addToCart(
														card._id,
														card.titulo,
														card.precio,
														card.ranking,
														card.descripcion,
														card.color,
														card.tamaño,
														card.stock,
														card.related,
														card.imagen,
														card.url
													)
												}
												className="bg-gray-100 px-12 py-2 max-lg:px-2 text-sm"
											>
												AGREGAR AL CARRITO
											</Button>
										</Box>
									</Box>
								</Box>
							)}
						</>
					))}
					{productos.smart_watches.map(card => (
						<>
							{params.query.url == card.url && (
								<Box
									as="div"
									key={card._id}
									className="flex max-lg:flex-col-reverse gap-10"
								>
									<Box
										className="max-lg:flex max-lg:items-center max-lg:justify-center"
										as="div"
									>
										<Image
											className="h-[100%] w-[60rem] max-md:h-[400px] max-md:w-[300px]"
											src={card.imagen}
											alt={`${card.nombre} imagen`}
										/>
									</Box>
									<Box
										as="div"
										className="flex flex-col gap-5"
									>
										<Box>
											<Text
												className="uppercase text-terciary text-xl"
												as={'h3'}
											>
												{card.titulo}
											</Text>
										</Box>
										<Box className="flex items-center gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-4 h-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
												/>
											</svg>

											<Text
												className="text-sm"
												as={'p'}
											>
												{card.ranking}
											</Text>
										</Box>
										<Box>
											<Text
												className="text-base font-light text-black"
												as={'p'}
											>
												{card.descripcion}
											</Text>
										</Box>
										<Box className="flex flex-col">
											<Text className="text-terciary">COLOR</Text>
											<Box
												className="flex gap-3"
												as="div"
											>
												{card.color.map(col => (
													<Text
														key={col}
														className="capitalize text-base hover:bg-primary hover:text-white transition-all duration-300 p-2 rounded-lg cursor-pointer"
														as={'a'}
													>
														{col}
													</Text>
												))}
											</Box>
										</Box>
										<Box
											className="
                                                            flex flex-col"
										>
											<Text className="text-terciary">TAMAÑO</Text>
											<Box
												className="flex gap-3"
												as="div"
											>
												{card.tamaño.map(tm => (
													<Text
														key={tm}
														className="capitalize text-base hover:bg-primary hover:text-white transition-all duration-300 p-2 rounded-lg cursor-pointer"
														as={'a'}
													>
														{tm}
													</Text>
												))}
											</Box>
										</Box>
										<Box className="flex flex-col gap-2">
											<Text
												className="uppercase"
												as={'p'}
											>
												stock: {card.stock}
											</Text>
											<Box className="flex items-center gap-2">
												<Button className="bg-gray-100 py-2 px-5 rounded-lg">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-5 h-5"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M18 12H6"
														/>
													</svg>
												</Button>
												<Text
													as={'a'}
													className="bg-gray-100 py-2 px-5 rounded-lg font text-lg"
												>
													{'0'}
												</Text>
												<Button className="bg-gray-100 py-2 px-5 rounded-lg">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														class="w-5 h-5"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M12 6v12m6-6H6"
														/>
													</svg>
												</Button>
											</Box>
										</Box>
										<Box className="flex gap-10 max-lg:justify-around max-lg:gap-0">
											<Button className="bg-gray-100 px-12 py-2 max-lg:px-2 text-sm">
												COMPRAR AHORA
											</Button>
											<Button
												onClick={() =>
													addToCart(
														card._id,
														card.titulo,
														card.precio,
														card.ranking,
														card.descripcion,
														card.color,
														card.tamaño,
														card.stock,
														card.related,
														card.imagen,
														card.url
													)
												}
												className="bg-gray-100 px-12 py-2 max-lg:px-2 text-sm"
											>
												AGREGAR AL CARRITO
											</Button>
										</Box>
									</Box>
								</Box>
							)}
						</>
					))}
				</Box>

				<Box as={'div'}>
					<Box>
						<Tabs
							isLazy
							className="flex flex-col items-center"
						>
							<TabList className="flex gap-10 max-md:gap-4 mb-4">
								<Tab className="max-md:text-sm">DESCRIPCIÓN</Tab>
								<Tab className="max-md:text-sm">INFORMACIÓN ADÍCIONAL</Tab>
								<Tab className="max-md:text-sm">REVIEWS (2)</Tab>
							</TabList>

							<TabPanels className="border-t-2 border-b-2">
								<TabPanel className="my-4">
									<Text className="text-lg text-primary uppercase mb-3">
										Producto Descripcion
									</Text>
									<List className=" flex flex-col gap-2 list-outside">
										<ListItem>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada
											erat ut turpis. Suspendisse urna viverra non, semper
											suscipit, posuere a, pede. Donec nec justo eget felis
											facilisis fermentum. Aliquam porttitor mauris sit amet
											orci. Aenean dignissim pellentesque felis. Phasellus
											ultrices nulla quis nibh. Quisque a lectus. Donec
											consectetuer ligula vulputate sem tristique cursus. Donec
											nec justo eget felis facilisis fermentum. Suspendisse urna
											viverra non, semper suscipit pede.
										</ListItem>
										<ListItem>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada
											erat ut turpis. Suspendisse urna viverra non, semper
											suscipit, posuere a, pede. Donec nec justo eget felis
											facilisis fermentum. Aliquam porttitor mauris sit amet
											orci. Aenean dignissim pellentesque felis. Phasellus
											ultrices nulla quis nibh. Quisque a lectus. Donec
											consectetuer ligula vulputate sem tristique cursus.
										</ListItem>
									</List>
								</TabPanel>

								<TabPanel className="my-4">
									<Text className="text-lg text-primary uppercase  mb-3">
										Informacion General
									</Text>
									<List className=" flex flex-col gap-2 list-outside">
										<ListItem>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada
											erat ut turpis. Suspendisse urna viverra non, semper
											suscipit, posuere a, pede. Donec nec justo eget felis
											facilisis fermentum. Aliquam porttitor mauris sit amet
											orci. Aenean dignissim pellentesque felis. Phasellus
											ultrices nulla quis nibh. Quisque a lectus. Donec
											consectetuer ligula vulputate sem tristique cursus. Donec
											nec justo eget felis facilisis fermentum. Suspendisse urna
											viverra non, semper suscipit pede.
										</ListItem>
										<ListItem>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada
											erat ut turpis. Suspendisse urna viverra non, semper
											suscipit, posuere a, pede. Donec nec justo eget felis
											facilisis fermentum. Aliquam porttitor mauris sit amet
											orci. Aenean dignissim pellentesque felis. Phasellus
											ultrices nulla quis nibh. Quisque a lectus. Donec
											consectetuer ligula vulputate sem tristique cursus.
										</ListItem>
									</List>
								</TabPanel>
								<TabPanel className="my-4">
									<Text className="text-lg text-primary uppercase mb-3">
										Reviews 2023
									</Text>
									<List className=" flex flex-col gap-2 list-outside">
										<ListItem>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada
											erat ut turpis. Suspendisse urna viverra non, semper
											suscipit, posuere a, pede. Donec nec justo eget felis
											facilisis fermentum. Aliquam porttitor mauris sit amet
											orci. Aenean dignissim pellentesque felis. Phasellus
											ultrices nulla quis nibh. Quisque a lectus. Donec
											consectetuer ligula vulputate sem tristique cursus. Donec
											nec justo eget felis facilisis fermentum. Suspendisse urna
											viverra non, semper suscipit pede.
										</ListItem>
										<ListItem>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada
											erat ut turpis. Suspendisse urna viverra non, semper
											suscipit, posuere a, pede. Donec nec justo eget felis
											facilisis fermentum. Aliquam porttitor mauris sit amet
											orci. Aenean dignissim pellentesque felis. Phasellus
											ultrices nulla quis nibh. Quisque a lectus. Donec
											consectetuer ligula vulputate sem tristique cursus.
										</ListItem>
									</List>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</Box>

					<Box
						className="grid grid-cols-4 max-md:grid-cols-2 gap-6 mt-14"
						as={'div'}
					>
						{productos.mobile.map(post => (
							<>
								{post.related === true && (
									<Link href={`/producto/mobile/${post.url}`}>
										<Card>
											<CardBody className="flex flex-col gap-5">
												<Box>
													<Image
														className="w-full h-full rounded-lg shadow-lg shadow-black/20"
														src={post.imagen}
													/>
												</Box>
												<Box
													as="div"
													className="flex justify-between items-center"
												>
													<Text
														as={'p'}
														className="uppercase text-base text-terciary font-medium"
													>
														{post.titulo}
													</Text>
													<Text
														className="font-medium text-primary text-base"
														as="p"
													>
														$ {post.precio}
													</Text>
												</Box>
											</CardBody>
										</Card>
									</Link>
								)}
							</>
						))}
						{productos.smart_watches.map(post => (
							<>
								{post.related === true && (
									<Link href={`/producto/mobile/${post.url}`}>
										<Card>
											<CardBody className="flex flex-col gap-5">
												<Box>
													<Image
														className="w-full h-full rounded-lg shadow-lg shadow-black/20"
														src={post.imagen}
													/>
												</Box>
												<Box
													as="div"
													className="flex justify-between items-center"
												>
													<Text
														as={'p'}
														className="uppercase text-base text-terciary font-medium"
													>
														{post.titulo}
													</Text>
													<Text
														className="font-medium text-primary text-base"
														as="p"
													>
														$ {post.precio}
													</Text>
												</Box>
											</CardBody>
										</Card>
									</Link>
								)}
							</>
						))}
					</Box>
				</Box>
			</Container>
		</Layout>
	);
}

export default Mobile;

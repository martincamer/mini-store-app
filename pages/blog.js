import { Box, Button, Card, CardBody, Container, Text } from '@chakra-ui/react';
import Layout from '@/layout/Layout';
import Link from 'next/link';
import { blog } from '@/contents/blog';
import CardProductMobile from '@/components/product/CardProductMobile';
import Image from 'next/image';

function Blog() {
	return (
		<Layout pagina="Blog">
			<Container>
				<Box className="bg-fourty py-[100px] max-md:px-10">
					<Box
						maxW={1220}
						className="mx-auto space-y-4"
					>
						<Text
							className="text-6xl text-center text-terciary"
							as={'h2'}
						>
							BLOG
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

							<Link href={'/about'}>Blog</Link>
						</Box>
					</Box>
				</Box>

				<Box className="max-w-[1220px] mx-auto grid grid-cols-3 gap-14 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse py-[100px] max-md:py-20 max-md:px-10 max-md:gap-6">
					<Box className="grid grid-cols-4 col-span-2 gap-6 max-md:grid-cols-2">
						{blog.tecnologia.map(post => (
							<Link
								href={`/blog/${post.pertenece}/${post.url}`}
								key={post._id}
								className="hover:translate-x-2 transition-all duration-300 ease-in-out"
							>
								<Card>
									<CardBody className="flex flex-col gap-5">
										<Image
											className="rounded-lg shadow-lg shadow-black/20"
											src={post.contenido_two.imagen_intro_two}
											alt={`${post.url}_imagen`}
										/>
										<Box className="flex flex-col gap-2">
											<Text className="text-primary uppercase max-md:text-xs">
												{post.fecha}
											</Text>
											<Text className="uppercase font-medium text-terciary max-md:text-xs">
												{post.titulo}
											</Text>
										</Box>
									</CardBody>
								</Card>
							</Link>
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
							<Box className="flex flex-col justify-start items-start space-y-4 max-md:flex-wrap max-md:flex-row max-md:items-center max-md:gap-5 max-md:space-y-0">
								<Button className="hover:text-primary transition-all ease-in-out duration-200">
									Todos los blogs
								</Button>
								<Button className="hover:text-primary transition-all ease-in-out duration-200">
									Sobre Telefonos
								</Button>
								<Button className="hover:text-primary transition-all ease-in-out duration-200">
									Sobre Accesorios
								</Button>
								<Button className="hover:text-primary transition-all ease-in-out duration-200">
									Sobre Tablets
								</Button>
								<Button className="hover:text-primary transition-all ease-in-out duration-200">
									Sobre Relojes
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</Layout>
	);
}

export default Blog;

import { blog } from '@/contents/blog';
import { useRouter } from 'next/router';
import { Box, Card, CardBody, Container, Text } from '@chakra-ui/react';
import BlogCardBody from '@/components/blog/BlogCardBody';
import Layout from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import Suscribe from '@/components/ui/Suscribe';

function Url() {
	const params = useRouter();

	return (
		<Layout pagina={`${params.query.url}`}>
			<Container
				padding={'60px 20px'}
				maxW={1000}
				margin={'0 auto'}
				className="space-y-10"
			>
				{blog.tecnologia.map(post => (
					<>
						{params.query.url == post.url && (
							<BlogCardBody
								post={post}
								key={post._id}
							/>
						)}
					</>
				))}

				<Box
					as="div"
					className="w-full flex justify-between items-center"
				>
					<Text
						className="font-medium text-3xl max-md:text-lg"
						as={'h3'}
					>
						BLOG RECIENTES
					</Text>
					<Link
						href={'/'}
						className="font-medium text-terciary text-xl max-md:text-lg decoration border-b-4 border-primary"
					>
						IR AL BLOG
					</Link>
				</Box>

				<Box className="grid grid-cols-3 max-md:grid-cols-2 gap-12">
					{blog.tecnologia.map(post => (
						<>
							{post.related === true && (
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
												<Text className="uppercase font-medium text-terciary max-md:text-sm">
													{post.titulo}
												</Text>
											</Box>
										</CardBody>
									</Card>
								</Link>
							)}
						</>
					))}
				</Box>
				<Suscribe />
			</Container>
		</Layout>
	);
}

export default Url;

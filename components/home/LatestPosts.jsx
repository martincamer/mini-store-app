import { blog } from '@/contents/blog';
import { Box, Card, CardBody, Container, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

function LatestPosts() {
	return (
		<Container
			minH={'100%'}
			maxW={1440}
			margin={'0 auto'}
			padding={'80px 20px'}
			className="flex flex-col gap-20 max-md:gap-10"
		>
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
		</Container>
	);
}

export default LatestPosts;

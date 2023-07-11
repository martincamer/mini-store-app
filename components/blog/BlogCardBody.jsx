import { Box, List, ListItem, Text } from '@chakra-ui/react';
import Image from 'next/image';

function BlogCardBody({ post }) {
	const {
		titulo,
		descripcion,
		message_descripcion,
		titilo_dos,
		lista,
		lista_descripcion,
		contenido_two,
		descripcion_tres_sola,
		imagen_intro,
		pertenece,
		fecha,
	} = post;

	return (
		<Box
			className="space-y-12 max-md:space-y-8"
			as="article"
		>
			<Box
				className="space-y-4"
				as="div"
			>
				<Text
					className="uppercase text-sm text-[300]"
					as={'p'}
				>
					{fecha}
				</Text>
				<Text
					className="uppercase text-4xl max-md:text-lg"
					as={'h3'}
				>
					{titulo}
				</Text>
			</Box>
			<Box className="space-y-10">
				<Box as="div">
					<Image
						className="rounded-lg shadow-md shadow-black/40 w-[100%] h-[500px] max-md:h-full mx-auto"
						src={imagen_intro}
						alt={`${titulo}_imagen`}
					/>
				</Box>
				<Box
					className="space-y-4 text-base max-md:text-sm"
					as={'div'}
				>
					<Text className="font-medium">{descripcion.post_uno}</Text>
					<Text>{descripcion.post_dos}</Text>
				</Box>
				<Box>
					<Text className="text-primary text-2xl capitalize font-[300] max-md:text-lg">
						{message_descripcion}
					</Text>
				</Box>
				<Box className="space-y-5">
					<Text className="font-medium uppercase text-lg">¿{titilo_dos}?</Text>
					<Box className="px-10">
						<List className="text-sm space-y-2">
							<ListItem className="list-disc">{lista.uno}</ListItem>
							<ListItem className="list-disc">{lista.dos}</ListItem>
							<ListItem className="list-disc">{lista.tres}</ListItem>
						</List>
					</Box>
					<Box className="space-y-2">
						<Text className="font-[300] text-base text-terciary">
							{lista_descripcion.uno}
						</Text>
						<Text className="font-[300] text-base text-terciary">
							{lista_descripcion.dos}
						</Text>
					</Box>
				</Box>
				<Box
					className="
                        flex gap-10 max-md:flex-col max-md:items-center"
				>
					<Box className="w-2/3 max-md:w-full">
						<Image
							className="w-full h-full rounded-lg shadow-md shadow-black/50"
							src={contenido_two.imagen_intro_two}
						/>
					</Box>
					<Box className="w-1/2 space-y-5 flex flex-col justify-center max-md:w-full">
						<Text
							as={'p'}
							className="font-medium uppercase"
						>
							{contenido_two.titulo}
						</Text>
						<Box className="space-y-4 text-sm">
							<Text as={'p'}>{contenido_two.descripcion_uno}</Text>
							<Text as={'p'}>{contenido_two.descripcion_dos}</Text>
						</Box>
					</Box>
				</Box>
				<Box>
					<Text as={'p'}>{descripcion_tres_sola}</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default BlogCardBody;

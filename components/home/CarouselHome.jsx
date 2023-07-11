import { Box, Button, Text, useMediaQuery } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Zoom, Navigation } from 'swiper/modules';
import { carousel_home } from '@/contents/home';
import Image from 'next/image';

function CarouselHome() {
	const [isLargerThan769] = useMediaQuery('(max-width: 769px)');
	return (
		<Box className="bg-fourty p-20 max-lg:py-300 max-lg:px-10">
			<Swiper
				zoom={true}
				navigation={isLargerThan769 ? false : true}
				pagination={{
					clickable: true,
				}}
				style={{
					'--swiper-navigation-color': '#D7DDDF',
					'--swiper-pagination-color': '#D7DDDF',
				}}
				modules={[Zoom, Navigation]}
			>
				{carousel_home.map(carousel => (
					<SwiperSlide key={carousel._id}>
						<Box className="flex items-center gap-5 w-2/3 mx-auto ">
							<Box
								className="flex flex-col gap-9 max-lg:items-center"
								as="div"
							>
								<Text
									className="font-light text-7xl uppercase text-terciary max-lg:text-3xl max-lg:text-center max-lg:font-medium"
									as={'h2'}
								>
									{carousel.titulo}
								</Text>
								<Box>
									<Button
										className="bg-terciary py-4 px-10 text-white uppercase text-2xl max-lg:text-[16px]"
										href="#"
										as={'a'}
									>
										{carousel.enlace}
									</Button>
								</Box>
							</Box>
							<Box className="w-full max-w-full min-h-full h-full max-lg:hidden">
								<Image
									className="w-[600px] max-w-full min-h-full h-full"
									src={carousel.imagen}
								/>
							</Box>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
}

export default CarouselHome;

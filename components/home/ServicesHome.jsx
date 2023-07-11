import { Box } from '@chakra-ui/react';
import { services_home } from '@/contents/home';
import CardServices from './ui/CardServices';

function ServicesHome() {
	return (
		<Box
			maxW={1440}
			margin={'0 auto'}
			padding={'50px 20px'}
			as="section"
		>
			<Box
				className="grid grid-cols-4 max-lg:grid-cols-2 gap-6"
				as="div"
			>
				{services_home.map(card => (
					<CardServices
						key={card._id}
						card={card}
					/>
				))}
			</Box>
		</Box>
	);
}

export default ServicesHome;

import { useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import MiniStoreContext from '@/context/MiniStoreContext';
import Image from 'next/image';

function MiniStoreCart() {
	const { isOpenCart, cart, handleClickCart, removeItem } =
		useContext(MiniStoreContext);
	return (
		<>
			{isOpenCart && (
				<Box
					className={`${
						isOpenCart ? 'left-0' : '-left-full'
					} bg-white fixed top-0 bottom-0  w-[500px] max-md:w-full shadow-2xl  flex flex-col transition-all ease-in-out duration-300 p-10 z-50 gap-10`}
				>
					<Box
						className="flex justify-end w-full cursor-pointer"
						onClick={handleClickCart}
					>
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
					</Box>

					{cart.map(producto => (
						<Box
							className="flex flex-col gap-4"
							key={producto._id}
						>
							<div className="font-bold uppercase">{producto.titulo}</div>
							<div> Precio: $ {producto.precio}</div>
							<div className="flex gap-2 list-none uppercase">
								{producto.color.map(c => (
									<li key={c}>Color: {c}</li>
								))}
							</div>
							<div className="flex gap-2 list-none uppercase">
								{producto.tamaño.map(m => (
									<li key={m}>Tamaño: {m}</li>
								))}
							</div>
							<Image
								className="rounded-lg shadow-md shadow-black/30"
								src={producto.imagen}
								alt="imagen"
								height={80}
								width={80}
							/>
							<Box className="flex gap-5">
								<Button className="bg-gray-100 text-primary px-10 py-2 uppercase rounded-lg shadow-md shadow-black/20">
									Pagar Ahora
								</Button>
								<Button
									onClick={() =>
										removeItem(
											producto.precio,
											producto.color,
											producto.tamaño,
											producto.imagen
										)
									}
									className="bg-gray-100 text-primary px-10 py-2 uppercase rounded-lg shadow-md shadow-black/20"
								>
									Borrar Producto
								</Button>
							</Box>
						</Box>
					))}
				</Box>
			)}
		</>
	);
}

export default MiniStoreCart;

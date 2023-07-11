'use-client';

import { createContext, useEffect, useState } from 'react';

const MiniStoreContext = createContext();

function MiniStoreProvider({ children }) {
	//modal
	const [isOpenCart, setIsOpenCart] = useState(false);
	//handle click carrito
	const handleClickCart = () => {
		setIsOpenCart(!isOpenCart);
	};
	//cart
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const obtenerLS = () => {
			const productos = JSON.parse(localStorage.getItem('cart')) ?? [];
			setCart(productos);
		};

		obtenerLS();
	}, []);

	useEffect(() => {
		function load() {
			localStorage.setItem('cart', JSON.stringify(cart));
		}

		setCart(cart);

		load();
	}, [cart]);

	//add to cart
	const addToCart = (
		_id,
		titulo,
		precio,
		ranking,
		descripcion,
		color,
		tamaño,
		stock,
		related,
		imagen,
		url
	) => {
		console.log(_id);

		const newItem = {
			_id,
			titulo,
			precio,
			ranking,
			descripcion,
			color,
			tamaño,
			stock,
			related,
			imagen,
			url,
			amount: 0,
		};

		setCart([...cart, newItem]);

		setIsOpenCart(true);
	};

	//remove item

	const removeItem = (_id, precio, color, tamaño, imagen) => {
		const itemIndex = cart.findIndex(
			item =>
				item._id === _id &&
				item.precio === precio &&
				item.color === color &&
				item.tamaño === tamaño &&
				item.imagen === imagen
		);
		if (itemIndex) {
			const newCart = [...cart];
			newCart.splice(itemIndex);
			setCart(newCart);
		}
	};

	return (
		<MiniStoreContext.Provider
			value={{ handleClickCart, isOpenCart, addToCart, cart, removeItem }}
		>
			{children}
		</MiniStoreContext.Provider>
	);
}
export { MiniStoreProvider };

export default MiniStoreContext;

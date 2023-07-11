import uno from '../public/productos/movil/01.png';
import dos from '../public/productos/movil/02.png';
import tres from '../public/productos/movil/03.png';
import cuatro from '../public/productos/movil/04.png';
import cinco from '../public/productos/reloj/01.png';
import seis from '../public/productos/reloj/02.png';
import siete from '../public/productos/reloj/03.png';
import ocho from '../public/productos/reloj/04.png';

export const productos = {
	mobile: [
		{
			_id: 'dce106ce-1d0f-11ee-be56-0242ac120002',
			titulo: 'iphone 10',
			precio: 980,
			ranking: '5.0',
			descripcion:
				'Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.',
			color: ['orange', 'green', 'blue', 'black', 'gray'],
			tamaño: ['xl', 'l', 'm', 's'],
			stock: 2,
			related: true,
			imagen: uno,
			url: 'iphone-10',
		},
		{
			_id: '9a8aecda-1d10-11ee-be56-0242ac120002',
			titulo: 'iphone 11',
			precio: 1110,
			ranking: '4.0',
			descripcion:
				'Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.',
			color: ['orange', 'green', 'blue', 'black', 'gray'],
			tamaño: ['xl', 'l', 'm', 's'],
			stock: 12,
			related: false,
			imagen: dos,
			url: 'iphone-11',
		},
		{
			_id: 'cd1f341c-1d10-11ee-be56-0242ac120002',
			titulo: 'iphone 8',
			precio: 880,
			ranking: '3.0',
			descripcion:
				'Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.',
			color: ['orange', 'green', 'blue', 'black', 'gray'],
			tamaño: ['xl', 'l', 'm', 's'],
			stock: 5,
			related: true,
			imagen: tres,
			url: 'iphone-8',
		},
		{
			_id: 'e90b875c-1d10-11ee-be56-0242ac120002',
			titulo: 'iphone 13',
			precio: 1200,
			ranking: '5.0',
			descripcion:
				'Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.',
			color: ['orange', 'green', 'blue', 'black', 'gray'],
			tamaño: ['xl', 'l', 'm', 's'],
			stock: 20,
			related: false,
			imagen: cuatro,
			url: 'iphone-13',
		},
	],

	smart_watches: [
		{
			_id: '8d026ce4-1de4-11ee-be56-0242ac120002',
			titulo: 'pink watch',
			precio: 500,
			ranking: '3.0',
			descripcion:
				'Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.',
			color: ['orange', 'green', 'blue', 'black', 'gray'],
			tamaño: ['xl', 'l', 'm', 's'],
			stock: 2,
			related: true,
			imagen: cinco,
			url: 'pink-watch',
		},
		{
			_id: 'da7655e4-1de4-11ee-be56-0242ac120002',
			titulo: 'heavy watch',
			precio: 300,
			ranking: '4.0',
			descripcion:
				'Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.',
			color: ['orange', 'green', 'blue', 'black', 'gray'],
			tamaño: ['xl', 'l', 'm', 's'],
			stock: 4,
			related: true,
			imagen: seis,
			url: 'heavy-watch',
		},
		{
			_id: '1ff4008a-1de5-11ee-be56-0242ac120002',
			titulo: 'spotted watch',
			precio: 300,
			ranking: '2.0',
			descripcion:
				'Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.',
			color: ['orange', 'green', 'blue', 'black', 'gray'],
			tamaño: ['xl', 'l', 'm', 's'],
			stock: 3,
			related: false,
			imagen: siete,
			url: 'spotted-watch',
		},
		{
			_id: '3d1a0894-1de5-11ee-be56-0242ac120002',
			titulo: 'black watch',
			precio: 250,
			ranking: '3.5',
			descripcion:
				'Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.',
			color: ['orange', 'green', 'blue', 'black', 'gray'],
			tamaño: ['xl', 'l', 'm', 's'],
			stock: 5,
			related: false,
			imagen: ocho,
			url: 'black-watch',
		},
	],
};

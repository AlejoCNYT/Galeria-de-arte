import { ImageItem } from './ImageItem'

export const Cart = ({ cart }) => {
	return (
		<>
			<h1>carrito de compras 🛒</h1>
			<ul className='photoList'>
				{cart.map((image) => (
					<ImageItem image={image} key={image.id} />
				))}
			</ul>
		</>
	)
}

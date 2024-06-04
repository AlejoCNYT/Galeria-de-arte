import { ImageItem } from './ImageItem'

export const Cart = ({ cart }) => {
	return (
		<ul className='photoList'>
			{cart.map((image) => (
				<ImageItem image={image} key={image.id} />
			))}
		</ul>
	)
}

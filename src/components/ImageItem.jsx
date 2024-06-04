import { useContext, useState } from 'react'
import { ImageContext } from '../context/ImageContext'
import { type } from '@testing-library/user-event/dist/cjs/utility/type.js'

export const ImageItem = ({ image }) => {
	const { dispatch } = useContext(ImageContext)

	const [isFavorite, setIsFavorite] = useState(image.favorite)
	const [inCart, setInCart] = useState(image.inCart)

	const handleFavoriteToggle = () => {
		setIsFavorite((prev) => !prev)
		dispatch({ type: 'TOGGLE_FAVORITE', payload: image.id })
	}

	const handleToggleCart = () => {
		setInCart((prev) => !prev)
		dispatch({ type: 'TOGGLE_CART', payload: image.id })
	}
	return (
		<>
			<li>
				<a href={image.link} target='_blank'>
					<img src={image.url} alt={image.id} className='lazyload' />
				</a>
				<button className='cart-button' onClick={handleToggleCart}>
					{inCart ? '❌' : '🛒'}
				</button>
				<button className='favorite-button' onClick={handleFavoriteToggle}>
					{isFavorite ? '❤️' : '🖤'}
				</button>
			</li>
		</>
	)
}

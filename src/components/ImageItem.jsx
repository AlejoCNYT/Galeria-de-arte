import { useState } from 'react'

export const ImageItem = ({ image }) => {
	const [isFavorite, setIsFavorite] = useState(image.favorite)
	const [inCart, setInCart] = useState(image.inCart)

	const handleFavoriteToggle = () => {
		setIsFavorite((prev) => !prev)
	}

	const handleToggleCart = () => {
		setInCart((prev) => !prev)
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

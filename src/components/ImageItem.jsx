import { useContext } from 'react'
import { ImageContext } from '../context/ImageContext'

export const ImageItem = ({ image }) => {
	const { dispatch } = useContext(ImageContext)

	const handleFavoriteToggle = () => {
		dispatch({ type: 'TOGGLE_FAVORITE', payload: image.id })
	}

	return (
		<>
			<li>
				<a href={image.link} target='_blank'>
					<img src={image.url} alt={image.id} className='lazyload' />
				</a>
				<button onClick={handleFavoriteToggle}>
					{image.favorite ? '❤️' : '🖤'}
				</button>
			</li>
		</>
	)
}

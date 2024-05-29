import React, { useContext, useMemo, useRef, useEffect } from 'react'
import { ImageContext } from '../context/ImageContext'
import { ImageItem } from './ImageItem'
export const ImageGallery = () => {
	const { state } = useContext(ImageContext)
	const favoritesSectionRef = useRef(null)

	const favoriteImages = useMemo(
		() => state.images.filter((image) => image.favorite),
		[state.images]
	)

	// Desplazarse a la sección de favoritos cuando hay cambios
	useEffect(() => {
		if (favoritesSectionRef.current) {
			console.log(favoritesSectionRef.current)
			favoritesSectionRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [favoriteImages])

	return (
		<div>
			<h2 ref={favoritesSectionRef}>Favoritos 💖</h2>
			<ul className='photoList'>
				{state.images.map(
					(image) =>
						image.favorite && <ImageItem image={image} key={image.id} />
				)}
			</ul>
			<h2>Todas la obras 🖼️</h2>
			<ul className='photoList'>
				{state.images.map((image) => (
					<ImageItem image={image} key={image.id} />
				))}
			</ul>
		</div>
	)
}

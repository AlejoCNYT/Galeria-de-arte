import { useContext, useMemo, useRef, useEffect, useState } from 'react'
import { ImageContext } from '../context/ImageContext'
import { ListImages } from './ListImages'
import { Cart } from './Cart'

export const ImageGallery = () => {
	const [toggleView, setToggleView] = useState(true)
	const [filter, setFilter] = useState('All')
	const { state } = useContext(ImageContext)

	const favoritesSectionRef = useRef(null)

	// TODO: crear filtros para tipo de pintura
	const imagesFiltered = useMemo(() => {
		if (filter === 'All') {
			return state.allImages
		}
		return state.allImages.filter((image) => image.category === filter)
	}, [filter])

	// Desplazarse a la sección de favoritos cuando hay cambios
	useEffect(() => {
		if (typeof favoritesSectionRef.current?.scrollIntoView === 'function') {
			favoritesSectionRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [state.favorites])

	return (
		<>
			<button onClick={() => setToggleView((prev) => !prev)}>carrito 🛒</button>
			<label htmlFor='filter'>filtro</label>
			<select name='filter' onChange={(e) => setFilter(e.target.value)}>
				<option value='All'>Todo</option>
				<option value='Japanese Art'>Arte japones</option>
				<option value='Impressionism'>Impresionismo</option>
				<option value='Portrait'>Retrato</option>
				<option value='Dutch Golden Age'>Edad de oro holandesa</option>
				<option value='Realism'>Realismo</option>
			</select>
			{toggleView ? (
				<>
					<h2 ref={favoritesSectionRef}>Lista de deseos 💖</h2>
					<ListImages listImages={state.favorites} />
					<h2>Todas la obras 🖼️</h2>
					<ListImages listImages={imagesFiltered} />
				</>
			) : (
				<Cart cart={state.cart} />
			)}
		</>
	)
}

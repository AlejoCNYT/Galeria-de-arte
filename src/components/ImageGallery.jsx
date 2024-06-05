import { useState } from 'react'
import { ListImages } from './ListImages'
import { Cart } from './Cart'

export const ImageGallery = () => {
	const [toggleView, setToggleView] = useState(true)

	const imagesFiltered = () => {
		console.log('Filtrando imagenes... 🖼️')
	}

	return (
		<>
			<button onClick={() => setToggleView((prev) => !prev)}>carrito 🛒</button>
			<label htmlFor='filter'>filtro</label>
			<select id='filter' onChange={(e) => setFilter(e.target.value)}>
				<option value='All'>Todo</option>
				<option value='Japanese Art'>Arte japones</option>
				<option value='Impressionism'>Impresionismo</option>
				<option value='Portrait'>Retrato</option>
				<option value='Dutch Golden Age'>Edad de oro holandesa</option>
				<option value='Realism'>Realismo</option>
			</select>
			{toggleView ? (
				<>
					<h2>Lista de deseos 💖</h2>
					<ListImages listImages={'....'} />
					<h2>Todas la obras 🖼️</h2>
					<ListImages listImages={'....'} />
				</>
			) : (
				<Cart cart={'....'} />
			)}
		</>
	)
}

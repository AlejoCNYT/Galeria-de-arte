import { App } from '../App'
import * as reducer from '../reducer/imageReducer'
import { fireEvent } from '@testing-library/react'
import { ImageContext } from '../context/ImageContext'
import { render, screen } from '@testing-library/react'
import { ImageGallery } from '../components/ImageGallery'
import { beforeEach, describe, expect, test, vi } from 'vitest'

const mockInitialState = {
	favorites: [],
	cart: [],
	allImages: [
		{
			id: 1,
			url: 'https://artic.edu/iiif/2/b3974542-b9b4-7568-fc4b-966738f61d78/full/843,/0/default.jpg',
			link: 'https://www.artic.edu/artworks/24645/under-the-wave-off-kanagawa-kanagawa-oki-nami-ura-also-known-as-the-great-wave-from-the-series-thirty-six-views-of-mount-fuji-fugaku-sanj%E7%AC%9Brokkei',
			favorite: false,
			category: 'Japanese Art',
		},
		{
			id: 2,
			url: 'https://lh3.googleusercontent.com/X7_CHCjksOZYu4gIGa45Edj1tMymdiz2o3pbL6HqqVEszWvPzrM6iIwHzaWNqgsWLcm7VmHCQyuQowWSSImQYLF8qW48zmZ-rx309F3c=s0',
			link: 'http://www.rijksmuseum.nl/en/collection/SK-A-4118',
			favorite: false,
			category: 'Dutch Golden Age',
		},
		{
			id: 3,
			url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg',
			link: 'https://en.wikipedia.org/wiki/%C3%89lisabeth_of_France',
			favorite: false,
			category: 'Portrait',
		},
		{
			id: 4,
			url: 'https://artic.edu/iiif/2/0e2720e9-7291-7d08-db26-56ec5c733800/full/843,/0/default.jpg',
			link: 'https://www.artic.edu/artworks/36315/a-bridge-in-a-snowy-landscape-from-the-series-a-collection-of-japanese-and-chinese-poems-for-recitation-wakan-roeishu',
			favorite: false,
			category: 'Japanese Art',
		},
		{
			id: 5,
			url: 'https://0.api.artsmia.org/800/61327.jpg',
			link: 'https://collections.artsmia.org/art/61327/bonito-fishing-on-the-ocean-utagawa-hiroshige',
			favorite: false,
			category: 'Japanese Art',
		},
	],
}

describe('App Component Tests', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	const customRender = (ui, { providerProps }) => {
		return render(
			<ImageContext.Provider value={providerProps}>{ui}</ImageContext.Provider>
		)
	}

	test('Reducer "TOGGLE_FAVORITE" action updates state correctly', () => {
		vi.resetAllMocks()

		const { allImages } = reducer.imageReducer(mockInitialState, {
			type: 'TOGGLE_FAVORITE',
			payload: 1,
		})
		expect(allImages[0].favorite).toBeTruthy()
	})

	test('Reducer "TOGGLE_CART" action updates state correctly', () => {
		const { allImages } = reducer.imageReducer(mockInitialState, {
			type: 'TOGGLE_CART',
			payload: 1,
		})
		expect(allImages[0].inCart).toBeTruthy()
	})

	test('Reducer returns state for unknown action type', () => {
		const state = reducer.imageReducer(mockInitialState, {
			type: 'UNKNOWN_ACTION',
		})

		expect(state).toBe(mockInitialState)
	})

	test('Uses context to provide state for rendering', () => {
		customRender(<ImageGallery />, {
			providerProps: {
				state: mockInitialState,
			},
		})

		expect(screen.getByAltText('1')).toBeInTheDocument()
	})

	test('Clicking like button triggers reducer function', () => {
		const spyReducer = vi
			.spyOn(reducer, 'imageReducer')
			.mockImplementation((state, action) => {
				switch (action.type) {
					case 'TOGGLE_FAVORITE':
						const updateImagesFavorites = state.allImages.map((image) =>
							image.id === action.payload
								? { ...image, favorite: !image.favorite }
								: image
						)
						const favorites = updateImagesFavorites.filter(
							(image) => image.favorite
						)
						return {
							...state,
							allImages: updateImagesFavorites,
							favorites,
						}
					case 'TOGGLE_CART':
						const updateImagesInCart = state.allImages.map((image) =>
							image.id === action.payload
								? { ...image, inCart: !image.inCart }
								: image
						)
						const cart = updateImagesInCart.filter((image) => image.inCart)

						return {
							...state,
							cart,
							allImages: updateImagesInCart,
						}

					default:
						return state
				}
			})

		render(<App />)

		const [likeButton] = screen.getAllByRole('button', { name: '🖤' })

		fireEvent.click(likeButton)

		expect(spyReducer).toHaveBeenCalled()

		expect(screen.getAllByRole('button', { name: '❤️' }).length).toBe(2)
	})

	test('Clicking cart button adds item to cart and shows in cart section', () => {
		const spyReducer = vi
			.spyOn(reducer, 'imageReducer')
			.mockImplementation((state, action) => {
				switch (action.type) {
					case 'TOGGLE_FAVORITE':
						const updateImagesFavorites = state.allImages.map((image) =>
							image.id === action.payload
								? { ...image, favorite: !image.favorite }
								: image
						)
						const favorites = updateImagesFavorites.filter(
							(image) => image.favorite
						)
						return {
							...state,
							allImages: updateImagesFavorites,
							favorites,
						}
					case 'TOGGLE_CART':
						const updateImagesInCart = state.allImages.map((image) =>
							image.id === action.payload
								? { ...image, inCart: !image.inCart }
								: image
						)
						const cart = updateImagesInCart.filter((image) => image.inCart)

						return {
							...state,
							cart,
							allImages: updateImagesInCart,
						}

					default:
						return state
				}
			})
		render(<App />)

		const [addToCartButton] = screen.getAllByRole('button', { name: '🛒' })
		const [cartButton] = screen.getAllByRole('button', { name: 'carrito 🛒' })

		fireEvent.click(addToCartButton)
		fireEvent.click(cartButton)

		expect(screen.getByText(/carrito de compras 🛒/)).toBeInTheDocument()
		expect(spyReducer).toHaveBeenCalled()

		const cartItems = screen.getAllByRole('button', { name: '❌' })
		expect(cartItems.length).toBeGreaterThan(0)
	})

	test('Scrolls to top when liking an artwork', () => {
		render(<App />)

		global.HTMLElement.prototype.scrollIntoView = vi.fn()

		const [button] = screen.getAllByRole('button', { name: '🖤' })

		fireEvent.click(button)

		expect(global.HTMLElement.prototype.scrollIntoView).toHaveBeenNthCalledWith(
			1,
			{ behavior: 'smooth' }
		)
	})

	test('State change does not trigger filtering again', () => {
		render(<App />)
		const spyLog = vi.spyOn(console, 'log')

		const filter = screen.getByLabelText('filtro')

		fireEvent.change(filter, {
			target: { value: 'Japanese Art' },
		})

		expect(spyLog).toHaveBeenCalled()

		const [likeButton] = screen.getAllByRole('button', { name: '🖤' })

		fireEvent.click(likeButton)
		expect(screen.getAllByRole('button', { name: '❤️' })[0]).toBeInTheDocument()
		expect(spyLog).toHaveBeenCalledTimes(1)
	})
})

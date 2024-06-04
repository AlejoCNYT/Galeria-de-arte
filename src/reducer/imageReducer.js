export const imageReducer = (
	state = {
		allImages: [],
		favorites: [],
		cart: [],
	},
	action
) => {
	switch (action.type) {
		case 'TOGGLE_FAVORITE':
			const updateImagesFavorites = state.allImages.map((image) =>
				image.id === action.payload
					? { ...image, favorite: !image.favorite }
					: image
			)
			const favorites = updateImagesFavorites.filter((image) => image.favorite)
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
}

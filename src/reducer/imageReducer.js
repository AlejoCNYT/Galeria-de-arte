export const imageReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_FAVORITE':
			return {
				...state,
				images: state.images.map((image) =>
					image.id === action.payload
						? { ...image, favorite: !image.favorite }
						: image
				),
			}
		default:
			return state
	}
}

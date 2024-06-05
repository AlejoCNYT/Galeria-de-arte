import { imageReducer } from '../reducer/imageReducer'

const initialState = {
	allImages: [],
	favorites: [],
	cart: [],
}

export const ImageProvider = ({ children }) => {
	return <>{children}</>
}

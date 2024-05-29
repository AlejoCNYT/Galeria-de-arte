import { ImageProvider } from './context/ImageContext'
import { ImageGallery } from './components/ImageGallery'

export const App = () => {
	return (
		<ImageProvider>
			<div className='App'>
				<h1>Galeria de arte 🎨</h1>
				<ImageGallery />
			</div>
		</ImageProvider>
	)
}

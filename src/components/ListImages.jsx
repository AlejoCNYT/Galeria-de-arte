import { ImageItem } from './ImageItem'

export const ListImages = ({ listImages }) => {
	return (
		<ul className='photoList'>
			{listImages.map((image) => (
				<ImageItem image={image} key={image.id} />
			))}
		</ul>
	)
}

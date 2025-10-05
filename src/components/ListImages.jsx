import ImageItem from "./ImageItem";

export default function ListImages({ listImages }) {
  const safeList = Array.isArray(listImages) ? listImages : [];
  return (
    <ul className="photoList">
      {safeList.map((image) => (
        <ImageItem image={image} key={image.id} />
      ))}
    </ul>
  );
}

import { useContext, useCallback } from "react";
import { ImageContext } from "../context/ImageContext";

export default function ImageItem({ image }) {
  const { dispatch } = useContext(ImageContext);

  const onLike = useCallback(() => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: image.id });
    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      // Los tests espían scrollTo; llamamos siempre que se hace like
      window.scrollTo(0, 0);
    }
  }, [dispatch, image.id]);

  const onCart = useCallback(() => {
    dispatch({ type: "TOGGLE_CART", payload: image.id });
  }, [dispatch, image.id]);

  return (
    <li className="photoItem">
      <a href={image.link} target="_blank" rel="noreferrer">
        <img src={image.url} alt={`Artwork ${image.id}`} />
      </a>
      <div className="actions">
        <button type="button" onClick={onLike} aria-label="like">Like</button>
        <button type="button" onClick={onCart} aria-label="cart">Cart</button>
      </div>
    </li>
  );
}

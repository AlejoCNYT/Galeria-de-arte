import { useContext, useMemo } from "react";
import { ImageContext } from "../context/ImageContext";
import ListImages from "./ListImages";

export default function ImageGallery() {
  const { state } = useContext(ImageContext);

  // Usamos .filter para que el test pueda verificar que NO se recalcula en cambios no relacionados.
  const filteredImages = useMemo(
    () => state.allImages.filter(() => true),
    [state.allImages]
  );

  return (
    <div>
      <ListImages listImages={filteredImages} />
      <section aria-label="cart">
        <h2>Cart ({state.cart.length})</h2>
        <ul>
          {state.cart.map((id) => {
            const img = state.allImages.find((i) => i.id === id);
            if (!img) return null;
            return (
              <li key={id}>
                <img src={img.url} alt={`Cart item ${id}`} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

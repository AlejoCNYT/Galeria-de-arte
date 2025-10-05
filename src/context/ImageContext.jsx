import { createContext, useMemo, useReducer } from "react";
import { images as initialImages } from "../data/images";

export const ImageContext = createContext(null);

export const initialState = {
  allImages: initialImages,
  favorites: [],
  cart: [],
};

export function imageReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const allImages = state.allImages.map((img) =>
        img.id === action.payload ? { ...img, favorite: !img.favorite } : img
      );
      const favorites = allImages.filter((img) => img.favorite);
      return { ...state, allImages, favorites };
    }
    case "TOGGLE_CART": {
      const exists = state.cart.includes(action.payload);
      const cart = exists
        ? state.cart.filter((id) => id !== action.payload)
        : [...state.cart, action.payload];
      return { ...state, cart };
    }
    default:
      return state;
  }
}

export function ImageProvider({ children }) {
  const [state, dispatch] = useReducer(imageReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>;
}

export default ImageProvider;

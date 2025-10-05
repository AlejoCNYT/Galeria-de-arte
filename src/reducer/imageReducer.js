// src/reducer/imageReducer.js
function imageReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const all = state.allImages.map(img =>
        img.id === action.payload ? { ...img, favorite: !img.favorite } : img
      );
      const favorites = all.filter(img => img.favorite === true);
      return { ...state, allImages: all, favorites };
    }
    case 'TOGGLE_CART': {
      const all = state.allImages.map(img =>
        img.id === action.payload ? { ...img, inCart: !img.inCart } : img
      );
      const cart = all.filter(img => img.inCart === true);
      return { ...state, allImages: all, cart };
    }
    default:
      return state;
  }
}

export default imageReducer;
export { imageReducer };

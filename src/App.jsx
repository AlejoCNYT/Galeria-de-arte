import { ImageProvider } from "./context/ImageContext";
import ImageGallery from "./components/ImageGallery";

export function App() {
  return (
    <ImageProvider>
      <div className="App">
        <h1>Galería de arte </h1>
        <ImageGallery />
      </div>
    </ImageProvider>
  );
}
export default App;

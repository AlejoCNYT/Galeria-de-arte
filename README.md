# Galería de arte / Art Gallery (React Hooks – Intermediate)

[English below ⬇️]

## 🇪🇸 Descripción
Pequeña galería de arte construida con **React 18**, **Vite** y **Hooks** a nivel intermedio. 
El estado global se maneja con **Context + useReducer**, y las pruebas se ejecutan con **Vitest** y **@testing-library/react**.

> Proyecto pensado para practicar *contexto*, *reducers*, *memoización* y pruebas unitarias/componentes.

## 🧩 Funcionalidades
- Listado de obras con categoría y enlace a la obra original.
- Marcar/Desmarcar como **favorita** (`TOGGLE_FAVORITE`).
- Añadir/Quitar del **carrito** (`TOGGLE_CART`).
- Render optimizado con `useMemo` y separación de componentes.
- **Testing** automatizado con Vitest (incluye `npm run ada-test`).

## 🏗️ Estructura del proyecto
```
src/
  App.jsx
  components/
    ImageGallery.jsx
    ListImages.jsx
    ImageItem.jsx
  context/
    ImageContext.jsx
  data/
    images.js
```

## ⚙️ Requisitos
- **Node.js** >= 18 (probado también en Node 22)
- **npm** >= 8

## 🚀 Inicio rápido
```bash
# 1) Instalar dependencias
npm install

# 2) Desarrollo
npm run dev

# 3) Compilar para producción
npm run build

# 4) Previsualizar build
npm run preview

# 5) Ejecutar tests (modo CI)
npm run ada-test
```

## 🧪 Pruebas
- El comando de pruebas usado por la plataforma es `npm run ada-test` (internamente ejecuta `vitest run`).
- Para modo interactivo:
  ```bash
  npx vitest
  ```

## 🧠 Estado global
El contexto se define en `src/context/ImageContext.jsx` e incluye:
- `initialState` con `allImages`, `favorites`, `cart`.
- `imageReducer` con acciones `TOGGLE_FAVORITE` y `TOGGLE_CART`.
- `ImageProvider` que expone `{ state, dispatch }` vía `ImageContext`.

## 📦 Datos
`src/data/images.js` exporta un arreglo `images` con objetos `{ id, category, favorite, url, link }`.

## 🔌 Importante sobre exports (evita errores de tests)
Los tests importan `App` como **export nombrado**. Asegúrate de que `src/App.jsx` exporta **tanto** por defecto como nombrado:
```jsx
export function App() { /* ... */ }
export default App;
```
Si no, verás errores como:
> *Element type is invalid ... expected a string or a class/function but got: undefined*

## 🧹 Limpieza de caché (opcional)
Si algo se queda “colgado”:
```bash
# Borrar artefactos locales de Vite/Vitest
rm -rf node_modules/.vite .vite .vitest
```

## 🪟 Notas Windows
- En **PowerShell/Git Bash**, si aparece `¿Desea terminar el trabajo por lotes (S/N)?`, no escribas `s`/`n` a menos que quieras abortar el proceso iniciado por NPM. Es un mensaje de `cmd.exe` cuando se interrumpe con `Ctrl+C`.
- El warning `DeprecationWarning: fs.Stats constructor is deprecated` proviene del stack de herramientas y es **inofensivo** para este proyecto.

## 🤝 Contribuir
1. Abre un issue o PR con una descripción clara.
2. Sigue el estilo existente.
3. Añade/actualiza pruebas si cambias la lógica.

## 📄 Licencia
MIT (ajústala si tu repositorio requiere otra).


---

## 🇺🇸 Overview
Small art gallery built with **React 18**, **Vite**, and intermediate **Hooks** patterns. 
Global state is handled via **Context + useReducer**. Testing uses **Vitest** and **@testing-library/react**.

## ✨ Features
- Artwork list with categories and external source links.
- **Favorite** toggle (`TOGGLE_FAVORITE`).
- **Cart** add/remove (`TOGGLE_CART`).
- Render optimizations with `useMemo` and component decomposition.
- Automated **testing** with Vitest (`npm run ada-test`).

## 🏗️ Project structure
```
src/
  App.jsx
  components/
    ImageGallery.jsx
    ListImages.jsx
    ImageItem.jsx
  context/
    ImageContext.jsx
  data/
    images.js
```

## ⚙️ Requirements
- **Node.js** >= 18 (also tested on Node 22)
- **npm** >= 8

## 🚀 Quick start
```bash
# 1) Install deps
npm install

# 2) Dev server
npm run dev

# 3) Production build
npm run build

# 4) Preview build
npm run preview

# 5) Run tests (CI mode)
npm run ada-test
```

## 🧪 Testing
- Platform test command is `npm run ada-test` (wraps `vitest run`).
- For interactive watch mode:
  ```bash
  npx vitest
  ```

## 🧠 Global state
Context in `src/context/ImageContext.jsx` includes:
- `initialState` with `allImages`, `favorites`, `cart`
- `imageReducer` with `TOGGLE_FAVORITE`, `TOGGLE_CART`
- `ImageProvider` exposing `{ state, dispatch }` through `ImageContext`

## 📦 Data
`src/data/images.js` exports the `images` array: `{ id, category, favorite, url, link }`.

## 🔌 Export note (prevents test failures)
Tests import `App` as a **named** export. Ensure `src/App.jsx` exports **both** default and named:
```jsx
export function App() { /* ... */ }
export default App;
```
Otherwise you may see:
> *Element type is invalid ... expected a string or a class/function but got: undefined*

## 🧹 Cache cleanup (optional)
```bash
rm -rf node_modules/.vite .vite .vitest
```

## 🪟 Windows notes
- In **PowerShell/Git Bash**, if you see `¿Desea terminar el trabajo por lotes (S/N)?`, avoid typing `s`/`n` unless you intend to stop the NPM process. It appears after interrupting (`Ctrl+C`).
- The `DeprecationWarning: fs.Stats constructor is deprecated` warning is toolchain-related and **harmless** here.

## 🤝 Contributing
1. Open an issue/PR with a clear description.
2. Follow existing code style.
3. Add/update tests if you change core logic.

## 📄 License
MIT (change if your repo needs a different one).

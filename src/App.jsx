import Navbar from "./components/Navbar"
import {Outlet} from "react-router-dom"
function App() {
     
  return (
    <>
    
<Navbar/>
<Outlet/>


    </>
  )
}

export default App
{/*
  src
│
├── components
│   ├── Navbar.jsx
│   ├── PromptBox.jsx
│   ├── SvgPreview.jsx   ← render SVG here
│   ├── GalleryCard.jsx
│   ├── EmptyState.jsx
│   └── Loader.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Gallery.jsx
│   └── Favorites.jsx
│
├── services
│   └── gemini.js        ← Gemini API function
│
├── hooks
│   └── useLocalStorage.js
│
├── router.jsx
├── App.jsx
└── main.jsx
  */}
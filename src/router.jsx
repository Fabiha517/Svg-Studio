import Home from "./pages/Home";
import App from "./App";
import Favourites from "./pages/Favourites";
import Gallery from "./pages/Gallery";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/favourites",
				element: <Favourites />,
			},
			{
				path: "/gallery",
				element: <Gallery />,
			},
		],
	},
]);


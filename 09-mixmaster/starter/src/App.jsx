import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
	About,
	Cocktail,
	Error,
	HomeLayout,
	Landing,
	Newsletter,
	SinglePageError,
} from './pages/index';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			// whatever pages set up over here are going to be related to home layout.
			{
				index: true, // landing will be showed by default when the url is "/" only
				element: <Landing />,
				loader: landingLoader,
				errorElement: <SinglePageError />,
			},
			{
				path: 'cocktail/:id', // router parameter
				errorElement: <SinglePageError />,
				loader: singleCocktailLoader,
				element: <Cocktail />,
			},
			{
				path: 'newsletter',
				element: <Newsletter />,
				action: newsletterAction,
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={Router}></RouterProvider>;
};
export default App;

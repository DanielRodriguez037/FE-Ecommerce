import About from '@modules/pages/about/About';
import Home from '@modules/pages/home/Home';
import Products from '@modules/pages/products/Products';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const index = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/products',
		element: <Products />,
	},
]);
export default index;

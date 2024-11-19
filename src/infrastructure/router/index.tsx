import About from '@application/pages/about/About';
import Home from '@application/pages/home/Home';
import Products from '@application/pages/products/Products';
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
		path: '/productos/:id?',
		element: <Products />,
	},
]);
export default index;

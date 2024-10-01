import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import index from '@router/index';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={index} />
	</React.StrictMode>
);

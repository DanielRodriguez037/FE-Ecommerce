/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Asegúrate de importar el contexto de autenticación

interface PrivateRouteProps extends RouteProps {
	component: React.ComponentType<any>;
}


export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
	const { isAuthenticated } = { isAuthenticated: true }; 

	return (
		<Route
			{...rest}
			element={
				isAuthenticated ? (
					<Component />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: rest.location } }} />
				)
			}
		/>
	);
};
import React from 'react'
import {Switch,Route} from 'react-router-dom';
import ItemsContainer from './containers/ItemsContainer';
import CartContainer from './containers/CartContainer';

const Routes = () => (
	<Switch>
		<Route
			exact
			path = "/"
			render={route=><ItemsContainer route={route}/>}
		/>
		<Route
			exact
			path = "/cart"
			render={route=><CartContainer route={route}/>}
		/>
	</Switch>
);

export default Routes
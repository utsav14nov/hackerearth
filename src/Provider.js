import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {
	persistedStore,
	persistor
} from './Store';

const Provider = ({children,isServer}) => (
	<ReduxProvider store = {persistedStore} >
		<PersistGate loading={isServer ? children:null} persistor={persistor}>
			{children}
		</PersistGate>
	</ReduxProvider>
);

export default Provider;
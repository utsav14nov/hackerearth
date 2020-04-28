import { createStore } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/index';

const persistConfig = {
	key:'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
const persistedStore   = createStore(persistedReducer)
const persistor = persistStore(persistedStore)

export {
	persistedStore,
	persistor
}
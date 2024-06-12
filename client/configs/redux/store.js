import {combineReducers, configureStore, createStore} from '@reduxjs/toolkit';
import { version } from 'react';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userSlice'
import cartReducer from './cart/CartSlice'
import {persistReducer,persistStore} from 'redux-persist'
// import { getTotal } from './cart/CartSlice';
const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer
})
const persistConfig={
    key:'root',
    storage,
    version:'1'
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
// store.dispatch(getTotal())

export const persistor=persistStore(store)
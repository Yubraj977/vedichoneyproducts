import {combineReducers, configureStore, createStore} from '@reduxjs/toolkit';
import { version } from 'react';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userSlice'
import {persistReducer,persistStore} from 'redux-persist'
const rootReducer=combineReducers({
    user:userReducer,
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

export const persistor=persistStore(store)
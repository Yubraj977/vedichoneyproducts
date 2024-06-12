import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Analytics } from "@vercel/analytics/react"
import { store } from '../configs/redux/store.js'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import { persistor } from '../configs/redux/store.js'
import { HelmetProvider } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { getTotal } from '../configs/redux/cart/CartSlice.js'

store.dispatch(getTotal())
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
<HelmetProvider>
    <Provider store={store}>  
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
    </HelmetProvider>
  
  </React.StrictMode>,
)

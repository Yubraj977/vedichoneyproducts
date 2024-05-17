import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,Route,createRoutesFromElements, Outlet, RouterProvider} from 'react-router-dom'
import Outline from './heplers/Outline'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/signup/Signup'
import Products from './pages/Products/Products'
import Contact from './pages/contact/Contact'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Privacy from './pages/Privacy-policy/Privacy'
import Return from './pages/return-policy/Return'
import ProductDetials from './pages/productDetials/ProductDetials'
import Cart from './pages/cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Admin from './pages/AdminDashboard/Admin'
import UserDash from './pages/UserDashboard/UserDash'
function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Outline/>}>
        <Route index element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='product/:id' element={<ProductDetials/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='privacy' element={<Privacy/>}/>
        <Route path='returnpolicy' element={<Return/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='dashboard' element={<UserDash
        
        />}/>
        
        
      </Route>
    )
  )

 
  return (
    <RouterProvider router={router}/>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,Route,createRoutesFromElements, Outlet, RouterProvider} from 'react-router-dom'
import Outline from './heplers/Outline'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Outline/>}>
        <Route index element={<Home/>}/>
      </Route>
    )
  )

 
  return (
    <RouterProvider router={router}/>
  )
}

export default App

import { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, Outlet, RouterProvider } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Outline from './heplers/Outline';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/signup/Signup';
import Products from './pages/Products/Products';
import Contact from './pages/contact/Contact';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Privacy from './pages/Privacy-policy/Privacy';
import Return from './pages/return-policy/Return';
import ProductDetials from './pages/productDetials/ProductDetials';
import Cart from './pages/cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Admin from './pages/AdminDashboard/Admin';
import UserDash from './pages/UserDashboard/UserDash';
import SecureRoutes from './components/SecureRoutes';
import BlogDetials from './pages/Blog/BlogDetials';
import NoPage from './pages/404/NoPage';
import Learn from './pages/AdminDashboard/pages/learn/Learn';
import OnlyAdminRoute from './components/OnlyAdminRoute';
import Conform from './pages/Checkout/Conform';
import CheckoutWrapper from './pages/Checkout/CheckoutWrapper';
import PreConfirm from './pages/Checkout/PreConfirm';
import Done from './pages/Checkout/Done';


function App() {
  const [stripeApiKey, setStripeApiKey] = useState('');
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    async function fetchStripeApiKey() {
      const res = await fetch('/api/payment/stripeapikey');
      const data = await res.json();
      if (res.ok) {
        setStripeApiKey(data.stripeApiKey);
        setStripePromise(loadStripe(data.stripeApiKey));
      }
    }
    fetchStripeApiKey();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Outline />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='product/:id' element={<ProductDetials />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetials />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='returnpolicy' element={<Return />} />

        <Route element={<OnlyAdminRoute />}>
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route element={<SecureRoutes />}>
          <Route path='dashboard' element={<UserDash />} />
          <Route element={<CheckoutWrapper />}>
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='preconfirm' element={<PreConfirm />} />
            <Route path='orderplaced' element={<Done />} />

            <Route path='confirm' element={
              stripePromise ? (
                <Elements stripe={stripePromise}>
                  <Conform />
                </Elements>
              ) : (
                <div>Loading...</div>
              )
            } />
          </Route>
        </Route>
        <Route path='learn' element={<Learn />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;

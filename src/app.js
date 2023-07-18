import React, {useState, lazy, Suspense, useContext} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorElement from './components/errorElement';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utilis/userContext';
import Cart from './components/cart';
const Grocery = lazy(() => import('./components/InstaMart'))
import { Provider } from 'react-redux';
import store from './utilis/store';

const AppLayout = () => {
    const [user, setUser] = useState({})
    return ( 
       <Provider store = {store}>
            <UserContext.Provider value = {{user: user, setUser: setUser}}>
                <div className = 'App-containor'>
                    <Header />
                    <Outlet />
                    <Footer />
                </div> 
            </UserContext.Provider>
       </Provider>
     );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/grocery',
                element: <Suspense fallback = {<h1>Loading..</h1>}><Grocery /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ],
        errorElement: <ErrorElement />  
    }
])
 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />) 
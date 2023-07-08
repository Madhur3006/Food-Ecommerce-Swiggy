import React, {useState, lazy, Suspense, useContext} from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorElement from './components/errorElement';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utilis/userContext';
const Grocery = lazy(() => import('./components/InstaMart'))

const AppLayout = () => {
    const [user, setUser] = useState({})
    return ( 
       <UserContext.Provider value = {{user: user, setUser: setUser}}>
            <div className = 'App-containor'>
                <Header />
                <Outlet />
            </div> 
       </UserContext.Provider>
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
                path: '/login',
                element: '<>'
            }
        ],
        errorElement: <ErrorElement />  
    }
])
 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />) 
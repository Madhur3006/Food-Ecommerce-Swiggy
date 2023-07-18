import React, {useState, useContext} from 'react';
import { LOGO_URL } from '../utilis/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utilis/useOnlineStatus';
import UserContext from '../utilis/userContext';
import { useSelector } from 'react-redux';
import {login, logout } from '../utilis/userSlice';
import { useDispatch } from 'react-redux';


const Header = () => {
    const userName = useSelector(store => store.user.userName)
    const [user, setUser] = useState(userName)
    const onlineStatus = useOnlineStatus()
    const cartItems = useSelector(store => store.cart.items)
    const isLoggedIn = useSelector(store => store.user.IsloggedIn)
    const dispatch = useDispatch
    console.log(cartItems)

    const handleLogin = (user) => {
        dispatch(login(user))
    }

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div className="header-containor">
            <div className="image-containor">
                <Link to = '/'><img data-testid = 'logo' src={LOGO_URL} alt="logo" /></Link>
            </div>
            <div className = 'nav-containor'>
                <ul>
                    <li data-testid = "online-status">{onlineStatus? 'online' : 'Offline'}</li>
                    <Link to = '/grocery'><li>InstaMart</li></Link>
                    <Link to = '/'><li className="navlistitem1">Home</li></Link>
                    <Link to = '/about'><li className="navlistitem2">AboutUs</li></Link>
                    <Link to = '/contact'><li className="navlistitem3">ContactUs</li></Link>
                    <Link to = '/cart'><li data-testid = "cart" className="navlistitem4">Cart - {cartItems.length}</li></Link>
                    {isLoggedIn ? <li>{userName}</li> : <input type = 'text' placeholder = 'Username' value = {user} onChange = {(e) => setUser(e.target.value)}/>}
                    {isLoggedIn ? <li><button onClick = {() => handleLogout()}>Logout</button></li> : <li><button onClick = {() => handleLogin(user)}>Login</button></li>}
                </ul>
            </div> 
        </div>
    )
   }  
export default Header;
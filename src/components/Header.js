import React, {useState, useContext} from 'react';
import { LOGO_URL } from '../utilis/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utilis/useOnlineStatus';
import UserContext from '../utilis/userContext';

const Header = () => {
    const [login, setLogin] = useState(false)
    const onlineStatus = useOnlineStatus()
    const {user, setUser} = useContext(UserContext)
    return (
        <div className="header-containor">
            <div className="image-containor">
                <Link to = '/'><img src={LOGO_URL} alt="logo" /></Link>
            </div>
            <div className = 'nav-containor'>
                <ul>
                    <li>{onlineStatus? 'online' : 'Offline'}</li>
                    <Link to = '/grocery'><li>InstaMart</li></Link>
                    <Link to = '/'><li className="navlistitem1">Home</li></Link>
                    <Link to = '/about'><li className="navlistitem2">AboutUs</li></Link>
                    <Link to = '/contact'><li className="navlistitem3">ContactUs</li></Link>
                    <li className="navlistitem4">Cart</li>
                    {login ? <li>{user.name}</li> : <input type = 'text' placeholder = 'Username' value = {user.name} onChange = {(e) => setUser({
                        name: e.target.value, 
                        email: "madhurmangal5@gmail.com"
                    })}/>}
                    <button className = 'btn' onClick = {() => setLogin(!login)}>{ login  ? "logout" : "login" }</button>
                </ul>
            </div> 
        </div>
    )
   }  
export default Header;
import React, {useState} from 'react';
import { LOGO_URL } from '../utilis/constants';
import { Link } from 'react-router-dom';

const Header = () => {
    const [login, setLogin] = useState(false)

    return (
        <div className="header-containor">
            <div className="image-containor">
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className = 'nav-containor'>
                <ul>
                    <Link to = '/'><li className="navlistitem1">Home</li></Link>
                    <Link to = '/about'><li className="navlistitem2">AboutUs</li></Link>
                    <Link to = '/contact'><li className="navlistitem3">ContactUs</li></Link>
                    <li className="navlistitem4">Cart</li>
                    <button className = 'btn' onClick = {() => setLogin(!login)}>{ login ? "logout" : "login" }</button>
                </ul>
            </div> 
        </div>
    )
   }  
export default Header;
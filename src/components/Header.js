import React from 'react';
import { LOGO_URL } from '../utilis/constants';

const Header = () => {
    const [login, setLogin] = useState(false)

    return (
        <div className="header-containor">
            <div className="image-containor">
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className = 'nav-containor'>
                <ul>
                    <li className="navlistitem1">Home</li>
                    <li className="navlistitem2">AboutUs</li>
                    <li className="navlistitem3">ContactUs</li>
                    <li className="navlistitem4">Cart</li>
                    <button className = 'btn' onClick = {() => setLogin(!login)}>{ login ? "logout" : "login" }</button>
                </ul>
            </div> 
        </div>
    )
   }  
export default Header;
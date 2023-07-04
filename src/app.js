import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const AppLayout = () => {
    return ( 
        <div className = 'App-containor'>
            <Header />
            <Body />
            <Footer />
        </div>
     );
}
 
export default AppLayout;
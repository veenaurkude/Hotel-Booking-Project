import React from 'react';
import "./Layout.css";
// import Home from '../../pages/Home';
import Footer from '../common/Footer';
import Header from '../common/Header';
// import Register from '../register/Register';
import LoginForm from '../login/LoginForm';
// import HotelDetails from '../hotels/HotelDetails';

function Layout() {
  return (
    <>
    <Header />
    <div className='LayoutContainer'>
    
      <div className='MainWrapper'>
        {/* <Home /> */}
        <LoginForm />
        {/* <Register/> */}
        {/* <HotelDetails/> */}
      </div>
      
    </div>
    <Footer />
    </>
  )
}

export default Layout;
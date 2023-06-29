import React from 'react';

import { Routes, Route } from "react-router-dom";

import "./Layout.css";

import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Home from '../../pages/Home/Home';
import HotelDetails from '../../pages/Hotels/HotelDetails';
import Register from '../../pages/Register/Register';
import LoginForm from '../../pages/Login/LoginForm';
import About from '../../pages/About/About';
// import Overview from '../../pages/Hotels/overview';

function Layout() {
  return (
    <>
    <Header />
    <div className='LayoutContainer'>
    
      <div className='MainWrapper'>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/home' element={<Home/>}></Route>

          <Route path='/hotels' element={<HotelDetails/>}></Route>

          <Route path='/login' element={<LoginForm />}></Route>

          <Route path='/register' element={<Register />}></Route>

          <Route path='/about' element={<About />}></Route>

          {/* <Route path='/overview' element={<Overview/>}></Route> */}
        </Routes>
      
        
      </div>
      
    </div>
    <Footer />
    </>
  )
}

export default Layout;
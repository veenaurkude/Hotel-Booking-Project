// Layout.jsx

import React from 'react';
import { Routes, Route } from "react-router-dom";

import "./Layout.css";

import Header from '../common/Header';
import Footer from '../common/Footer';
import Home from '../../pages/Home/Home';
import HotelDetails from '../../pages/Hotels/HotelDetails';
import Register from '../../pages/Register/Register';
import LoginForm from '../../pages/Login/LoginForm';
import About from '../../pages/About/About';
import RoomCard from '../../pages/Hotels/rooms';
// import Profile from '../../pages/Profile/Profile';
import UserProfile from '../../pages/Profile/UserProfile';
import HotelList from '../../pages/Hotel List/hotelList';
import BookNow from '../../pages/Book now/bookNow';


// import Overview from '../../pages/Hotels/overview'; 

function Layout() {
  
  return (
    <>
    <Header />
    <div className='LayoutContainer'>
    
      <div className='MainWrapper'>
      
          {/* <UserProfile/> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/home' element={<Home/>}></Route>

          <Route path='/hotel_details' element={<HotelDetails/>}></Route>
          <Route path='/hotel_list' element={<HotelList/>}></Route>

          <Route path='/login' element={<LoginForm />}></Route>

          <Route path='/register' element={<Register />}></Route>

          <Route path='/hotels' element={<RoomCard />}></Route>

          <Route path='/about' element={<About />}></Route>
          <Route path='/booknow' element={<BookNow />}></Route>

          {/* <Route path='/profile' element={< UserProfile/>}></Route> */}

          <Route path='/profile' element={<UserProfile />} />


          {/* <Route path='/overview' element={<Overview/>}></Route> */}
        </Routes>
      
        
      </div>
      
    </div>
    <Footer />
    </>
  )
}

export default Layout;


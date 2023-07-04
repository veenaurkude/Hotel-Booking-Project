// UserProfile.jsx

import React from 'react';
import {useState , useEffect} from 'react';
import Profile from './Profile';
import Register from '../Register/Register';

function UserProfile() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      // Assuming the first user in the array is the currently logged-in user
      setUser(users[0]);
    }
  }, []);

  const handleLogin = (credentials) => {
    // Simulate server authentication
    // In a real application, make an HTTP request to your backend server
    // to verify the user credentials and retrieve user details

    // Assuming the login is successful and the server returns user details
    const userDetails = {
      name: credentials.name,
      email: credentials.email,
      username: credentials.username,
      phone: credentials.phone  
      // Additional user details...
    };

    setUser(userDetails);
  };



    return (
      <div>
        {user ? <Profile user={user} /> : <Register onLogin={handleLogin} />}
      </div>
    );
  };
  
  export default UserProfile;
  


// ------------------------------------------


  // import React from 'react';
  // import { useState } from 'react';
  // import Profile from './Profile';
  // import Register from '../Register/Register';
  // import PrivateRoute from './PrivateRoute';
  
  // function UserProfile() {
  //   const [user, setUser] = useState(null);
  
  //   const handleLogin = (credentials) => {
  //     const userDetails = {
  //           name: credentials.name,
  //           email: credentials.email,
  //           username: credentials.username,
  //           phone: credentials.phone  
  //             // Additional user details...
  //         };
  
  //     setUser(userDetails);
  //   };
  
  //   const isAuthenticated = user !== null;
  
  //   return (
  //     <div>
  //       <PrivateRoute
  //         path="/profile"
  //         element={Profile}
  //         isAuthenticated={isAuthenticated}
  //       />
  //       <PrivateRoute
  //         path="/register"
  //         element={<Register onLogin={handleLogin} />}
  //         isAuthenticated={!isAuthenticated}
  //       />
  //     </div>
  //   );
  // }
  
  // export default UserProfile;


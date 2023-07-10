// ProfilePage.js
import React from 'react';
import "./Profile.css";
import { Typography, Button } from '@mui/material';

function Profile({ user }) {
  return (
    <div className='Profile'>
      <Typography variant='h5'>User Details</Typography>
      <br />
      <div className='Name_Wrapper'>
        <Typography variant='body1'>Name: 
          <br />
          {user.name}
        </Typography>
        <Button>Edit</Button>
      </div>

      <br />

      <div className='Name_Wrapper'>
        <Typography>Email: 
          <br />
          {user.email}
        </Typography>
        <Button>Edit</Button>
      </div>
      
      <br />

      <div className='Name_Wrapper'>
        <Typography>Username:
          <br /> 
          {user.username}
        </Typography>
        <Button>Edit</Button>
      </div>

      <br />

      <div className='Name_Wrapper'>
        <Typography>Phone: 
          <br />
          {user.phone}
        </Typography>
        <Button>Edit</Button>
      </div>
      {/* Display additional user details as needed */}
    </div>
  );
};

export default Profile;



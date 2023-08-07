import React from "react";
import "./Register.css";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import hotel from "../../assets/images/hotel.jpg";
import InputField from "../../components/InputField";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "@mui/material";

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username:'',
    phone:'',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data before submitting
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are no validation errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form data to your backend or perform further actions
      console.log('Form submitted successfully:', formData);
      setFormData({
        name: '',
        email: '',
        username:'',
        phone:'',
        password: '',
      });
      setErrors('');
    }
  };

const validateForm=(data)=>{
  let errors ={};
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Invalid email address';
  }
  if(!data.username.trim()){
    errors.username = 'Username is required'
}else if (!validateUsername(data.username)) {
  errors.username = 'Invalid Username';
}
if (!data.phone.trim()) {
  errors.phone = 'Mobile Number is required';
}
if (!data.password.trim()) {
  errors.password = 'Password is required';
} else if (!validatePassword(data.password)) {
  errors.password = 'Password must be at least 6 characters long';
}
return errors;
}


  const validateUsername = (username) => {
    const userRegex = /^[a-zA-Z0-9]+$/;
    return userRegex.test(username);
  };

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
      return passRegex.test(password)
  };



    const SignIn=()=>{
        navigate('/login')
    }
    
  return (
    <div className="Wrapper">
      {/* <h2 className="Heading">Sign Up</h2> */}
      <div className="SignContent">

        image
        
      </div>

      <div className="Form_Section">
        
        {/* <div className="Side_Section">
          <img src={hotel} alt="Hotel" />
        </div> */}

        <form className="Signup" onSubmit={handleSubmit}>
        <h2 className="Heading">Sign Up</h2>

          <div>
            <InputField
              // label="First Name"
              type="name"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
             {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <br />

          <div>
            <InputField
              // label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            
          {errors.email && <span className="error">{errors.email}</span>}
          </div>

  
          <br />

          <div>
            <InputField
              // label = "Username"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <br />

          <div>
            <InputField
              // label = "Last Name"
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
             {errors.phone && <span className="error">{errors.phone }</span>}
          </div>

          <br />

          <div>
            <InputField
            // label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            />
            
            {errors.password && <span className="error">{errors.password}</span>}
        
          </div>
          <br />
          <div>
            <Button
              variant="contained"
                sx={{ width: "100%", marginBottom: "0.5em", backgroundColor:"rgb(247, 147, 41)", color:'hsl(240, 1%, 48%)' }}
                type="submit"
            >
              Sign Up
            </Button>
          </div>

          <Divider sx={{color:'hsl(240, 1%, 48%)'}}>OR</Divider>

          <div>
            <Button
              variant="contained"
              sx={{ width: "100%", marginTop: "0.5rem", backgroundColor:"rgb(247, 147, 41)" }}
              onClick={SignIn}
            >
              Already have an account? Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

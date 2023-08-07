import React, { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router-dom";
import Slider from "./sliderLogin";
// import '../../../node_modules/swiper/swiper-bundle.min.css';
// import Swiper from 'swiper';
// import { SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((prevData)=>({...prevData, [name]:value}))
    
  }
   const handleSubmit =(e)=>{
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form data to your backend or perform further actions
      console.log('Form submitted successfully:', formData);
      setFormData({
        email: '',
        password: '',
      });
      setErrors('');
    }
  }


  const validateForm=(data)=>{
    let errors ={};
  
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(data.email)) {
      errors.email = 'Invalid email address';
    }
  if (!data.password.trim()) {
    errors.password = 'Password is required';
  } else if (!validatePassword(data.password)) {
    errors.password = 'Password must be at least 6 characters long';
  }
  return errors;
  }
  
  
  
    const validateEmail = (email) => {
      const emailRegex = /^\S+@\S+\.\S+$/;
      return emailRegex.test(email);
    };
  
    const validatePassword = (password) => {
      const passRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        return passRegex.test(password)
    };

    
  return (
    <div className="login-container">
      <div className="sliderWrapper">
        <div className="Slide_Img">
          <Slider />
          <div className="quoteContent">
            {" "}
            Unlock a world of extraordinary stays...
          </div>
        </div>
        {/* <div>
        Welcome to StaySafe
      </div> */}
      </div>

      <div className="login-form">
        <div>
          <h2 className="Heading">Sign In</h2>
          <p style={{ textAlign: "center", color: "hsl(240, 1%, 48%)" }}>
            "Login to book your dream hotel."
          </p>
          <form onSubmit={handleSubmit}>
            <div className="Text_Field">
              <InputField
                label="Email"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
              onChange={handleChange}
              />
            </div>
            {errors.email && <span className="error">{errors.email}</span>}
            <br />
            <div>
              <InputField
                label="Password"
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
            <Button
              variant="contained"
              sx={{
                width: "100%",
                marginBottom: "1rem",
                backgroundColor: "rgb(247, 147, 41)",
              }}
              type="submit"
            >
              Sign In
            </Button>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={() => navigate("/register")}
                sx={{ color: "hsl(240, 1%, 48%)", fontSize: "12px" }}
              >
                Create Account
              </Button>
              <Button sx={{ color: "hsl(240, 1%, 48%)", fontSize: "12px" }}>
                Forgot Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

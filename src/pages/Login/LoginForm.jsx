
import React, { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import '../../../node_modules/swiper/swiper-bundle.min.css';
// import Swiper from 'swiper';
// import { SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");


  function handleLogin(event) {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (user) =>
          // user.name.toString() === email.toString() ||
          // user.phone.toString() === email.toString() ||
          user.email.toString() === email.toString()
      );

      if (user) {
        const uname = user.name;
        const user1 = {
          username: uname,
        };
        if (user.password.toString() === password.toString()) {
          localStorage.setItem("userData", JSON.stringify(user1));
          navigate("/home");
        } else {
          alert("Invalid password");
        }
      } else {
        alert("User not found");
      }

      setEmail("");
      setPassword("");
    }
  }

  const validateEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!email) {
      setErrorEmail("Email is required");
      return false;
    } else if (!regex.test(email)) {
      setErrorEmail("It should be a valid email address");
      return false;
    } else {
      setErrorEmail("");
      return true;
    }
  };

  const validatePassword = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!password) {
      setErrorPass("Password is required!");
      return false;
    } else if (!regex.test(password)) {
      setErrorPass(
        "Password should be minimum 8 characters and include at least 1 capital letter, 1 number, and 1 special character!"
      );
      return false;
    } else {
      setErrorPass("");
      return true;
    }
  };

  return (
    <div className="login-container">
      <div className="sliderWrapper">
      <div className="Slide_Img">
        <Slider />
        <h4> "Unlock a world of extraordinary stays." </h4>
      </div>
      {/* <div>
        Welcome to StaySafe
      </div> */}
       
      </div>


      <div className="login-form">
        <div>
        <h2 className="Heading">Sign In</h2>
        <p style={{textAlign:"center"}}>"Login to book your dream hotel."</p>
        <form onSubmit={handleLogin}>
          <div className="Text_Field">
        
            <InputField
              
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
            {errorEmail && <span className="error">{errorEmail}</span>}
          <br />
          <div>
            <InputField
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorPass && <span className="error">{errorPass}</span>}
          </div>

          <br />
          <Button
            variant="contained"
            sx={{ width: "100%", marginBottom: "1rem", backgroundColor:"#0B2447" }}
            type="submit"
          >
            Sign In
          </Button>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => navigate("/register")}>
              Create Account
            </Button>
            <Button>Forgot Password</Button>
          </div>
        </form>
        </div>
        
      </div>
    </div>
  );
}

export default LoginForm;


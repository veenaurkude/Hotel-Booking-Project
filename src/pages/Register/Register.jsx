import React from "react";
import "./Register.css";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// import hotel from "../../assets/images/hotel.jpg";
import InputField from "../../components/InputField";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({onLogin}) {

  let initialValues;
  if (localStorage.getItem("user")) {
    initialValues = JSON.parse(localStorage.getItem("user"));
  } else {
    initialValues = [];
  }

  const [name, setName] = useState("")
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [] = useState(initialValues);
  const navigate = useNavigate();

  const [errorUser, setErrorUser] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");

  function handleRegister() {
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // if (isUsernameValid && isEmailValid && isPasswordValid) {
    //   const user = {name: username, email, password };
    //   const storedUsers = localStorage.getItem("users");
    //   const users = storedUsers ? JSON.parse(storedUsers) : [];
    //   users.push(user);
    //   localStorage.setItem("users", JSON.stringify(users));
    //   alert("Registration successful");
    //   navigate("/login");
    // } else {
    //   alert("Please fill in all required fields with valid values");
    // }

    // --------------------

    if (isUsernameValid && isEmailValid && isPasswordValid) {
      const user = { name, email, username, phone, password };
      const storedUsers = localStorage.getItem("users");
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful");
      navigate("/login");
    } else {
      // ... existing code ...
    }

    setUsername("");
    setEmail("");
    setPassword("");
    console.log(username,email,password);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onLogin({ name, email, username, phone, password });
  }

  const validateUsername = () => {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!username) {
      setErrorUser("Username is required!");
      return false;
    } else if (!regex.test(username)) {
      setErrorUser("Username should only contain letters and numbers!");
      return false;
    } else {
      setErrorUser("");
      return true;
    }
  };

  const validateEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!email) {
      setErrorEmail("Email is required!");
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
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
      );
      return false;
    } else {
      setErrorPass("");
      return true;
    }
  };



    const SignIn=()=>{
        navigate('/login')
    }
    
  return (
    <div className="Wrapper">
      {/* <h2 className="Heading">Sign Up</h2> */}

      <div className="Form_Section">
        
        {/* <div className="Side_Section">
          <img src={hotel} alt="Hotel" />
        </div> */}

        <form className="Signup" onSubmit={handleSubmit}>
        <h2 className="Heading">Sign Up</h2>

          <div>
            <InputField
              label="Name"
              type="ṭext"
              id="firstname"
              name="firstname"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />

          <div>
            <InputField
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            
          {errorEmail && <span className="error">{errorEmail}</span>}
          </div>

  
          <br />

          <div>
            <InputField
              label = "Username"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            {errorUser && <span className="error">{errorUser}</span>}
          </div>
          <br />

          <div>
            <InputField
              label = "Phone"
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <br />

          <div>
            <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            />
            
            {errorPass && <span className="error">{errorPass}</span>}
        
          </div>
          <br />
          <div>
            <Button
              onClick={handleRegister}
              variant="contained"
                sx={{ width: "100%", marginBottom: "0.5em" }}
            >
              Sign Up
            </Button>
          </div>

          <Divider>OR</Divider>

          <div>
            <Button
              variant="contained"
              sx={{ width: "100%", marginTop: "0.5rem" }}
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

import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import InputField from "../../components/InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  // const [islogin, setlogin] = useRecoilState(isLogin);
  
  const [errorUser, setErrorUser] = useState("")
  const [errorEmail, setErrorEmail] = useState();
  const [errorPass, setErrorPass] = useState("");

  function handleLogin() {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user) => {
      return (
        user.name.toString() === email.toString() ||
        user.email.toString() === email.toString() ||
        user.phone.toString() === email.toString()
      );
    });

    if (user) {
      let uname = user.name;
      let user1 = {
        username: uname,
      };
      if (user.password.toString() === password.toString()) {
        // setlogin(true);
        localStorage.setItem("userData", JSON.stringify(user1));
        navigate("/home");
      } else {
        alert("Invalid password");
      }
    } else {
      alert("User not found");
    }

    setEmail("");
    setpassword("");
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
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
      );
      return false;
    } else {
      setErrorPass("");
      return true;
    }
  };


  return (
    <div className="Login_Form">
      <h2 className="Heading">Sign In</h2>
      <p>For security, please sign in to access your information</p>
      <form >
        <div>
        
        
          <InputField
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errorEmail && <span className="error">{errorEmail}</span>}
          
        </div>
        <br />
        <div>
          
          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            />
            
            {errorPass && <span className="error">{errorPass}</span>}
        </div>

        <br />
        <Button
          variant="contained"
          sx={{ width: "100%", marginBottom: "1rem" }}
          type="submit"
          onClick={handleLogin}
        >
          Sign In
        </Button>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={() => navigate("/register")}>Create Account</Button>
          <Button>Forgot Password</Button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;

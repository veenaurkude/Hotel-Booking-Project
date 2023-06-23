// import React from "react";
// import { useState } from "react";
// import "./Login.css";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// function LoginForm() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  

//   const validateEmail = () => {
//     const regex = /^\S+@\S+\.\S+$/;
//     if (!email) {
//       setEmailError("Email is required!");
//       return false;
//     } else if (!regex.test(email)) {
//       setEmailError("It should be a valid email address!");
//       return false;
//     } else {
//       setEmailError("");
//       return true;
//     }
//   };

//   const validatePassword = () => {
//     const regex =
//       /^(?=.*[A-Za-z])(?=cd.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
//     if (!password) {
//       setPassError("Password is required!");
//       return false;
//     } else if (!regex.test(password)) {
//       setPassError(
//         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
//       );
//       return false;
//     } else {
//       setPassError("");
//       return true;
//     }
//   };

//   return (
//     <div className="Login_Form">
//       <h2 className="Heading">Sign In</h2>
//       <p>For security, please sign in to access your information</p>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="">Email</label>
//           <TextField
//             required
//             id="outlined-required"
//             className="Text_Field"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="">Password</label>
//           <TextField
//             required
//             id="outlined-required"
//             className="Text_Field"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <br />
//         <Button variant="contained" sx={{ width: "100%", marginBottom: "1rem" }}>
//           Sign In
//         </Button>

//         <div style={{display: "flex", justifyContent: "space-between"}}>
//           <a href="https://www.google.com/">Create Account</a>

//           <a href="https://www.google.com/">Forgot Password</a>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;

// -----------------------------------------------------------------

import React from "react";
import { useState } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginForm() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};


const validateEmail = () => {
  const regex = /^\S+@\S+\.\S+$/;
  if (!email) {
    setEmailError("Email is required!");
    return false;
  } else if (!regex.test(email)) {
    setEmailError("It should be a valid email address!");
    return false;
  } else {
    setEmailError("");
    return true;
  }
};

const validatePassword = () => {
  const regex =
    /^(?=.*[A-Za-z])(?=cd.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
  if (!password) {
    setPasswordError("Password is required!");
    return false;
  } else if (!regex.test(password)) {
    setPasswordError(
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
    );
    return false;
  } else {
    setPasswordError("");
    return true;
  }
};


const handleSubmit = (event) => {
  event.preventDefault();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  if (isEmailValid && isPasswordValid) {
    // Perform the sign-in logic here
  }
};


return (
  <div className="Login_Form">
    <h2 className="Heading">Sign In</h2>
    <p>For security, please sign in to access your information</p>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email</label>
        <TextField
          required
          id="outlined-required"
          className="Text_Field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="Error_Message">{emailError}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="">Password</label>
        <TextField
          required
          id="outlined-required"
          className="Text_Field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <p className="Error_Message">{passwordError}</p>}
      </div>
      <br />
      <Button variant="contained" sx={{ width: "100%", marginBottom: "1rem" }} type="submit">
        Sign In
      </Button>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href="https://www.google.com/">Create Account</a>
        <a href="https://www.google.com/">Forgot Password</a>
      </div>
    </form>
  </div>
);
}
export default LoginForm;
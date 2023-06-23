import React from "react";
import "./Register.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import hotel from "../../assets/images/hotel.jpg";

function Register() {
  return (
    <div className="Wrapper">

      <h2 className="Heading">Sign Up</h2>

      <div className="Form_Section">
        
        <div className="Side_Section">
          <img src={hotel} alt="Hotel" />
        </div>

        <form className="Signup">
          <div>
            <TextField
              required
              id="outlined-required"
              type="text"
              name="firstname"
              className="Text_Field"
              placeholder="First Name"
            />
          </div>
          <br />  
          <div>
            <TextField
              required
              id="outlined-required"
              type="text"
              name="lastname"
              className="Text_Field"
              placeholder="Last Name"
            />
          </div>
          <br />
          <div>
            <TextField
              required
              id="outlined-required"
              type="email"
              name="email"
              className="Text_Field"
              placeholder="Email"
            />
          </div>
          <br />
          <div>
            <TextField
              required
              id="outlined-required"
              type="password"
              name="password"
              className="Text_Field"
              placeholder="Password"
            />
          </div>
          <br />
          <div>
            <Button
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

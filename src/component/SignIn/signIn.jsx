import React from "react";
import "./signIn.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles({
    hotel_name:{
      background: 'green',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundSize: 'cover',
      position: 'relative',
      fontSize: 'calc(1.5 * 24px)', // Assuming $extra-large equals 24px
      textTransform: 'uppercase',
      fontFamily: "'Rancho', cursive",
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
      '&::after': {
        '--stroke-width': 'calc(0.05 * 24px)', // Assuming $extra-large equals 24px
        content: 'var(--random-text)',
        position: 'absolute',
        WebkitTextStrokeWidth: 'var(--stroke-width)',
        WebkitTextStrokeColor: 'rgba(0, 0, 0, 0.6)',
        left: '2px',
        top: '2px',
      }
   
    }
  });

function LoginForm() {

    const classes = useStyles();

    const navigate = useNavigate()

    const enterTo=()=>{
        navigate('/dashboard')
    }
    const signUp=()=>{
        navigate('/signup')
    }
  return (
    <>
     <div className={classes.hotel_name}>
        TechGicus.Hotels
    </div>
    
    <div className="Login_Form">
      <h2 className="Heading">Sign In</h2>
      <p>For security, please sign in to access your information</p>
      <form>
        <div>
          <TextField
            required
            id="outlined-required"
            className="Text_Field"
            placeholder="Email"
          />
        </div>
        <br />
        <div>
          <TextField
            required
            id="outlined-required"
            className="Text_Field"
            placeholder="Password"
          />
        </div>
        <br />
        <Button variant="contained" sx={{ width: "100%", marginBottom: "1rem" }} onClick={enterTo} color="success">
          Sign In
        </Button>

        <div style={{display: "flex", justifyContent: "space-between"}}>
          <a onClick={signUp}>Create Account</a>

          <a href="https://www.google.com/">Forgot Password</a>
        </div>
      </form>
    </div>
    </>
  );
}

export default LoginForm;

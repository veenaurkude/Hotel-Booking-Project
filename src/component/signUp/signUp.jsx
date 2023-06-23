import React from "react";
import "./signUp.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hotel_name: {
    background: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    position: "relative",
    fontSize: "calc(1.5 * 24px)", // Assuming $extra-large equals 24px
    textTransform: "uppercase",
    fontFamily: "'Rancho', cursive",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    "&::after": {
      "--stroke-width": "calc(0.05 * 24px)", // Assuming $extra-large equals 24px
      content: "var(--random-text)",
      position: "absolute",
      WebkitTextStrokeWidth: "var(--stroke-width)",
      WebkitTextStrokeColor: "rgba(0, 0, 0, 0.6)",
      left: "2px",
      top: "2px",
    },
  },
});

function Register() {
  const classes = useStyles();

  const navigate = useNavigate();

  const signUp = () => {
    navigate("/signin");
  };
  return (
    <>
      <div className={classes.hotel_name}>TechGicus.Hotels</div>
      <div className="container">
        <div className="content">
          There’s a smarter way to HOTEL around 
          <br></br>
          <span style={{fontSize:20}}>Sign up with your phone number and
          get exclusive access to discounts and savings on stays and with
          our many travel partners.</span>
        </div>

        <div className="Wrapper">
          <h2 className="Heading">Sign Up</h2>

          <div className="Form_Section">
            <form className="Signup">
              <div>
                <TextField
                  required
                  id="outlined-required"
                  className="Text_Field"
                  placeholder="Full Name"
                />
              </div>
              <br />
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
              <div>
                <TextField
                  required
                  id="outlined-required"
                  className="Text_Field"
                  placeholder="Confirm Password"
                />
              </div>
              <br />
              <div>
                <Button
                  color="success"
                  variant="contained"
                  sx={{ width: "100%", marginBottom: "0.5em" }}
                  onClick={signUp}
                >
                  Sign Up
                </Button>
              </div>

              <Divider>OR</Divider>

              <div>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: "100%", marginTop: "0.5rem" }}
                >
                  Already have an account? Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

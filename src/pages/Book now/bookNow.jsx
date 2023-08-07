import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../Book now/bookNow.css"
import { useNavigate } from "react-router";
import { useState } from "react";


function BookNow() {
    const navigate = useNavigate();

    const [bookData, setBookData] = useState({
      fullName:'',
      emailAdress:'',
      phoneNo: ''
    })

    const [errors, setErrors] = useState({
      fullName:'',
      emailAdress:'',
      phoneNo: ''
    })

    const handleChange=(e)=>{
      const {name, value} = e.target;
      setBookData({...bookData,[name]: value});
      setErrors({...errors, [name]:''})
    }
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      const newError= {};

      if(!bookData.fullName.trim()){
        newError.fullName ='FullName is required'
      }
      if(!bookData.emailAdress.trim()){
        newError.emailAdress =" Email Adress is required"
      }
      else if(!isValidEmail(bookData.emailAdress)){
        newError.emailAdress ="Invalid email address format"
      }
      if(!bookData.phoneNo.trim()){
        newError.phoneNo = "Phone number is required"
      }

      if(Object.keys(newError).length>0){
        setErrors(newError);
      }
      else{
        console.log("Booking registration is done!", bookData);
      }
    }

    const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
  return (
    <>
    <Box>
        <Button onClick={()=>navigate('/hotel_details')} color="error">&lt; Modify your booking</Button>
    
    </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
        //   border: "2px solid red",
        }}
      >
        <Box>
          <Box sx={{padding:'1rem'}}>
            <Card sx={{ minWidth: 275, backgroundColor:"rgb(254, 246, 233)" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: '1rem', display:'flex', alignItems:'center', justifyContent:'center', color:'rgb(211, 140, 23)' }}
                  gutterBottom
                >🎉 Yay! you just saved ₹2285 on this booking!
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{padding:'1rem'}}>
            <Card sx={{ minWidth: 375}}>
              <CardContent>
                <form onSubmit={handleSubmit}>
                <Typography variant="h4">Enter your details</Typography>
                <Typography variant="body1">
                  We will use these details to share your booking information
                </Typography>
                <Box sx={{ display: "flex", gap: "1rem", padding:'1rem'}}>
                  <Box>
                    <label htmlFor="outlined-basic" className="labelForm">Full Name </label>
                    <TextField
                      id="outlined-basic"
                      placeholder="Enter your first and last name"
                      fullWidth
                      type="text"
                      name="fullName"
                      value={bookData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <span className="error">{errors.fullName}</span>}
                  </Box>
                  <Box>
                    <label htmlFor="outlined-basic2" className="labelForm">Email Address </label>
                    <TextField
                      id="outlined-basic2"
                      placeholder="name@abc.com"
                      fullWidth
                      type="email"
                      name="emailAdress"
                      value={bookData.emailAdress}
                      onChange={handleChange}
                    />
                    {errors.emailAdress && <span className="error">{errors.emailAdress}</span>}
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: "10px", alignItems:'center',padding:'1rem'}}>
                  <Box width={305}>
                    <label htmlFor="outlined-basic" className="labelForm">Mobile Number </label>
                    <TextField
                      id="outlined-basic"
                      placeholder="e.g. 1234567890"
                      fullWidth
                      type="number"
                      name="phoneNo"
                      value={bookData.phoneNo}
                      onChange={handleChange}
                    />
                    {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
                  </Box>
                  <Box>
                    {/* <Button variant="contained" sx={{backgroundColor:'rgb(247, 147, 41)'}}>Send passcode</Button> */}
                    <button className="btn" type="submit">Send Passcode</button>
                  </Box>
                </Box>
                </form>
                  </CardContent>
            </Card>
          </Box>
        </Box>
        <Box sx={{padding:'1rem'}}>
          <Card sx={{padding:'1rem'}}>
            <CardContent>
              <Typography sx={{fontSize:'1rem', fontWeight:'bold', lineHeight:1.5}}>
                Radison Blue
              </Typography>
              <Box>
              <Button variant="contained" color="success">
                3.4 &#9733;
              </Button>
              <span>(2356 Ratings)· Good </span>
              </Box>
              <Typography sx={{fontSize:'1rem', fontWeight:'bold', lineHeight:1.5 }}>
                Date
              </Typography>
              <Typography sx={{fontSize:'1rem', fontWeight:'bold', lineHeight:1.5 }}>
                Deluax
              </Typography>
              <Box sx={{width:350, height:150, display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                <Box sx={{display:'flex', justifyContent:'space-between' }}>
                    <Box color='hsl(240, 1%, 4'>
                    Room price for 1 Night X 2 Guests
                    </Box>
                    <Box className="labelForm">
                    ₹6528  
                    </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box>
                    Instant discount
                    </Box>
                    <Box className="labelForm">
                    -₹1958  
                    </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box>
                    50% Coupon Discount
                    </Box>
                    <Box className="labelForm">
                    -₹2285 
                    </Box>
                </Box>
                <Box sx={{borderTop:'1px solid black', margin: '10px 0'}}></Box>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box>
                    Payable Amount
                    (inclusive of all taxes)
                    </Box>
                    <Box className="labelForm">
                    ₹2285
                    </Box>
                </Box>
              </Box>
              
            </CardContent>
            <CardActions  sx={{display:'flex', justifyContent:'center'}}>
              {/* <Button size="medium" variant="contained" sx={{backgroundColor:"rgb(247, 147, 41)"}}>Confirm Booking</Button> */}
              <button className="btn">Confirm Booking</button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
}
export default BookNow;

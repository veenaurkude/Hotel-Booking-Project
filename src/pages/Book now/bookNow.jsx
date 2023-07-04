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


function BookNow() {
    const navigate = useNavigate()
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
                    />
                  </Box>
                  <Box>
                    <label htmlFor="outlined-basic2" className="labelForm">Email Address </label>
                    <TextField
                      id="outlined-basic2"
                      placeholder="name@abc.com"
                      fullWidth
                      type="email"
                    />
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
                    />
                  </Box>
                  <Box>
                    <Button variant="contained" disabled>Send passcode</Button>
                  </Box>
                </Box>
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
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box>
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
              <Button size="medium" variant="contained" color="error">Confirm Booking</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
}
export default BookNow;

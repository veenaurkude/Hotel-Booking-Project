import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import radison from "./assets/radisonblue.JPG";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import './hoteList.css'

export default function MediaCard() {

  const navigate = useNavigate()

  const viewDetails=()=>{
      navigate('/hotel_details')
  }
  return (
    <Card sx={{ maxWidth: 800, height:200, display:'flex', padding:2 , marginLeft:2}}>
      <Box>
        <img src={radison} alt="" width={250} height={200} />
      </Box>
      <Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Radisson Blu Hotel Nagpur
        </Typography>
        <div style={{display:"flex", justifyContent:'space-between'}}>
        <Typography gutterBottom variant="body3" component="div">
          Naredra Nagar, Nagpur
        </Typography>
        <Typography gutterBottom component="div" sx={{color:'green'}}>
          Fully Refundable
        </Typography>
        </div>
        <Box>
          <ul>
            <li>Free Wifi</li>
            <li>Reception</li>
            <li>Power backup</li>
          </ul>
        </Box>
      </CardContent>
      <CardActions>
      <Button size="small" variant="outlined" onClick={viewDetails}>
          View Details
        </Button>
        <Button size="small" variant="contained" onClick={()=>navigate('/booknow')}>
          Book Now
        </Button>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ ml: 2, color: "#b3b3b3", textDecoration: "line-through" }}
        >
          &#8377;8999
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ ml: 2, color: "#ff1a1a", mr:7}}>
          &#8377;2999
        </Typography>
        <Button variant="outlined" color="error" size="small">
          4.5&#9733;
        </Button>
      </CardActions>
      </Box>
    </Card>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import radison from "../HotelList/assets/radisonblue.JPG";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function MediaCard() {

  const navigate = useNavigate()

  const viewDetails=()=>{
      navigate('/hotelview')
  }
  return (
    <Card sx={{ maxWidth: 900, height:280, display:'flex', padding:2, marginLeft:2}}>
      <Box>
        <img src={radison} alt="" width={300} height={230} />
      </Box>
      <Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Radisson Blu Hotel Nagpur
        </Typography>
        <Typography gutterBottom variant="body3" component="div">
          Nagpur
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{color:'green'}}>
          Fully Refundable
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Whether you're hoping to dive into India's rich culture or just
          planning to relax with five-star amenities, the Radisson Blu Hotel
          Nagpur provides the perfect accommodations.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success">
          Book Now
        </Button>
        <Button size="small" variant="outlined" onClick={viewDetails}>
          View Details
        </Button>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ ml: 2, color: "#b3b3b3", textDecoration: "line-through" }}
        >
          &#8377;8999
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ ml: 2, color: "#ff1a1a", mr:10}}>
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

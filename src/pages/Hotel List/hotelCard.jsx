import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import radison from "./assets/radisonblue.JPG";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import WifiIcon from '@mui/icons-material/Wifi';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import './hoteList.css'

export default function MediaCard() {

  const navigate = useNavigate()

  const viewDetails=()=>{
      navigate('/hotel_details')
  }
  return (
    <Card sx={{ maxWidth: 850, height:230, display:'flex', padding:2 , marginLeft:2}}>
      <Box>
        <img src={radison} alt="" width={250} height={200} />
      </Box>
      <Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Radisson Blu Hotel Nagpur
        </Typography>
        <div style={{display:"flex", justifyContent:'space-between'}}>
        <Typography gutterBottom variant="body3" component="div" color='hsl(240, 1%, 48%)'>
          Naredra Nagar, Nagpur
        </Typography>
        <Typography gutterBottom component="div" sx={{color:'rgb(156, 128, 76)'}}>
          Fully Refundable
        </Typography>
        </div>
        <Box>
<<<<<<< HEAD
          <ul style={{color:'hsl(240, 1%, 48%)', marginTop:'6px'}}>
            <li> <WifiIcon/>&nbsp;&nbsp;Free Wifi</li>
            <li><TaskAltIcon/>&nbsp;&nbsp;Reception</li>
            <li><BoltIcon/>&nbsp;&nbsp;Power backup</li>
=======
          <ul className="feature_list">
            <li>Free Wifi</li>
            <li>Reception</li>
            <li>Power backup</li>
>>>>>>> a03e168218ce98e37726d86868690cf9d95704eb
          </ul>
        </Box>
      </CardContent>
      <CardActions>
      <Button size="small" variant="outlined" sx={{color:'rgb(247, 147, 41)', outlineColor:'rgb(247, 147, 41)', borderColor:'rgb(247, 147, 41)'}} onClick={viewDetails}>
          View Details
        </Button>
        <Button size="small" variant="contained" sx={{backgroundColor:'rgb(247, 147, 41)'}} onClick={()=>navigate('/booknow')}>
          Book Now
        </Button>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ ml: 2, color: "#b3b3b3", textDecoration: "line-through" }}
        >
          &#8377;8999
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ ml: 2, color: "rgb(247, 147, 41)", mr:7}}>
          &#8377;2999
        </Typography>
        <Button variant="contained" color="success" size="small">
          4.5&#9733;
        </Button>
      </CardActions>
      </Box>
    </Card>
  );
}

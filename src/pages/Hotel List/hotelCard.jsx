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
    <Card sx={{ maxWidth: 900, height:250, display:'flex', padding:3 , marginLeft:3}}>
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
          Narendra Nagar, Nagpur
        </Typography>
        <Typography gutterBottom component="div" sx={{color:'rgb(156, 128, 76)'}}>
          Fully Refundable
        </Typography>
        </div>
        <Box>
          <ul className="unordered-style">
            <li className="list-style"><WifiIcon/>Free Wifi</li>
            <li className="list-style"><TaskAltIcon/>Reception</li>
            <li className="list-style"><BoltIcon/>Power backup</li>
            <li className="list-style">
              <Button onClick={viewDetails} sx={{color:"hsl(240, 1%, 45%)"}}>
              + more
              </Button>
            </li>
          </ul>
        </Box>
      </CardContent>
      <CardActions>
      <Button size="small" variant="outlined" 
      sx={{color:'#0B2447', outlineColor:'#0B2447', borderColor:'#0B2447',
      '&:hover': {
        borderColor: '#19376D', },
    }} 
      onClick={viewDetails}>
          View Details
        </Button>
        <Button size="small" variant="contained" 
        sx={{backgroundColor:"#0B2447", 
        '&:hover': {
              backgroundColor: '#19376D', },
            }} 
        onClick={()=>navigate('/booknow')}>
          Book Now  
        </Button>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ ml: 2, color: "#b3b3b3", textDecoration: "line-through", mt:"0.5rem" }}
        >
          &#8377;8999
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ ml: 2, color: "#0B2447", mr:7, mt:"0.5rem"}}>
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

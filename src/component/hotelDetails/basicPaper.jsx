import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import "../hotelDetails/cardImage.css";
import radison1 from '../hotelDetails/assets/radison1.JPG';
import radison2 from '../hotelDetails/assets/radison2.JPG';
import radison3 from '../hotelDetails/assets/radison3.JPG';
import radison4 from '../hotelDetails/assets/radison4.JPG';
import radison5 from '../hotelDetails/assets/radison5.JPG';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
// import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


export default function ImageCard() {

  const navigate = useNavigate()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(event)
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <div className='imageContainer'>
        <div className='image1'>
            <img src={radison1} alt="" width={'600px'} height={'400px'} />
        </div>
        <div className='imagebox'>
            <div className='boximage'>
            <img src={radison2} alt="" width={'290px'} height={'185px'} />    
            </div>
            <div className='boximage'>
            <img src={radison3} alt="" width={'290px'} height={'185px'} />    
                
            </div>
            <div className='boximage'>
            <img src={radison4} alt="" width={'290px'} height={'185px'} />    
                
            </div>
            <div className='boximage'>
            <img src={radison5} alt="" width={'290px'} height={'185px'} />    
                
            </div>
        </div>
      </div>
      </CardContent>
      <CardActions>
      <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Rooms" href="/rooms" />
        <LinkTab label="Overview" href="/overview" />
        <LinkTab label="Location" href="/spam" />
        <LinkTab label="Amenities" href="/spam" />
        <LinkTab label="Policies" href="/spam" />
      </Tabs>
    </Box>
      </CardActions>
    </Card>
  );
}
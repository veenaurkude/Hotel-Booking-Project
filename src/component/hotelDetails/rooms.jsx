import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import radison1 from '../hotelDetails/assets/radison2.JPG'

export default function RoomCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={radison1}
          alt="radison"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Superior Room
          </Typography>
          <Typography variant="body2" color="text.secondary">
          33 sq m / Sleeps 3 / 1 King Bed
          </Typography>
          <Typography variant='body1' sx={{color:'green', mt:2}}>
            Fully refundable
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Before Saturday, 1 July, 2023
          </Typography>
          <Typography variant='h5' sx={{mt:3}}>
          &#8377;10,000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
          Price Details &gt;
        </Button>
        <Button size="small" variant="contained" color="primary">
          Reserve
        </Button>
      </CardActions>
    </Card>
  );
}
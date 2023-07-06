import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 180 }}>
    <Typography variant='h5' sx={{color:'hsl(240, 1%, 48%)'}}>
        Price per night
    </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={1000}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={200}
        marks
        min={600}
        max={4500}
        sx={{color:'rgb(247, 147, 41)'}}
      />
    </Box>
  );
}
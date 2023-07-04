import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 200 }}>
    <Typography variant='h5'>
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
        max={5000}
      />
    </Box>
  );
}
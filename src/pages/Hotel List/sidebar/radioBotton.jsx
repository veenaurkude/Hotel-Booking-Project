import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl sx={{color:"hsl(240, 1%, 48%)"}}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="any" control={<Radio />} label="Any" />
        <FormControlLabel value="Wonderful" control={<Radio />} label="Wonderful 9+" />
        <FormControlLabel value="good" control={<Radio />} label="Very good" />
      </RadioGroup>
    </FormControl>
  );
}
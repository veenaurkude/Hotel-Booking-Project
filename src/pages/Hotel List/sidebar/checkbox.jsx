import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material"; 
import TextField from '@mui/material/TextField';
import DiscreteSlider from "./range";

export default function CheckboxLabels() {
  return (
    <FormGroup sx={{color:'hsl(240, 1%, 48%)'}}>
      <Typography variant="h5" component="h2">
        Filter by
      </Typography>
      <Typography variant="body1" component="h2">
        Location
      </Typography>
      <TextField variant="outlined" label="Search..." sx={{padding:"0"}}></TextField>

      <br />
      <DiscreteSlider></DiscreteSlider>
      <br />

      <FormControlLabel control={<Checkbox/>} label="Spa" />
      <FormControlLabel control={<Checkbox/>} label="Breakfast included" />
      <FormControlLabel control={<Checkbox/>} label="Pool" />
      <FormControlLabel control={<Checkbox/>} label="Hot tub" />

      <br />
      
      <Typography variant="body1" component="h2">
      Guest rating 
      </Typography>
    </FormGroup>
  );
}

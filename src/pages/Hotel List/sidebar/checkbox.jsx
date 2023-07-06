import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material"; 

export default function CheckboxLabels() {
  return (
    <FormGroup sx={{color:'hsl(240, 1%, 48%)'}}>
      <Typography variant="h5" component="h2">
        Filter by
      </Typography>
      <Typography variant="h5" component="h2">
        Popular filters
      </Typography>
      <FormControlLabel control={<Checkbox/>} label="Spa" />
      <FormControlLabel control={<Checkbox/>} label="Breakfast included" />
      <FormControlLabel control={<Checkbox/>} label="Pool" />
      <FormControlLabel control={<Checkbox/>} label="Hot tub" />
      <Typography variant="h5" component="h2">
      Guest rating 
      </Typography>
    </FormGroup>
  );
}

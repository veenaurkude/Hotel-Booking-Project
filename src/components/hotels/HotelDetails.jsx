import React from "react";
import "./HotelDetails.css";
import hotel from "../../assets/images/hotel.jpg";
import Date from "../Date";
import BasicTabs from "../TabPanel";
import { Grid, Paper } from '@mui/material';


function HotelDetails() {
  return (
    <>
      <div>
        <Date />
      </div>
      
      <div className="Image_Section">
      <Grid container spacing={1}>
        {/* First Grid */}
        <Grid item xs={6}>
          <Paper>
            <img src={hotel} alt="Big" />
          </Paper>
        </Grid>

        {/* Second Grid */}
        <Grid item xs={6}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Paper>
                <img src={hotel} alt="Small1" width={"300px"} height={"190px"}/>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <img src={hotel} alt="Small2" width={"300px"} height={"190px"}/>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <img src={hotel} alt="Small3" width={"300px"} height={"190px"}/>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <img src={hotel} alt="Small4" width={"300px"} height={"190px"}/>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
      
      <BasicTabs />
    </>
  );
}

export default HotelDetails;


import React from "react";
import "./HotelDetails.css";
import hotel from "../../assets/images/hotel.jpg";
import Date from "../../components/Date";
import BasicTabs from "../../components/TabPanel";
import { Button, Grid, Paper } from "@mui/material";
import DialogBox from "../../components/DialogBox";

function HotelDetails() {
  return (
    <>
      <div style={{ margin: "1rem 0", display: "flex", gap: "1rem", alignItems: "center"}}>
        <div>
          <Date />
        </div>
        <div style={{ marginTop: "0.5rem"}}>
          <DialogBox />
        </div>

        <div>
          <Button variant="contained">Check Availability</Button>
        </div>
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
                  <img
                    src={hotel}
                    alt="Small1"
                    width={"300px"}
                    height={"190px"}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                  <img
                    src={hotel}
                    alt="Small2"
                    width={"300px"}
                    height={"190px"}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                  <img
                    src={hotel}
                    alt="Small3"
                    width={"300px"}
                    height={"190px"}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                  <img
                    src={hotel}
                    alt="Small4"
                    width={"300px"}
                    height={"190px"}
                  />
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

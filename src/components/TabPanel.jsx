import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "../pages/Hotels/Overview.css";

// import { Button } from "@mui/material";

// import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  // const navigate = useNavigate();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Rooms" {...a11yProps(1)} />
          <Tab label="Facilities" {...a11yProps(2)} />
          <Tab label="Location" {...a11yProps(3)} />
          <Tab label="Reviews" {...a11yProps(4)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <h4>Hotel Overview</h4>
        <div className="maincontainer">
          <div className="contentmain">
            <h2>Radisson Blu Hotel Nagpur</h2>
            <p>Luxury hotel in Nagpur with outdoor ool and bar/lounge</p>
            <h3>8.8/10 Fabulous</h3>
            <p>162 varified Holels.com guest reviews</p>
            <br />
            <h2>Popular amenities</h2>
            <div className="item">
              <div className="item1">
                <p>Pool</p>
                <p>Airport transfer</p>
                <p>Free wifi</p>
              </div>
              <div className="item2">
                <p>SPA</p>
                <p>Free parking</p>
                <p>Restaurant</p>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Hotel Rooms
      </TabPanel>
      <TabPanel value={value} index={2}>
        Facilities
      </TabPanel>
      <TabPanel value={value} index={3}>
        Location Map
      </TabPanel>
      <TabPanel value={value} index={4}>
        Reviews
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';



function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ background: "#333" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
          {/* <MenuIcon /> */}
          {/* </IconButton> */}
          
          <div>
            <NavLink to="/home">
              <Button>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, justifyContent: "flex-start", color: "#fff" }}
                  href="/"
                >
                  StayVista
                </Typography>
              </Button>
            </NavLink>
          </div>

          <div style={{ justifyContent: "flex-end" }}>


            <NavLink to="/hotel_details">
              <Button sx={{color: "#fff"}}>
                <ApartmentIcon/>
                Hotels
                </Button>
            </NavLink>

            {/* <NavLink>
              <Button sx={{color: "#fff"}}>Services</Button>
            </NavLink> */}

            <NavLink to="/login">
              <Button sx={{color: "#fff"}}>
                <AccountCircleIcon/>
                Login / SignUp
                </Button>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

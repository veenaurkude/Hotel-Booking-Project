
// // ----------------------------------------------------------------

// import {
//   Typography,
//   Toolbar,
//   Tabs,
//   Tab,
//   Button,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import AppBar from "@mui/material/AppBar";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import { useState } from "react";
// import DrawerComp from "./DrawerComp";
// import { useNavigate } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate()
//   const [color, setColor] = useState();
//   const theme = useTheme();
//   console.log(theme);
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(isMatch);
//   return (
//     <>
//       <AppBar sx={{ backgroundColor: "rgb(247, 147, 41)", height:'3rem', display:'flex', justifyContent:'center'}}>
//         <Toolbar>
//           <ApartmentIcon />
//           <Typography>StaySafe</Typography>
//           {isMatch ? (
//             <>
//               <DrawerComp />
//             </>
//           ) : (
//             <>
//               <Tabs
//                 textColor="hsl(240, 1%, 48%)"
//                 value={color}
//                 onChange={(e, color) => setColor(color)}
//                 indicatorColor="primary"      
//               >
//                 <Tab label="Home" onClick={()=>navigate('/hotel_list')}></Tab>
//                 <Tab label="About Us"></Tab>
//                 <Tab label="Contact us"></Tab>
//               </Tabs>
//               <Button sx={{ marginLeft: "Auto", color:'white'}} onClick={()=>navigate('/login')}>Sign In</Button>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// }
// export default Header;



// -----------------------------------------

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Header() {

  const location = useLocation();

  const hideHeader = location.pathname === "/login" || location.pathname === "/register";


  return (
    <Box sx={{ flexGrow: 1, visibility: hideHeader ? "hidden" : "visible" }}>
      <AppBar
        position="fixed"
        style={{ background: "#0B2447" }}
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


            <NavLink to="/hotel_list">
              <Button sx={{color: "#fff"}}>
                {/* <ApartmentIcon/> */}
                Hotels
                </Button>
            </NavLink>

            <NavLink to="/login">
              <Button sx={{color: "#fff"}}>
                {/* <AccountCircleIcon/> */}
                Login / SignUp
                </Button>
            </NavLink>

            <NavLink to="/swiper">
              <Button sx={{color: "#fff"}}>
                {/* <AccountCircleIcon/> */}
                Profile
                </Button>
            </NavLink>

          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;


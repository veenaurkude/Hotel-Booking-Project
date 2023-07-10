import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Header() {

  const location = useLocation();

  const hideHeader = location.pathname === "/login" || location.pathname === "/register";


  return (
    <Box sx={{ flexGrow: 1, visibility: hideHeader ? "hidden" : "visible" }}>
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


            <NavLink to="/hotel_list">
              <Button sx={{color: "#fff"}}>
                <ApartmentIcon/>
                Hotels
                </Button>
            </NavLink>

            <NavLink to="/login">
              <Button sx={{color: "#fff"}}>
                <AccountCircleIcon/>
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


// ------------------------------------------

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { NavLink } from "react-router-dom";
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';

// function Header() {
//   const [loggedIn, setLoggedIn] = React.useState(false);
//   const [userName, setUserName] = React.useState('');
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleLogin = () => {
//     // Simulating successful login
//     setLoggedIn(true);
//     setUserName(""); // Set the username
//   };

//   const handleLogout = () => {
//     // Simulating successful logout
//     setLoggedIn(false);
//     setUserName('');
//     setAnchorEl(null);
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const renderDropdownMenu = () => {
//     return (
//       <Menu
//         anchorEl={anchorEl}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//         id="menu-appbar"
//         keepMounted
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//       >
//         <MenuItem onClick={handleMenuClose}>
//           <NavLink to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
//             My Profile
//           </NavLink>
//         </MenuItem>
//         <MenuItem onClick={handleLogout}>Logout</MenuItem>
//       </Menu>
//     );
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed" style={{ background: "#333" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <div>
//             <NavLink to="/home">
//               <Button>
//                 <Typography
//                   variant="h6"
//                   component="div"
//                   sx={{ flexGrow: 1, justifyContent: "flex-start", color: "#fff" }}
//                   href="/"
//                 >
//                   StayVista
//                 </Typography>
//               </Button>
//             </NavLink>
//           </div>

//           <div style={{ justifyContent: "flex-end" }}>
//             <NavLink to="/hotel_details">
//               <Button sx={{ color: "#fff" }}>
//                 <ApartmentIcon />
//                 Hotels
//               </Button>
//             </NavLink>

//             {loggedIn ? (
//               <div>
//                 <Button
//                   sx={{ color: "#fff" }}
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleMenuOpen}
//                 >
//                   <AccountCircleIcon />
//                   {userName}
//                 </Button>
//                 {renderDropdownMenu()}
//               </div>
//             ) : (
//               <NavLink to="/login">
//                 <Button sx={{ color: "#fff" }} onClick={handleLogin}>
//                   <AccountCircleIcon />
//                   Login / SignUp
//                 </Button>
//               </NavLink>
//             )}
//           </div>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Header;

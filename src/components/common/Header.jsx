// // import * as React from "react";
// // import AppBar from "@mui/material/AppBar";
// // import Box from "@mui/material/Box";
// // import Toolbar from "@mui/material/Toolbar";
// // import Typography from "@mui/material/Typography";
// // import Button from "@mui/material/Button";
// // import ApartmentIcon from '@mui/icons-material/Apartment';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import { NavLink } from "react-router-dom";

// // function Header() {

// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //       <AppBar
// //         position="fixed"
// //         style={{ background: "#333" }}
// //       >
// //         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
// //           {/* <IconButton
// //             size="large"
// //             edge="start"
// //             color="inherit"
// //             aria-label="menu"
// //             sx={{ mr: 2 }}
// //           > */}
// //           {/* <MenuIcon /> */}
// //           {/* </IconButton> */}

// //           <div>
// //             <NavLink to="/home">
// //               <Button>
// //                 <Typography
// //                   variant="h6"
// //                   component="div"
// //                     sx={{ flexGrow: 1, justifyContent: "flex-start", color: "#fff" }}
// //                   href="/"
// //                 >
// //                   StayVista
// //                 </Typography>
// //               </Button>
// //             </NavLink>
// //           </div>

// //           <div style={{ justifyContent: "flex-end" }}>

// //             <NavLink to="/hotel_list">
// //               <Button sx={{color: "#fff"}}>
// //                 <ApartmentIcon/>
// //                 Hotels
// //                 </Button>
// //             </NavLink>

// //             <NavLink to="/login">
// //               <Button sx={{color: "#fff"}}>
// //                 <AccountCircleIcon/>
// //                 Login / SignUp
// //                 </Button>
// //             </NavLink>

// //             <NavLink to="/profile">
// //               <Button sx={{color: "#fff"}}>
// //                 {/* <AccountCircleIcon/> */}
// //                 Profile
// //                 </Button>
// //             </NavLink>

// //           </div>
// //         </Toolbar>
// //       </AppBar>
// //     </Box>
// //   );
// // }

// // export default Header;

// // ------------------------------------------

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import { NavLink } from 'react-router-dom';

// const drawerWidth = 240;
// const navItems = ['Home', 'Contact us', 'Sign in']
// function Header(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         StaySafe
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           // <NavLink to={item.path} key={index}>
//           //   <div>{item.icon}</div>
//           //   <div>{item.text}</div>
//           // </NavLink>

//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar sx={{backgroundColor:'#333'}}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             StaySafe
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </Box>
//   );
// }

// Header.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Header;

// ----------------------------------------------------------------

import {
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useState } from "react";
import DrawerComp from "./DrawerComp";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const [color, setColor] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <>
      <AppBar sx={{ backgroundColor: "rgb(247, 147, 41)", height:'3rem', display:'flex', justifyContent:'center'}}>
        <Toolbar>
          <ApartmentIcon />
          <Typography>StaySafe</Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                textColor="hsl(240, 1%, 48%)"
                value={color}
                onChange={(e, color) => setColor(color)}
                indicatorColor="primary"      
              >
                <Tab label="Home" onClick={()=>navigate('/hotel_list')}></Tab>
                <Tab label="About Us"></Tab>
                <Tab label="Contact us"></Tab>
              </Tabs>
              <Button sx={{ marginLeft: "Auto", color:'white'}} onClick={()=>navigate('/login')}>Sign In</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;

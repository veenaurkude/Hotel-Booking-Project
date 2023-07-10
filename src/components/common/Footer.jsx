import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { useNavigate, useLocation } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Footer() {
  const navigate = useNavigate();


  const location = useLocation();

  const hideFooter = location.pathname === "/login" || location.pathname === "/register";

  const About = () => {
    navigate("/about");
  };
  

  return (
    <Box sx={{ flexGrow: 1, padding: "2rem", background: "#000", display: hideFooter ? "none" : "visible" }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
          {/* <Item>Email subscribe section</Item> */}
          <Typography variant="h6" component="div" sx={{ color: "#fff" }}>
            StayVista
          </Typography>
          <br />
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "#fff", textAlign: "justify", paddingRight: "4rem" }}
          >
            Discover a wide selection of hotels worldwide with easy booking,
            real-time availability, dedicated 24/7 customer support, competitive
            rates, and a personalized travel experience.
          </Typography>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: "14px", textTransform: "uppercase", color: "#000" }}
              >
                Top Destinations
              </Box>
              <Box
                component="ul"
                aria-labelledby="category-a"
                sx={{ pl: 2, listStyleType: "none", textAlign: "left" }}
              >
                <li>
                  <Link href="" underline="hover">Hotels in Mumbai</Link>
                </li>
                <li>
                  <Link href="" underline="hover">Hotels in Pune</Link>
                </li>
                <li>
                  <Link href="" underline="hover">Hotels in Dubai</Link>
                </li>
                <li>
                  <Link href="" underline="hover">Hotels in Bali</Link>
                </li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: "14px", textTransform: "uppercase", color: "#000" }}
              >
                Top Hotels
              </Box>
              <Box
                component="ul"
                aria-labelledby="category-b"
                sx={{ pl: 2, listStyleType: "none", textAlign: "left" }}
              >
                <li>
                  <Link href="" underline="hover">Radisson Blu Hotel</Link>
                </li>
                <li>
                  <Link href="" underline="hover">JW Marriott Hotel</Link>
                </li>
                <li>
                  <Link href="" underline="hover">Armani Hotel</Link>
                </li>
                <li>
                  <Link href="" underline="hover">Bulgari Resort</Link>
                </li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-c"
                sx={{ fontSize: "14px", textTransform: "uppercase", color: "#000" }}
              >
                Support & Help
              </Box>
              <Box
                component="ul"
                aria-labelledby="category-c"
                sx={{ pl: 2, listStyleType: "none", textAlign: "left" }}
              >
                <li>
                  <Link href="" underline="hover">Your Bookings</Link>
                </li>
                <li>
                  <Link href="" underline="hover">Contact Us</Link>
                </li>
                <li>
                  <Link href="" underline="hover">FAQ's</Link>
                </li>
                <li>
                  <Link href="" underline="hover">Privacy Policy</Link>
                </li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-d"
                sx={{ fontSize: "14px", textTransform: "uppercase", color: "#000"}}
              >
                Other Information
              </Box>
              <Box
                component="ul"
                aria-labelledby="category-d"
                sx={{ pl: 2, listStyleType: "none", textAlign: "left" }}
              >
                <li>
                  <Link href="" onClick={About} underline="hover">
                    {"About"}
                  </Link>
                </li>
                <li>
                  <Link href="" underline="hover">Blog</Link>
                </li>
                <li>
                  <Link href="" underline="hover">Careers</Link>
                </li>
                <li>
                  <Link href="" underline="hover">Travel Guides</Link>
                </li>
                
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            {/* <Item>© Copyright 2023, All Rights Reserved.</Item> */}
            <Typography variant="caption" style={{ color: "#fff" }}>
              © Copyright 2023, All Rights Reserved.
            </Typography>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              {/* <Item> */}
              <a href="" style={{ color: "#fff" }}>
                <InstagramIcon />
              </a>
              {/* </Item> */}
              {/* <InstagramIcon/> */}
            </Grid>
            <Grid>
              {/* <Item><WhatsAppIcon/></Item> */}
              <a href="" style={{ color: "#fff" }}>
                <WhatsAppIcon />
              </a>
            </Grid>
            <Grid>
              {/* <Item><TwitterIcon/></Item> */}
              <a href="" style={{ color: "#fff" }}>
                <TwitterIcon />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;

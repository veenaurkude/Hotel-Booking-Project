import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import Date from "../../components/Date";
import { styled, alpha } from "@mui/material/styles"; //alpha
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import bgImg from "../../assets/images/bgImg.jpg";
import CardAction from "../../components/Cards";
import DialogBox from "../../components/DialogBox";

import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: "#fdfdfd",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Home() {
  const navigate = useNavigate();

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        // setCardData(data);
        // console.log(data);
        const displayedData = data.slice(0, 4); // Change the slice range to display 4 or 5 objects
        setCardData(displayedData);
      })
      .catch((error) => console.log(error));
  }, []);

  const navigateToHotels = () => {
    // Handle navigation logic here
    // Example:
    navigate("/hotels");
  };

  return (
    <>
      <div className="home-wrapper">
        <div className="background-image">
          <img src={bgImg} alt="Hotel" />
          <div className="image-text">Hotel</div>
        </div>
        <div className="content">
          <Search style={{ width: "100%" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for Location..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/* <br /> */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyItems: "center",
              }}
            >
              <Date />
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <DialogBox />
            </div>
          </div>

          <br />
          <Button variant="contained" sx={{backgroundColor:"#0B2447", 
          '&:hover': {
                backgroundColor: '#19376D', },
              }}
            
          onClick={()=>navigate('/hotel_list')}>
            Search
          </Button>
        </div>

        <div className="Card_Wrapper">
          {cardData.map((card) => (
            <CardAction className="Card" image={card.url} title={card.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;


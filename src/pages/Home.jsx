import React from "react";
import "./Home.css";
import Date from "../components/Date";
import { styled } from "@mui/material/styles"; //alpha
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
// import hotel from "../assets/images/hotel.jpg";
import insert from "../assets/images/insert.jpg";
import CardAction from "../components/Cards";
import DialogBox from "../components/DialogBox";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
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
  return (
    <>
      <div className="home-wrapper">
        <div className="background-image">
          <img src={insert} alt="" />
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
          <br />
          <div style={{display: "flex", gap: "1rem"}}>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyItems: "center",
              }}
            >
              <Date />
            </div>
            <div style={{ marginTop: "0.5rem"}}>
              <DialogBox />
            </div>
          </div>

          <br />
          <Button variant="contained" color="success">
            Search
          </Button>
        </div>
        <div className="Card_Wrapper">
          <CardAction className="Card" />
          <CardAction className="Card" />
          <CardAction className="Card" />
          <CardAction className="Card" />
        </div>
      </div>
    </>
  );
}

export default Home;


import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PeopleIcon from "@mui/icons-material/People";


import "./DialogBox.css";

import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function DialogBox() {
  const [open, setOpen] = React.useState(false);

  const [rooms, setRooms] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const [selectedRooms, setSelectedRooms] = useState(0);
  const [selectedAdults, setSelectedAdults] = useState(0);
  const [selectedChildren, setSelectedChildren] = useState(0);

  const handleIncRooms = () => {
    setRooms(rooms + 1);
  };

  const handleDecRooms = () => {
    if (rooms > 0) {
      setRooms(rooms - 1);
    }
  };

  const handleIncAdults = () => {
    setAdults(adults + 1);
  };

  const handleDecAdults = () => {
    if (adults > 0) {
      setAdults(adults - 1);
    }
  };

  const handleIncChildren = () => {
    setChildren(children + 1);
  };

  const handleDecChildren = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedRooms(rooms);
    setSelectedAdults(adults);
    setSelectedChildren(children);
  };

  return (
    <div>
      <TextField
        placeholder={
          rooms === 0 && adults === 0 && children === 0 ? "Guests" : ""
        }
        value={
          rooms === 0 && adults === 0 && children === 0
            ? ""
            : `Rooms: ${selectedRooms}, Adults: ${selectedAdults}, Children: ${selectedChildren}`
        }
        onClick={handleClickOpen}
        InputProps={{
          endAdornment: (
            <IconButton>
              <PeopleIcon />
            </IconButton>
          ),
        }}
      />

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Select Guests
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom sx={{display:"flex", gap:"1rem", justifyContent:"space-between"}}>
            Rooms
            <br />
            <button className="btn" onClick={handleDecRooms} disabled={rooms === 0}>-</button>
            {rooms}
            <button className="btn" onClick={handleIncRooms}>+</button>
            
          </Typography>

          <Typography gutterBottom sx={{display:"flex", gap:"1rem", justifyContent:"space-between"}}>
            Adults
            <br />
            <button className="btn" onClick={handleDecAdults} disabled={adults === 0}>-</button>
            {adults}
            <button className="btn" onClick={handleIncAdults}>+</button>
          </Typography>

          <Typography gutterBottom sx={{display:"flex", gap:"1rem", justifyContent:"space-between"}}>
            Children
            <br />
            <button className="btn" onClick={handleDecChildren} disabled={children === 0}>-</button>
            {children}
            <button className="btn" onClick={handleIncChildren}>+</button>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Add
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default DialogBox;



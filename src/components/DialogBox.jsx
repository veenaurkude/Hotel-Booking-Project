import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import PeopleIcon from '@mui/icons-material/People';

import { useState } from 'react';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
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
            position: 'absolute',
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

  const handleIncRooms = () =>{
    setRooms(rooms + 1);
  }

  const handleDecRooms = () =>{
    setRooms(rooms - 1);
  }

  const handleIncAdults = () =>{
    setAdults(adults + 1);
  }

  const handleDecAdults = () =>{
    setAdults(adults - 1);
  }

  const handleIncChildren = () =>{
    setChildren(children + 1);
  }

  const handleDecChildren = () =>{
    setChildren(children - 1);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <TextField placeholder='Guests' onClick={handleClickOpen}
        InputProps={{
          endAdornment: (
            <IconButton>
              <PeopleIcon />
            </IconButton>
          ),
        }}
      />
      
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Guests
      </Button> */}
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Select Guests
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Rooms
          <Button onClick={handleDecRooms}>-</Button>
          {rooms}
          <Button onClick={handleIncRooms}>+</Button>
          </Typography>
          
          <Typography gutterBottom>
          Adults 
          <Button onClick={handleDecAdults}>-</Button>
          {adults}
          <Button onClick={handleIncAdults}>+</Button>
          </Typography>

          <Typography gutterBottom>
            Childern 
            <Button onClick={handleDecChildren}>-</Button>
          {children}
          <Button onClick={handleIncChildren}>+</Button>
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
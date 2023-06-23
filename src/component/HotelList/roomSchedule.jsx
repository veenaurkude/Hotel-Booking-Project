import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DatePickerValue from './basicdate';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Counter from './incrementhotel';




export default function BasicTextFields() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box
      component="form"
      sx={{ m: 2, display:'flex', gap:3, alignItems:'center' , justifyContent:'center'}}>
      <TextField id="outlined-basic" placeholder='Going to' sx={{width:'30ch'}}/>
      <DatePickerValue></DatePickerValue>
      <TextField id="outlined-basic" placeholder='Travellers' sx={{width:'30ch'}} onInput={handleClickOpen}/>
      <Button variant='contained' sx={{padding:'5px 35px'}}>Search</Button>
    </Box>
    <Box>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rooms</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Counter></Counter>
         </DialogContentText>
         <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Room</Button>
        </DialogActions>
      </Dialog>
      </Box>
    </>
  );
}


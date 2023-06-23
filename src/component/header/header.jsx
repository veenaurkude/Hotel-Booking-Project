import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles({
    customClass: {
      backgroundColor: '#008000',
      color: 'white',
      fontSize: '16px',
    },
    hotel_name:{
      background: 'white',
      backgroundSize: 'cover',
      position: 'relative',
      fontSize: 'calc(1.5 * 24px)', // Assuming $extra-large equals 24px
      textTransform: 'uppercase',
      fontFamily: "'Rancho', cursive",
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
      '&::after': {
        '--stroke-width': 'calc(0.05 * 24px)', // Assuming $extra-large equals 24px
        content: 'var(--random-text)',
        position: 'absolute',
        WebkitTextStrokeWidth: 'var(--stroke-width)',
        WebkitTextStrokeColor: 'rgba(0, 0, 0, 0.6)',
        left: '2px',
        top: '2px',
      }
   
    }
  });

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    fontWeight:'bold',
    color:'white',
    borderRadius:'30px',
    padding: '8px 120px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'green',
    borderColor: 'none',
    outlineColor:'none',
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:hover': {
      backgroundColor: '#d9d9d9',
      borderColor: 'none',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });


export default function ButtonAppBar() {
    const classes = useStyles();

    const navigate = useNavigate()

    const SignIn=()=>{
        navigate('/signin')
    }
    const SignUp=()=>{
      navigate('/signup')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.customClass}>
          <Box className={classes.hotel_name} component="div" sx={{ flexGrow: 1,fontSize:'1.5rem', }}>
            Techgicus.Hotels
          </Box>
          <Button color="inherit">Support</Button>
          <Button color="inherit">Trips</Button>
          <Box>
          <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button variant="inherit" {...bindToggle(popupState)}>
          Sign In
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper sx={{width:'50ch', padding:'10px'}}>
                  <Typography variant="h5"  sx={{ p: 2, fontWeight:'bold'}}>Save an average of 15% on thousands of hotels when you're signed in</Typography>
                  <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <BootstrapButton onClick={SignIn}>Sign In</BootstrapButton>
                  </Box>
                  <div onClick={SignUp}>
                  <Typography variant="h6" sx={{color:'#2e2eb8', fontWeight:'bold',display:'flex', justifyContent:'center', padding:'20px', cursor:'pointer'}}>Sign up, it's free</Typography>
                  </div>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>

          </Box>
  
        </Toolbar>
      </AppBar>
    </Box>
  );
}
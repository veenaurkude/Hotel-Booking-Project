import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import MediaCard from '../HotelList/hotelCard';
import ButtonAppBar from '../header/header';
import Sidebar from '../sidebar/sidebar';
import BasicTextFields from '../HotelList/roomSchedule';

const useStyle = makeStyles({
    topbox: {
        display: 'flex',
        position: 'relative',
        marginBottom:'30px',
        left: '15.3vw',
        width: '69.5vw',
        top:'3vh',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topinbox: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        width: '13%'
    },
    txtBook: {
        fontSize: '20px',
        fontWeight: '600'
    },
    subtxt: {
        position: 'relative',
        left: '5px',
        fontSize: '12px',
        fontWeight: '500',
        color: '#9D9D9D'
    },
    dropselect: {
        height: '5vh',
        cursor:'pointer',
        width: '15vw',
        outline: 'none',
        fontSize: '15px',
        color:'#222'
    },
    bookDash: {
        display: 'flex',
        boxSizing: 'border-box',
        position: 'relative',
        left: '210px',
        width: '73vw',
        top: '8vh',
        flexWrap: 'wrap',
    },

    mainContent:{
        display:'flex'
    }
})

function DashboardMain() {
    const classes = useStyle()

   


    return (
        <div>
            <ButtonAppBar/>
            <Box>
                <BasicTextFields></BasicTextFields>
            </Box>
            <Box className={classes.topbox}>
                <Box className={classes.topinbox}>
                    <Box className={classes.txtBook}>
                        Hotels
                    </Box>
                    <Box className={classes.subtxt}>(20 items)</Box>
                </Box>
                <select className={classes.dropselect}>
                    <option value="popularity">Popularity</option>
                    <option value="Guest Ratings">Guest Ratings</option>
                    <option value="Price: Low to High">Price Low to High</option>
                    <option value="Price: High to Low">Price High to Low</option>
                </select>
            </Box>
            <Box className={classes.mainContent}>
             <Sidebar></Sidebar>
             <MediaCard></MediaCard>
            </Box>
        </div>
    )
}

export default DashboardMain;
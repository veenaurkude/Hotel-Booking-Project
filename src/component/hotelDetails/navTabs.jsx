import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
    const navigate = useNavigate()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(event)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="nav" href="/hotelview" />
        <LinkTab label="Rooms" href="/rooms" />
        <LinkTab label="Overview" href="/overview" />
        <LinkTab label="Location" href="/spam" />
        <LinkTab label="Amenities" href="/spam" />
        <LinkTab label="Policies" href="/spam" />
      </Tabs>
    </Box>
  );
}

 
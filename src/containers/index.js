import React, { useState } from 'react';
import {Tab, Box} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { Paper } from '@material-ui/core';
import "../styles/style.css";

export default function InOutContainer(){
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:440, margin:"auto"};
  return (
    <Paper elevation={20} style={paperStyle}>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Sign In" value="1" />
            <Tab label="Sign Up" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><SignIn/></TabPanel>
        <TabPanel value="2"><SignUp/></TabPanel>
      </TabContext>
    </Box>
    </Paper>
  );
}

  

  

 
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import { Avatar, Box, Button, Drawer, makeStyles, Typography } from '@material-ui/core';
import { maxWidth } from '@mui/system';

const drawerWidth =240;
const useStyles = makeStyles((theme) => ({


  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background:'#2a58ad',
    color:'#ecf5fd',
    alignContent:'center'
  },
  tabiconscolor:{
    color:'white'
  }

}));


export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();

  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
          <Box  style={{ justifyContent: "center",
         display: "flex",
         alignItems: "center",
         flexDirection: "column",
         height:'200px',
         marginTop:25,
         
          }}>
        <Avatar  style={{ width: '100px', height: '100px' }}
        alt="Remy Sharp" src="https://assets.website-files.com/58e263f55980e4cd565d9d49/598b2e636031eb000154f32e_Michael_Lopes_1x1-p-800.jpeg" />

        <Typography variant="body1" gutterBottom>
                Devinder kumar
            </Typography>
        <Typography variant="subtitle2" style={{color:'#3497de'}} gutterBottom>
                Chief officer
            </Typography>
        <Button variant="outlined" size='small' style={{ borderRadius:'20px',color:'white',background:'transparent'}}  >
             Update Profile
        </Button>
        </Box>
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      orientation="vertical"
      sx={{}}
      
    >
    
     <Tab sx={{color:'white', marginTop:'20px'}} icon={<LaptopWindowsIcon />} label="DASHBOARD" />
    
     <Tab sx={{color:'white', marginTop:'20px'}} icon={<BackupTableRoundedIcon />} label="JOBS" />
      <Tab sx={{color:'white', marginTop:'20px'}} icon={<TextSnippetOutlinedIcon />} iconPosition="top" label="SEA DOCS" />
      <Tab sx={{color:'white', marginTop:'20px'}} icon={<PeopleAltOutlinedIcon/>} iconPosition="top" label="CONNECTIONS" /> 
    
    </Tabs> 
      </Drawer>
  
  );
}

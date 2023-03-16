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
         marginTop:25,
         
          }}>
        <Avatar  sx={{ width: 100, height: 100 }}
        alt="Remy Sharp" src="https://assets.website-files.com/58e263f55980e4cd565d9d49/598b2e636031eb000154f32e_Michael_Lopes_1x1-p-800.jpeg" />

        <Typography variant="h6" gutterBottom>
                Devinder kumar
            </Typography>
        <Typography variant="body1" gutterBottom>
                Chief officer
            </Typography>
        <Button variant="outlined" sx={ { borderRadius: 28 } }  >
             update profile
        </Button>
        </Box>
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      orientation="vertical"
      
    >
      {/* <Tab className={classes.tabiconscolor} icon={<LaptopWindowsIcon />} label="DASHBOARD" /> */}
     <Tab sx={{color:'white'}} icon={<LaptopWindowsIcon />} label="DASHBOARD" />
    
     <Tab sx={{color:'white'}} icon={<BackupTableRoundedIcon />} label="JOBS" />
      <Tab sx={{color:'white'}} icon={<TextSnippetOutlinedIcon />} iconPosition="top" label="SEA DOCS" />
      <Tab sx={{color:'white'}} icon={<PeopleAltOutlinedIcon/>} iconPosition="top" label="CONNECTIONS" /> 
      </Tabs>        
      
      </Drawer>
  
  );
}

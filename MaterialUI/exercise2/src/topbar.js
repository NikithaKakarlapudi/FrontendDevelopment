import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import ContentPasteGoOutlinedIcon from '@mui/icons-material/ContentPasteGoOutlined';

import { makeStyles } from '@material-ui/core/styles';
import {Tabs,Tab} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  
  tabs: {
    flexGrow: 1,
    marginLeft:'10%',
  },
}));



function TopMenuExm() {
  const classes = useStyles();
    const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{background:'white',color:'grey'}}>
        <Toolbar style={{spacing:"2"}}>
        <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>

        
          <Tabs value={value} onChange={handleChange} className={classes.tabs} aria-label="tabs">
          <Tab label="Blog" />
          <Tab label="Questions" />
          <Tab label="Companies" />
          <Tab label="Contact" />
          </Tabs>

 
        <MenuItem>
           <IconButton
                    size="large"
                    aria-label="display more actions"
                    edge="end"
                    color="inherit">
            
                 <SettingsIcon/>
            </IconButton>
        </MenuItem>
        <MenuItem>
            <IconButton 
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit">
                <Badge badgeContent={4} color="info">
                <MailIcon />
                </Badge>
            </IconButton>
        </MenuItem>
        <MenuItem>
            <IconButton
                    size="large"
                    aria-label="show dot symbol"
                    edge="end"
                    color="inherit">
                < ContentPasteGoOutlinedIcon/>
            </IconButton>
        </MenuItem>


    </Toolbar>
        </AppBar>
     
    </Stack>
  );
  }
  export default TopMenuExm;
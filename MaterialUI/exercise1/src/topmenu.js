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



function appBarLabel(label) {
  return (
    <Toolbar>
        <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>

        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {label}
        </Typography>
        <Typography variant="body1" component="div" sx={   
            { flexGrow: 1 }}>
              Blog
            {/* <Link href="#">new</Link> */}
        </Typography>
        <Typography variant="body1" component="div" sx={   
            { flexGrow: 1 }}>
              Questions
        </Typography>
        <Typography variant="body1" component="div" sx={   
            { flexGrow: 1 }}>
              Companies
        </Typography>
        <Typography variant="body1" component="div" sx={   
            { flexGrow: 1 }}>
              Contacts
        </Typography>
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
                <Badge badgeContent={4} color="error">
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
  
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main:'#fefefe',
    },
  },
});

function TopMenuExm() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('')} 
        </AppBar>
      </ThemeProvider>
     
    </Stack>
  );
  }
  export default TopMenuExm;
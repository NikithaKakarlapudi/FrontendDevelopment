import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Badge from '@mui/material/Badge';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Avatar } from '@mui/material';

function appBarLabel(label) {
  return (
    <Box>
        <AppBar>
            <Toolbar>
                <IconButton edge="start"  aria-label="menu" sx={{ mr: 0 ,background:'#249ff3',borderRadius:0,height:'60px',width:'60px'}} variant='square'>
                    <MenuIcon  />
                </IconButton>
                <IconButton>
                    <SearchIcon/>
                    <Typography>search for any Document or emoloye (wayne enterprice)</Typography>
                    <ErrorOutlineOutlinedIcon/>
                </IconButton>

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                    <IconButton >
                       <ForumOutlinedIcon/>
                    </IconButton>

                    <IconButton
                        size="large"
                        aria-label="show 4 new mails"
                        color="inherit"
                    >
                    <Badge badgeContent={4} color="primary">
                       <NotificationsNoneOutlinedIcon />
                    </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 3 new notifications"
                        color="inherit"
                    >
                    <Badge badgeContent={3} color="primary">
                        <EmailOutlinedIcon />
                    </Badge>
                    </IconButton>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between', marginLeft:20,width:'150px'}} >
                        <Typography>HI,ALEX </Typography>
                        <KeyboardArrowDownOutlinedIcon/>
                        <Avatar alt="ALEX" src="https://i.pinimg.com/originals/fa/7f/c1/fa7fc11c3aae6cf8efbaabc8be50a5da.jpg"></Avatar>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
   
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffff',
    },
  },
});

export default function TopMenu() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel()}
        </AppBar>
      
      </ThemeProvider>
    </Stack>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Badge from '@mui/material/Badge';


function appBarLabel(label) {
  return (
    <Box>
            <Toolbar>
              
                  <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: '70%' ,ml:'200px'}}
                    >
                        <MenuIcon />
                    </IconButton>
              
               
                    {/* <Box style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}> */}
                    <Badge sx={{mr:3}} color="error" variant="dot"  >
                        <NotificationsOutlinedIcon/>
                    </Badge>
                    <Avatar sx={{mr:1}} alt="Remy Sharp" src="https://www.compservice.sk/wp-content/uploads/2017/02/O6D1AA0-300x200.jpg"/>
                    <Typography sx={{mr:2}}>adrian</Typography>
                    <IconButton  color="inherit" aria-label="bell">
                        <KeyboardArrowDownOutlinedIcon/>
                    </IconButton>
                    {/* </Box> */}
                
               

            </Toolbar>
    </Box>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    minHeight:'50%',
    
  },
});

export default function TopBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="">
          {appBarLabel('enableColorOnDark')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}

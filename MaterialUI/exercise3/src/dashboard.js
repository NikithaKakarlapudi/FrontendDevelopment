import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DividerStack from './overview.js';
import Teams from './teams.js';
import TaskData from './tasksdata.js';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Profile from './profile.js';
import CustomizedTimeline from './activitytimeline.js';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import Button from '@mui/material/Button';
import AlarmIcon from '@mui/icons-material/Alarm';
import PausePresentationOutlinedIcon from '@mui/icons-material/PausePresentationOutlined';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';


const drawerWidth = 260;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: -drawerWidth,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    //width: `calc(100% - ${drawerWidth}px)`,
    
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    //marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    if(open)
    {
        setOpen(false);
    }
    else{
        setOpen(true);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{background:'#626b87',color:'white',zIndex:2}}>
        <Toolbar>
        <Typography variant="h6" color="inherit" component="div" sx={{ mr: 10}}>
            tackkle
        </Typography>
        <Typography variant="body1" color="inherit" component="div" sx={{ mr: 10 }}>
            Dashboard
        </Typography>
        <Typography variant="body1" color="inherit" component="div" sx={{ mr: 10 }}>
            Projects
        </Typography>
        <Typography variant="body1" color="inherit" component="div" sx={{ mr: 10 }}>
            Client
        </Typography>
        <Typography variant="body1" color="inherit" component="div"  sx={{ mr: 10 }}>
            Invoice
        </Typography>
        <Typography sx={{flexGrow:5}}>

        </Typography>
        <MenuItem>
                <IconButton
                    
                        size="small"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit">
                    <LocalAtmOutlinedIcon/>
                </IconButton> 
            </MenuItem>
        <MenuItem>
            {/* <Stack direction="row" spacing={2}> */}
            <Button variant="contained" color="secondary" startIcon={<AlarmIcon />}>
            Timer :   2:10 <PausePresentationOutlinedIcon/>
            </Button>
            {/* </Stack>  */}
        </MenuItem>
        <MenuItem>
            <IconButton               
                size="small"
                aria-label="show 4 new mails"
                color="inherit">
                <Badge badgeContent={4} color="info" >
                < NotificationsNoneSharpIcon/> 
                </Badge>
            </IconButton>
        </MenuItem>
        <Typography sx={{flexGrow:2}}></Typography>
        <Profile icon="https://th.bing.com/th/id/OIP.Fpd9zMqEU44M94-V0lv0egHaHa?pid=ImgDet&w=930&h=930&rs=1" name="Hello, Chris"/>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ mr:0 }}
          >
            <KeyboardArrowDownOutlinedIcon />
        </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        {/* <DrawerHeader /> */}
    
        <DividerStack/>
        <Teams/>
        <TaskData/>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
          height:'100vh',
          background:'transparent',
          zIndex:1
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        
          {/* <IconButton onClick={handleDrawerClose}>
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
        
        */}
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="left" padding={2} sx={{background:'#8896b3'}}>
        <Typography variant='subtitle1'sx={{mt:10}} >Recent Activity</Typography>
        <CustomizedTimeline/>
        </Box>
        
      </Drawer>
    </Box>
  );
}
import * as React from 'react';
import jpstory_white from './Assets/storyjpmc_white.PNG';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Header from './header';
import Footer from './footer';
import PropertiesDashboard from './propertiesdashboard';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import CalculateIcon from '@mui/icons-material/Calculate';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewInvoices from './viewinvoices';
import ViewProperties from './viewproperties.js'; 
import RentPay from './rentpay/rentpay.js';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const menuoptions=[
    {
        text:'Home',
        icon:<HomeIcon sx={{color:"#2f2d46",fontWeight:'600'}}/>
    },
    {
        text:'Dashboard',
        icon:<DashboardIcon  sx={{color:"#2f2d46",fontWeight:'600'}}/>
    },
    {
        text:'Users',
        icon:<GroupIcon   sx={{color:"#2f2d46",fontWeight:'600'}}/>
    },
    {
        text:'graph',
        icon:<AutoGraphIcon   sx={{color:"#2f2d46",fontWeight:'600'}}/>
    },
    {
        text:'line',
        icon:< LineAxisIcon   sx={{color:"#2f2d46",fontWeight:'600'}}/>
    },
    {
        text:'calculater',
        icon:<CalculateIcon   sx={{color:"#2f2d46",fontWeight:'600'}}/>
    },
    {
        text:'volunteer',
        icon:< VolunteerActivismIcon   sx={{color:"#2f2d46",fontWeight:'600'}}/>
    },
    {
        text:'dashboard',
        icon:<DashboardIcon   sx={{color:"#2f2d46",fontWeight:'600'}}/>
    },
    {
        text:'apartment',
        icon:<ApartmentIcon   sx={{color:"#2f2d46",fontWeight:'600'}}/>
    },
    {
        text:'file',
        icon:<Inventory2OutlinedIcon   sx={{color:"#2f2d46",fontWeight:'600'}}/>
    },

]

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    if(open)
    {
        setOpen(false);
    }
    else{
        setOpen(true);
    }
    
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{background:'white'}}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 1,
              ...(open),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
        component="img"
        sx={{
          height: 50,
          width: 150,
          maxHeight: { xs: 50, md: 50 },
          maxWidth: { xs: 150, md: 150 },
        }}
        alt="Story by JP Morgan"
        src={jpstory_white}
      />
            <Box
                sx={{
                flexGrow: "3",
                ml: 5,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                
                }}
            >
                <Box sx={{ display: "flex" ,mr:3 }}>
                    <IconButton >
                           <SearchIcon  sx={{mr:2,color:"#2f2d46" }}/>
                    </IconButton> 
                    <IconButton>
                            <Badge color="error" badgeContent=" " variant="dot">
                            <MessageIcon  sx={{mr:2 ,color:"#2f2d46"}}/>
                            </Badge>
                    </IconButton> 
                    <IconButton>
                            <Badge color="error" badgeContent=" " variant="dot">
                            <NotificationsIcon  sx={{mr:2 ,color:"#2f2d46"}}/>
                            </Badge>
                    </IconButton>
                   
                   

                    
                        
                </Box>
                <Box>
                    <Box sx={{ display: "flex", textAlign: "center" }}>
                        <Avatar
                        alt=""
                        src="https://th.bing.com/th/id/OIP.Xuv_hrD_myCLRyPfKX4CGwHaLH?pid=ImgDet&rs=1"
                        sx={{mr:2}}
                        />
                        <Box display="flex">
                            <Typography sx={{ fontWeight: "600" }} color="#2f2d46">
                                jill Buffett
                            </Typography>
                            <ArrowDropDownIcon sx={{ color: "#2f2d46" }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader/>
        <List>
          {menuoptions.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {/* <ViewInvoices/> */}
        {/* <Header/> */}
        {/* <PropertiesDashboard/> */}
        {/* <Footer/> */}
        {/* <ViewProperties/> */}
        <RentPay/>
          
      </Box>
    </Box>
  );
}

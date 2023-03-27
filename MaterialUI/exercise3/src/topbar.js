import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';

import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import ContentPasteGoOutlinedIcon from '@mui/icons-material/ContentPasteGoOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';

import AlarmIcon from '@mui/icons-material/Alarm';
import PausePresentationOutlinedIcon from '@mui/icons-material/PausePresentationOutlined';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import { Drawer } from '@mui/material';
import CustomizedTimeline from './activitytimeline.js';


const useStyles = makeStyles((theme) => ({
appBar: {
    zIndex: theme.zIndex.drawer + 1,
    },
  tabs: {
    flexGrow: 1,
    marginLeft:'10%',
  },
  drawer: {
    width: '20%',
    marginLeft:'5px',
    flexShrink: 0, 
    background:'#626b87',   
  },
  drawerPaper: {
    marginLeft:'5px',
    width: '20%',
    background:'#626b87',


  },
  toolbar: theme.mixins.toolbar,
 
}));



function TopMenuExm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
      
        const handleDrawerOpen = () => {
          setOpen(true);
        };
      
        const handleDrawerClose = () => {
          setOpen(false);
        };

  return (
    <Stack spacing={3} sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.appBar} sx={{background:'#626b87',color:'white'}}>
        <Toolbar style={{spacing:"2"}}>
        <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2 }}>
            tackkle
        </Typography>
        <Typography variant="body1" color="inherit" component="div" sx={{ mr: 2 }}>
            Dashboard
        </Typography>
        <Typography variant="body2" color="inherit" component="div" sx={{ mr: 2 }}>
            projects
        </Typography>
        <Typography variant="body2" color="inherit" component="div" sx={{ mr: 2 }}>
            client
        </Typography>
        <Typography variant="body2" color="inherit" component="div"  sx={{ mr: 2 }}>
            invoice
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

    </Toolbar>
        </AppBar>
        
     
    </Stack>
  );
  }
  export default TopMenuExm;
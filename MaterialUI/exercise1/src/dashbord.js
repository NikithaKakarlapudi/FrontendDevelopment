import React from 'react';
import { makeStyles,styled } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Paper, Grid, IconButton, Tab, Tabs, Card, CardContent, CardActions } from '@material-ui/core';
import { Dashboard as DashboardIcon} from '@material-ui/icons';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TopMenuExm from './topmenu.js';
import CircularButton from './button.js';
import { height, padding } from '@mui/system';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { TabPanelUnstyled } from '@mui/base';

import PropTypes from 'prop-types';
//import { ColorModeContext, tokens } from "../../theme";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
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
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background:'#eaeef2',
    height:1000
  },
  itemlist:{
    height:'50px',
    padding:'5px',
    marginBottom:'10px',
    display:'flex',
    alignItems:'center',
    alignContent:'center'
  }
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Dashboard() {
  const classes = useStyles();
  //const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  //const colorMode = useContext(ColorModeContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    
    <Box className={classes.root} >
      {/* Sidebar */}
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
        


        <Box className={classes.toolbar} />
        <List  >
          <ListItem button className={classes.itemlist}>
            <ListItemIcon ali><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button className={classes.itemlist}>
            <ListItemIcon><ArticleOutlinedIcon/></ListItemIcon>
            <ListItemText primary="JOBS" />
          </ListItem>

          <ListItem button className={classes.itemlist}>
            <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
            <ListItemText primary="SEA DOCS" />
          </ListItem>
          <ListItem button className={classes.itemlist}>
            <ListItemIcon><GroupOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Connections" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" className={classes.content}>
          <Grid container spacing={2}>
            <Grid xs={12}>
            <TopMenuExm/>
            </Grid>

            {/* <Grid xs={12}>
              <Box display="flex" justifyContent="space-between" p={2} flexDirection="column">
                <Box display="flex">
                  <Typography variant='h5'>Header</Typography>
                  <Typography variant='subtitle2'>Sub title</Typography>
                </Box>
                <Box display="flex">
                  
                <IconButton >
                    <DarkModeOutlinedIcon />
                  
                </IconButton>
                <IconButton>
                  <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                  <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                  <PersonOutlinedIcon />
                </IconButton>
                </Box>
              </Box>              
            </Grid> */}

            <Grid xs={12}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{mt:'100px'}}>
    <Tab label="Description" {...a11yProps(0)} />
    <Tab label="Insight" {...a11yProps(1)} />
    <Tab label="Applicants" {...a11yProps(2)} />
    <Tab label="Notifications" {...a11yProps(3)} />
  </Tabs>
</Box>
<TabPanel value={value} index={0}>
<Card sx={{ minWidth: 500, p:2,m:5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Sample text
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</TabPanel>
<TabPanel value={value} index={1}>
  Item Two
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel>
<TabPanel value={value} index={3}>
  Item Three
</TabPanel>
            </Grid>
          </Grid>
      </Box>

    </Box>
  );
}

export default Dashboard;

import React from 'react';
import { makeStyles,styled } from '@material-ui/core/styles';
import {  Box, Paper, Grid, Tab, Tabs, Card, CardContent, CardActions, CardMedia } from '@material-ui/core';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TopMenuExm from './topmenu.js';
import Sidebar from './sidebar.js';

import PropTypes from 'prop-types';
import { red } from '@material-ui/core/colors';
import Jobs from './jobs.js';
import FacebookShare from './sharefacebook.js';
import JobContent from './jobcontent.js';
import MiddleOne from './middleone.js';
import { color } from '@mui/system';

//import { ColorModeContext, tokens } from "../../theme";




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    //padding: theme.spacing(3),
    background:'#eaeef2',
    //background:'red',
    height:'100%'
  },
  container: {
    height: "100vh",
  
  },
  vertical: {
    background:'white'
  },
  horizontal: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 4fr",
  },
  component1: {
    margin : 15,
    background:'blue',
    
  },
  component2: {
    margin : 15,
    background:'green'
  },
  contenttabs:{
    marginLeft: 20,
    marginRight:20
  },
  layout:{
    padding:5,
    
  }

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
      <Sidebar/>
      
      {/* Main content */}
      <Box component="main" className={classes.content}>
      <TopMenuExm/>
          <Grid container spacing={2} >
            <Grid item xs={12} >
            
            <MiddleOne/>
            </Grid>

            
            <Grid item xs={12} className={classes.contenttabs}>
            <Box sx={{ borderBottom: 1,
               borderColor: 'divider'
               }}>
            <Box >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{my:'3',mx:'3' }} indicatorColor="primary"  textColor="primary">
              <Tab label="Description"  {...a11yProps(0)} />
              <Tab label="Insight" {...a11yProps(1)} />
              <Tab label="Applicants" {...a11yProps(2)} />
              <Tab label="Notifications" {...a11yProps(3)} />
            </Tabs>
           </Box>
            
          </Box>
          <TabPanel value={value} index={0}>
            <Box className={classes.layout}>
            <Layout />
            </Box>
          
          </TabPanel>
          <TabPanel value={value} index={1}>

          </TabPanel>
          <TabPanel value={value} index={2}>
                
          </TabPanel>
          <TabPanel value={value} index={3}>
            
          </TabPanel>
            </Grid>
          </Grid>
      </Box>

    </Box>
  );
}


function Layout() {

   return (

    <Box margin={3} >
      <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Card sx={{height:'700px'}}>
            <JobContent/>
        </Card>
      </Grid>
      <Grid item container xs={12} md={4} spacing={2}>
        <Grid item xs={12}>
        <Card >
            <FacebookShare/>
        </Card>
        </Grid>
        <Grid item xs={12}>
        <Card >
            <Jobs/>
        </Card>
        </Grid>
      </Grid>
    </Grid>
      </Box>  
  //   <Grid container className={classes.container}>
  //     <Grid item xs={8} className={classes.vertical}>
  //       <JobContent/>
  //     </Grid>
  //     <Grid item xs={4} className={classes.horizontal}>
  //       <Grid item className={classes.component1} >
  //         <FacebookShare/>
  //       </Grid>
  //       <Grid item className={classes.component2}>
  //         <Jobs/>
  //       </Grid>
  //     </Grid>
  //   </Grid>
  );
}

export default Dashboard;

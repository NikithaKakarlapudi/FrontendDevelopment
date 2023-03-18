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
  },
  container: {
    height: "100vh",
    margin:10
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
    margin : 15
    
  },
  component2: {
    margin : 15
  },

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
      <Sidebar/>

      {/* Main content */}
      <Box component="main" className={classes.content}>
          <Grid container spacing={2}>
            <Grid xs={12}>
            <TopMenuExm/>
            <MiddleOne/>
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
            <Box sx={{ borderBottom: 1,
               borderColor: 'divider'
               
               
               }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{mt:'100px', }} indicatorColor="primary"  textColor="primary">
    <Tab label="Description"  {...a11yProps(0)} />
    <Tab label="Insight" {...a11yProps(1)} />
    <Tab label="Applicants" {...a11yProps(2)} />
    <Tab label="Notifications" {...a11yProps(3)} />
  </Tabs>
</Box>
<TabPanel value={value} index={0}>
<Layout/>
</TabPanel>
<TabPanel value={value} index={1}>
<Card sx={{ minWidth: 500, p:2,m:5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          job Description
        </Typography>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>master</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               <td>Ship type</td>
               <td>Chemical Tanker</td>
            </tr>
          </tbody>
        </table>
        {/* <Typography variant="h5" component="div">
          Rank                        master
        </Typography>
        <Divider />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Divider />
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
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
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={8} className={classes.vertical}>
        <JobContent/>
      </Grid>
      <Grid item xs={4} className={classes.horizontal}>
        <Grid item className={classes.component1} >
          <FacebookShare/>
        </Grid>
        <Grid item className={classes.component2}>
          <Jobs/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;

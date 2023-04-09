import { Box, Typography, Grid, CardContent } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import TaskData from "./dashboardtask.js";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RecentTask from './recenttask.js';
import OutstandingBalance from './outstandingbalance.js';
import ExpiringLeanses from './expiringleases.js';
import BarChartWithLegend from "./barcharts.js";
import Properties from './properties.js';
import Payments from './payments.js';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RevenueChangeTab from './revenuechangetads.js';
import { Height } from "@material-ui/icons";

import PropTypes from 'prop-types';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
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

export default function Dashboard() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box  >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h4">Dashboard</Typography>
          <Typography variant="body1">
            Wellcome to #1 property management platform
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ bgcolor: "#ffffff", color: "black" }}
          startIcon={<CalendarMonthOutlinedIcon />}
        >
          Jan 2019-Des 2019
          <ExpandMoreOutlinedIcon />
        </Button>
      </Box>
      <Box sx={{ mt: 5 }}>
        {/* <TaskData/> */}

        <Grid container spacing={2} >
          <Grid item container spacing={2}  sx={{}}>
            <Grid item xs={12} sm={6} md={8}  >
              <Item>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                  <Box>                  
                    <Typography variant="h6" color="#071436" fontWeight="600"> Property Revenue Overview</Typography>
                    <Typography variant="body2">Show overview Jan2019 - Dec 2019</Typography>
                  </Box>
                  <CardContent sx={{bgcolor:'#ebecf6', color:'#4d55b7',height:'50px'}}>
                       <Button  size="small" startIcon={<CloudDownloadOutlinedIcon/>}>
                        Download Report
                       </Button>
                  </CardContent>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',  borderBottom: 1, borderColor: 'divider' }}>
                     <Box >
                     <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                      <Tab label="Overview" {...a11yProps(0)} />
                      <Tab label="Leasing" {...a11yProps(1)} />
                      <Tab  label="Conversion" {...a11yProps(2)}  />
                    </Tabs>
                      </Box>
                      <Box sx={{ minWidth:'200px',display:'flex', justifyContent:'space-between'}}>
                          <Typography color="#aeb8ca">Week</Typography>
                          <Typography color="#041839">Month</Typography>
                          <Typography color="#aeb8ca">Year</Typography>
                      </Box>
                </Box>
                <Box>
                <TabPanel value={value} index={0}>
                <Box display='flex'>
                  <BarChartWithLegend/>
                  <RevenueChangeTab/>
                </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  
                </TabPanel>
                <TabPanel value={value} index={2}>
                  
                </TabPanel>
                </Box>
                
                

              </Item>
            </Grid>
            <Grid item container spacing={2} direction='column' xs={12} sm={6} md={4} sx={{}}>
              <Grid item><Item>
                <Properties/>
                </Item></Grid>
              <Grid item><Item>
                   <Payments/>
              </Item></Grid>
            </Grid>
          </Grid>
          <Grid item container spacing={2}  sx={{}}>
            <Grid item xs={12} md={4} lg={4}>
              <Item>
                <RecentTask/>
              </Item>
              
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Item>
                <ExpiringLeanses/>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Item>
              <OutstandingBalance/>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

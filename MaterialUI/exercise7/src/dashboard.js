import { Box, Typography, Grid } from "@mui/material";
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


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <Box  >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ alignItems: "flex-start" }}>
          <Typography variant="h5">Dashboard</Typography>
          <Typography variant="body2">
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
      <Box sx={{ mt: 10 }}>
        {/* <TaskData/> */}

        <Grid container spacing={2} >
          <Grid item container spacing={2}  sx={{}}>
            <Grid item xs={12} sm={6} md={8}  >
              <Item>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                  <Box>                  
                    <Typography variant="h6"> Property Revenue Overview</Typography>
                  <Typography variant="body2">Show overview Jan2019 - Dec 2019</Typography>
                  </Box>
                    <Button>Download Report</Button>
                </Box>
                <BarChartWithLegend/>
              </Item>
            </Grid>
            <Grid item container spacing={2} direction='column' xs={12} sm={6} md={4} sx={{}}>
              <Grid item><Item>Properties</Item></Grid>
              <Grid item><Item>Payments
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

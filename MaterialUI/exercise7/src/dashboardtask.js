import { Box, Grid } from '@mui/material';
import * as React from 'react';
import RecentTask from './recenttask.js';
import OutstandingBalance from './outstandingbalance.js';
import ExpiringLeanses from './expiringleases.js';





export default function TaskData(){
return(
     <Box sx={{width:'100%', margin:'20px',padding:'50px'}}>

        <Grid container spacing={1}>

            <Grid item xs={4} sx={{bgcolor:' pink'}}>
                      <RecentTask/>
                
            </Grid>

            <Grid item xs={4} sx={{bgcolor:'red'}}>
                      <ExpiringLeanses/> 
            </Grid>

            <Grid item xs={4} sx={{bgcolor:'blue'}}>
                      <OutstandingBalance/>  
            </Grid>


        </Grid>


    </Box>
);
}
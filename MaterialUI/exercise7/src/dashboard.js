import { Box, Typography } from "@mui/material";
import React from "react";
import { Button } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

export default function Dashboard(){
    return(
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Box sx={{alignItems:'flex-start'}}>
              <Typography variant="h5">Dashboard</Typography>
              <Typography variant="body2">Wellcome to #1 property management platform</Typography>
            </Box>
            <Button variant="contained"  sx={{bgcolor:"#ffffff", color:"black"}} startIcon={< CalendarMonthOutlinedIcon />}>
                 Jan 2019-Des 2019
               <ExpandMoreOutlinedIcon />  
             </Button> 
           
               
        </Box>
    );
}
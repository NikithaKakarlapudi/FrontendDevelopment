import React from "react";
import Box from '@mui/material/Box';
import  Typography from "@mui/material/Typography";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

export default function Header(){
    return(
        <Box sx={{background:'#2f2d46',color:'white'}}>
            <Box display='flex' justifyContent='space-between' sx={{padding:5}}>
            <Box>
                <Typography variant="h6">Property Management Dashboard</Typography>
                <Typography variant="subtitle1">A smarter way to manage your properties</Typography>
            </Box>
            <Box display='flex' justifyContent='space-around'>
                <ElectricBoltIcon/>
                <Typography variant="body1">QUICK ACTIONS</Typography>
            </Box>
        </Box>
        </Box>
        
    )
}
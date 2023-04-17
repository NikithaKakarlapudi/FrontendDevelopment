import React from "react";
import Box from '@mui/material/Box';
import  Typography from "@mui/material/Typography";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function ViewInvoicesHeader(){
    return(
        <Box sx={{background:'#2f2d46',color:'white',padding:5}}>
            <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                <IconButton sx={{textAlign:'left'}}>
                <ChevronLeftIcon sx={{color:'white'}}/>
                </IconButton>
                <Typography>Dashboard</Typography>
            </Box>           
            <Typography variant="h6">Invoices</Typography>
        </Box>
        
    )
}
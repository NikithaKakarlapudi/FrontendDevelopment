import { Card } from "@material-ui/core";
import { CardContent } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import CustomBoxHeader from "./boxheader.js";
import HalfMoonChart from './halfpiechart.js';




export default function ExpiringLeanses(){
    return(
        <Box sx={{  minHeight:'300px'}}>            
            <CustomBoxHeader title="Expiring Leanses"  subtitle='See details'/>
            <Box> 
                 <HalfMoonChart/>
            </Box>     
        </Box>

    );
}
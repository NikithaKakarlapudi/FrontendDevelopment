import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Card, CardContent, CardHeader, IconButton } from '@material-ui/core';
import { Grid } from "@mui/material";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Documentlist from './document.js';
import  PrevNextButtons from './pagination.js';


export default function DocumentContent() {
  return (
    <Box>
        <Grid container direction="row" alignItems="center" marginTop={4}>
        <Grid item>
            <FolderOpenIcon/>
        </Grid>
        <Grid item>
            8/12
        </Grid>
        </Grid>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box > 
            <Typography>OPEN DOCUMENTS</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' alignItems='center'> 
            <Typography>
                ALL DOCUMENTS
                <ArrowDropDownIcon/>
            </Typography>
        </Box>
         

        </Box>
        <Box marginTop={4} >
            <Documentlist/>
        </Box>
        <Box>
            < PrevNextButtons/>
        </Box>
    </Box>
  );
}

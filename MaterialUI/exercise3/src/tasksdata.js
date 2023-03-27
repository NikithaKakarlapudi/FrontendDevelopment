import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography, Icon, Paper } from '@material-ui/core';
import { Stack } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Contact from './contact.js';
import Billing from './billing.js';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import JobType from './jobtype.js';
import DonutChart from './piechart.js'
import CustomBoxHeader from './boxheader.js';



export default function TaskData(){
   return (
        <Box sx={{width:'80%', margin:'30px',padding:'00px'}}>
            <Grid container  spacing={1}>
                <Grid item xs={4}>
                    <DonutChart/>
                </Grid>
                <Grid item xs={4}>
                
                
                    <ClientStatus/> 
                
                </Grid>
               
                <Grid item xs={4}>
                   <LoggedHours/>
                </Grid>
            </Grid>
        </Box>
    )
};

function ClientStatus(){
    return(
        <Box sx={{height:400,background:'white',padding:2}}>
            <CustomBoxHeader title="Client Stats : " subtitle='All days'/>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                        <TableCell>
                            <Contact name="Lyn Emps" />
                        </TableCell>
                        <TableCell>
                            <Billing bill="4750.00" icon={<CheckCircleOutlineIcon/>}/>
                        </TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>
                            <Contact name="Some Company"/>
                        </TableCell>
                        <TableCell>
                        <Billing bill="2155.00" icon={<ErrorOutlineIcon  color="warning"/>}/>
                        
                            
                        </TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>
                            <Contact name="Nike"/>
                        </TableCell>
                        <TableCell>
                        <Billing bill="9000.00" icon={<ErrorOutlineIcon  color="warning"/>}/>
                        </TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>
                            <Contact name="Zonda LTD"/>
                        </TableCell>
                        <TableCell>
                        <Billing bill="662.00" icon={<CheckCircleOutlineIcon   color="info"/>}/>
                        </TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>
                            <Contact name="Balkan Brothers"/>
                        </TableCell>
                        <TableCell>
                        <Billing bill="55.00" icon={<CheckCircleOutlineIcon   color="info"/>}/>
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        
    )
}

function LoggedHours(){
    return(
        
            
        <Box sx={{height:400,background:'white',padding:2}}>
            <CustomBoxHeader title="Logged Hours : " subtitle='This Week'/>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                    <JobType name="Design:project mana....."/>
                            </TableCell>
                            <TableCell>
                                <Typography>01h:45m</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                               <JobType name="copywriting:Nike....."/>
                            </TableCell>
                            <TableCell>
                            <Typography>06h:23m</Typography>
                            </TableCell>
                        </TableRow>
                       <TableRow>
                            <TableCell>
                            <JobType name="Design:project mana....."/>
                            </TableCell>
                            <TableCell>
                            <Typography>01h:30m</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <JobType name="Design:project mana....."/>
                            </TableCell>
                            <TableCell>
                            <Typography>00h:23m</Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{background:"#909ebb",height:50,display:"flex", alignItems:'center'}}>
            <Grid container >
               <Grid item xs={6}>
               <Typography>Total</Typography>

                </Grid > 
                <Grid item xs={6} >

                <Typography>21:55:14</Typography>
                </Grid > 
               

            </Grid>
            </Box>
        </Box>
    )
}
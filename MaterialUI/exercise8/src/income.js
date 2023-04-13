import { Divider, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import PieChartWithCenterText from './piechart';



export default function Income(){
    return(
            <Box>
                <Box textAlign="left">
                    <Typography color='#2f2d46'>Income</Typography>
                <Typography>All properties and Tenants |february 2020</Typography>
                </Box>
                <Box display='flex' justifyContent='space-evenly' alignItems='center'>
                    <Box>
                    <Box>
                        <Box display='flex' alignItems='center'>
                            <Typography variant='h5'>$</Typography>
                            <Typography variant='h4' color='#2f2d46' > 12,000</Typography>
                        </Box>

                        <Typography>Total expected</Typography>
                    </Box>
                    <Box>
                        <Box display='flex' alignItems='center'>
                            <Typography   variant='h5'>$</Typography>
                             <Typography variant='h4' color='#2f2d46'>6,000</Typography>
                        </Box>
                        
                        <Box display='flex' alignItems='center'>
                            <FiberManualRecordIcon sx={{fontSize:'small', color:'#5d8bb9'}}/>
                           <Typography>Paid</Typography>
                        </Box>
                    </Box>
                    </Box>
                    <Box>
                    <Box>
                        <Box display='flex' alignItems='center'>
                            <Typography  variant='h5'>$</Typography>
                             <Typography variant='h4' color='#2f2d46'>4,000</Typography>
                        </Box>
                        
                        <Box display='flex'alignItems='center'>
                            <FiberManualRecordIcon sx={{fontSize:'small', color:'#d57d00'}}/>
                           <Typography>Due</Typography>
                        </Box>

                    </Box>
                    <Box>
                        <Box display='flex' alignItems='center'>
                              <Typography variant='h5' >$</Typography>
                              <Typography variant='h4' sx={{color:' #ba482e'}}>2,000</Typography>
                              <ReportProblemIcon sx={{ color:'#ba482e'}}/>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <FiberManualRecordIcon sx={{fontSize:'small', color:'#ba482e'}}/>
                           <Typography>Paid Due</Typography>
                        </Box>
                    
                    </Box>
                    </Box>
                    <Box minWidth={200}>
                        <PieChartWithCenterText/>
                    </Box>
                </Box>





                <Box sx={{display:'flex', ml:'-172px',mt:'30px', justifyContent:'space-evenly'}}>
                    
                    
                </Box>
                <Box sx={{display:'flex', ml:'-172px',mt:'30px', justifyContent:'space-evenly'}}>
                    

                    
                </Box>


                <Divider sx={{ mt:'10px'}}/>

        
                        <Box  sx={{textAlign:'end',mt:'10px'}}>
                            <Typography  color='#5b5397'>VIEW INVOICES</Typography>
                        
                        </Box>
                






            </Box>
    );
}
import { Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';

import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';



export default function BalanceTransfers(){
    return(
            <Box sx={{ml:'15px'}}>
                <Box sx={{display:'flex',justifyContent:'space-between' }}>
                    <Typography  color='#2f2d46'>Balance transfers</Typography>
                       <ErrorOutlineOutlinedIcon />
                </Box>

                <Box sx={{mt:12}}>
                    <Box display='flex' mt='25px' alignItems='center'>
                        <Typography variant='h5'>$</Typography>
                        <Typography variant='h4' color='#2f2d46'>4,000</Typography>
                    </Box>
                    <Box>
                       <Typography variant='subtitle2' textAlign="left">Last settlement:Feb. 1, 2020| 12 a.m.</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box display='flex' mt='25px' alignItems='center'>
                        <Typography variant='h5'>$</Typography>
                        <Typography variant='h4' color='#2f2d46'>6,000</Typography>
                    </Box>
                    <Box>
                       <Typography variant='subtitle2' textAlign="left">Net balance</Typography>
                    </Box>
                </Box>
            </Box>
    );
}
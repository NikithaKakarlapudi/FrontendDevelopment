import * as React from 'react';
import Box from '@mui/material/Box';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Avatar from '@mui/material/Avatar';


export default function CourtTransation() {
  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
         <Box style={{display:'flex', spacing:'9'}}>
            <Box sx={{ width:'210px',display:'flex' ,justifyContent:'space-around',alignItems:'center'}}>

                <FiberManualRecordOutlinedIcon sx={{fontSize:'large',  color: '#75d585'}}/>
                <Typography>24 paid transactions</Typography>
            </Box>
            <Box sx={{ width:'230px',display:'flex',justifyContent:'space-around',alignItems:'center'}}>

                <FiberManualRecordOutlinedIcon sx={{fontSize:'large', color: '#fec366'}}/>
                <Typography>13 unpaid transactions</Typography>
            </Box>
            <Box sx={{width:'230px',display:'flex',justifyContent:'space-around',alignItems:'center'}}>

                 <CloseOutlinedIcon sx={{fontSize:'large', color: '#eb6b6b'}}/>
                <Typography>2 cancelled transactions</Typography>
            </Box>
        </Box>

        <Box display='flex' justifyContent='space-between' sx={{width:'100px'}}>
             <Avatar sx={{ bgcolor: '#5ec5f6' }} variant="square">
                 <SimCardDownloadOutlinedIcon/>
              </Avatar>
              <Avatar sx={{ bgcolor: '#fa6765'}} variant="rounded">
                <DeleteOutlineOutlinedIcon/>
              </Avatar>
         </Box>
      
    </Box>
  );
}
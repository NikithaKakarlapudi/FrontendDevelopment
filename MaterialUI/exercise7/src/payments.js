import * as React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Typography,Box, Button, CardActions} from "@mui/material";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Divider from '@mui/material/Divider';
import CleanHandsIcon from '@mui/icons-material/CleanHands';




 export default function Payments(){
    return(
        <Box>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Typography color="#071436" fontWeight="600">Last 30 Days</Typography>
                   <MoreHorizIcon />
            </Box>
            <Box sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center',my:2}}>
                <Box>
                    <Typography   variant="h5" color="#32b27b">$36,840</Typography>
                    <Typography   variant="subtitle1" color="#64779b">Paid invoices</Typography>
                </Box>

                <Divider orientation="vertical" variant="middle" flexItem  />

                <Box>
                    <Typography   variant="h5" color="#ff4c55">$8,420</Typography>
                    <Typography   variant="subtitle1" color="#64779b">Open invoices</Typography>
                </Box>
            </Box>

            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <CardActions sx={{bgcolor:'#ebecf6', color:'#4d55b7'}}>
                <Button startIcon={<CleanHandsIcon/>}>
                        Receive Payments
                </Button>
                </CardActions>
                <Box display='flex' alignItems='center'>
                    <Typography variant="subtitles1" color="#4d55b7">View all</Typography>
                    <ChevronRightOutlinedIcon/>
                </Box>
            </Box>
        </Box>

    );
}
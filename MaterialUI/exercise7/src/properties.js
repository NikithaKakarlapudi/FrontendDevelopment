import { Typography,Box, Card, CardContent } from "@mui/material";
import * as React from "react";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

export default function Properties(){
    return(
          <Card sx={{ Width:'30px', height:'100px'}}>
               <CardContent>
               <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <HomeWorkOutlinedIcon fontSize="large"/>
                    <Box>
                        <Typography>hello</Typography>
                        <Typography>hello</Typography>
                    </Box>
                    <Box>
                        <Typography>hello</Typography>
                        <ChevronRightOutlinedIcon/>
                    </Box>
                </Box>

               </CardContent>
          </Card>
                
                

          
    );
}
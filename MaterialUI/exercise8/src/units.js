import { Divider, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';



export default function Units(){
    return(
            <Box>
                
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography color='#2f2d46'>Units</Typography>
                    <Box display="flex" color='#5b5397'variant="bady2">
                         <AddOutlinedIcon />
                        <Typography>ADD UNIT</Typography>
                    </Box>
                </Box>

                <Box sx={{display:'flex' , alignItems:'center'}}>
                        <Typography  variant='h4' color='#2f2d46' sx={{textAlign:'left' ,flexGrow:1}}>7</Typography>
                    <Box> 
                        <Box display='flex' sx={{color:"#ba482e",alignItems:'center'}}>
                            <Typography variant='h5' color="#ba482e">1</Typography>
                            <ReportProblemIcon/>
                        </Box>
                            <Typography>Vacant</Typography>
                    </Box>
                    <Box ml="30px">
                        <Typography  variant='h5' color='#2f2d46'>6</Typography>
                        <Typography>Occupied</Typography>
                    </Box>
                </Box>
                <Divider sx={{mt:2}}/>


                <Box textAlign="left" sx={{mt:2}}>
                      <Typography color='#2f2d46'>Recently Viewed</Typography>
                </Box>

                <Box sx={{display:"flex" ,alignItems:'center',ml:'5px',gap:1}}>
                <Avatar sx={{bgcolor:'#828190'}}>
                     <MeetingRoomIcon/>
                </Avatar>
                    <Box textAlign='start'>
                        <Typography color='#5b5397'>101|Arrowgrove</Typography>
                        <Typography>Expires: August 1, 2020 </Typography>
                    </Box>
                </Box>

                <Box sx={{display:"flex" ,alignItems:'center',ml:'5px',gap:1}}> 
                    <Avatar sx={{bgcolor:'#828190'}}>
                     <MeetingRoomIcon/>
                    </Avatar>
                    <Box textAlign='start'>
                        <Typography color='#5b5397'>102|Arrowgrove</Typography>
                        <Typography>Expires: January 1, 2021 </Typography>
                    </Box>
                </Box>

                <Box sx={{display:"flex" ,alignItems:'center',gap:1}}> 
                    <Avatar sx={{bgcolor:'#828190'}}>
                      <MeetingRoomIcon/>
                    </Avatar>
                    <Box ml="5px" textAlign='start'>
                        <Typography color='#5b5397'>105|Arrowgrove</Typography>
                        <Typography> Expires: N/A</Typography>
                    </Box>
                    <Box display="flex" ml="120px" textAlign="center">
                         <ReportProblemIcon sx={{color:"#ba482e"}}/>
                        <Typography>Vacant</Typography>
                    </Box>
                </Box>

                <Divider/>

                <Box  sx={{textAlign:'end', mt:'5px'}}>
                <Typography  color='#5b5397'>VIEW UNITS</Typography>
                </Box>



            </Box>
    );
}
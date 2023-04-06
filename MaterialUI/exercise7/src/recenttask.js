import {Avatar, Divider, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import  CustomBoxHeader from './boxheader.js';



export default function RecentTask(){
    return(
         
            <Box sx={{minHeight:'300px'}}>
                   <CustomBoxHeader title="Recent Task "  subtitle='sell all tasks'/>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs  aria-label="basic tabs example">
                        <Tab label="Incoming Requests"></Tab>
                        <Tab label="Assigned to me"></Tab>
                            
                </Tabs>
                </Box>

                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Typography variant='body1'> Hole in Bedroom scren at 150 ma....</Typography>
                        <Typography variant='subtitle2' color="#7283a3">1d ago</Typography>
                </Box>
                <Box sx={{display:"flex"}}>
               
                <CardActions>
                    <Button size="small" sx={{bgcolor:'#eaf7f2', color:'#54be91'}}>New</Button>
                    </CardActions>
                    <CardActions>
                    <Button size="small"  sx={{color:'#4850b2', bgcolor:'#ebecf6'}}>Resident Request</Button>
                 </CardActions>

                </Box>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Avatar alt= 'anji' src='https://th.bing.com/th/id/OIP.BCkpODXjwF-xvWchOxI8gQHaE8?pid=ImgDet&rs=1' />
                    <Typography>Robert Friedmen</Typography>
                </Box>
                <Divider/>

                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography variant='body1'>Finding a new tenant at 3 industria......</Typography>
                    <Typography variant='subtitle2' color="#7283a3" >2d ago</Typography>
                </Box>
                <Box sx={{display:"flex"}}>
                    <CardActions>
                        <Button size="small" sx={{bgcolor:'#eaf7f2', color:'#54be91'}}>New</Button>
                        </CardActions>
                        <CardActions>
                        <Button size="small"  sx={{color:'#ff8528', bgcolor:'#fff2e9'}}>Rental owner request</Button>
                    </CardActions>
                </Box>

             </Box>

    
           

        
            
        
    );
}
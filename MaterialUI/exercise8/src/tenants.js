import { Divider, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


export default function Tenants(){
    return(
        <Box>

           <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography color='#2f2d46'>Tenants</Typography>
                <Box display="flex" color='#5b5397'variant="bady2" >
                    <AddOutlinedIcon/>
                    <Typography >INVITE TENANT</Typography>
                </Box>
            </Box>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant='h4' color='#2f2d46'>15</Typography>
                <Box>
                    <Box display="flex">
                        <Typography  variant='h5' color="#ba482e">4</Typography>
                        <ReportProblemIcon sx={{color:"#ba482e"}}/>
                    </Box>
                        <Typography color="#8d8c9a" variant='subtitles2'>Late</Typography>
                </Box>
            </Box>
            <Divider sx={{mt:2}}/>
            <Box textAlign="left" sx={{mt:2}}>
                <Typography color='#2f2d46'>Recently Viewed</Typography>
            </Box>
            <Box sx={{display:"flex" ,alignItems:'center',ml:'5px',gap:1}}>
                <Avatar alt="" src="https://th.bing.com/th/id/OIP.OOh0PWJjoab-C0l3WQs4ugHaLL?pid=ImgDet&rs=1" />

                <Box sx={{display:"flex"}}>
                    <Box textAlign='start'>
                        <Typography color='#5b5397'> Logan Howlett</Typography>
                        <Typography> 102|Arrowgrove</Typography>
                    </Box>
                    <Box display="flex" ml="180px" textAlign="center">
                         <ReportProblemIcon sx={{color:"#ba482e"}}/>
                        <Typography>Late</Typography>
                    </Box>
                </Box>
                


            </Box>
            <Box sx={{display:"flex" ,alignItems:'center',ml:'5px',gap:1}}> 
               <Avatar sx={{bgcolor:'#6b63a1'}}>DF</Avatar>
                <Box textAlign='start'>
                    <Typography color='#5b5397'>Dylan</Typography>
                    <Typography> 101|Arrowgrove</Typography>
            
                </Box>
            </Box>

            <Box sx={{display:"flex" ,alignItems:'center',gap:1}}> 
                <Avatar alt="" src="https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d" />
                <Box ml="5px" textAlign='start'>
                     <Typography color='#5b5397'>Duane Crawford</Typography>
                    <Typography> 103|Arrowgrove</Typography>
                </Box>
            </Box>

            <Divider/>

            <Box  sx={{textAlign:'end', mt:'5px'}}>
               <Typography  color='#5b5397'>VIEW INVOICES</Typography>
            </Box>


        </Box>
    );
}
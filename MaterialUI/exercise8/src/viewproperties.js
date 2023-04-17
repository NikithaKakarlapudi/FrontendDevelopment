import React from "react";
import Box from '@mui/material/Box';
import  Typography from "@mui/material/Typography";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Avatar from '@mui/material/Avatar';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import Overview from './viewpropertiesoverview.js';



export default function ViewProperties(){
    return(
        <Box>
        <Box sx={{background:'#2f2d46',color:'white',padding:5}}>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                    <IconButton sx={{textAlign:'left'}}>
                    <ChevronLeftIcon sx={{color:'white'}}/>
                    </IconButton>
                    <Typography>PROPERTIES</Typography>
                </Box> 

                <Box sx={{display:"flex" ,alignItems:'center'}}>
                    <TextSnippetOutlinedIcon sx={{mr:2,fontSize:'40px'}}/>
                    <Typography variant="body1" fontWeight="500px">NOTES (0)</Typography>
                    < MoreVertOutlinedIcon sx={{ml:2,fontSize:'30px'}}/>
                </Box>         
            </Box>

            <Box display='flex' mt='20px'>
                <Box>
                    <Avatar
                        alt=""
                        src="https://mikevantassell.com/wp-content/uploads/2018/12/mike-vantassell-harborside-plaza-10-jersey-city-exterior-422-800x1000.jpg"
                        sx={{mr:3,width:80,height:80}}
                    />
                </Box>
                <Box>
                    <Box display='flex' alignItems="center">
                        <Typography variant="h5">Arrowgrove</Typography>
                        < ArrowDropDownOutlinedIcon/>
                    </Box>
                    <Box sx={{display:'flex',mt:2,alignItems:'center'}}>
                        <WarningAmberOutlinedIcon sx={{mr:1,color:'red'}}/>
                        <Typography variant="h6" fontWeight="500px">4 total issues</Typography>
                    </Box>
                    <Box>
                    <Typography>past due (3), vacant (1)</Typography>
                    </Box>

                    
                </Box>

             </Box>           
             
        </Box>
        <Box>
            <Overview/>
        </Box>
        </Box>
    )
}
import * as React from 'react';
import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Avatar from '@mui/material/Avatar';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


export default function Properties(){
    return(
        <Box>
                
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography color='#2f2d46'>Properties</Typography>
                <Box display="flex" color='#5b5397'variant="bady2">
                    <AddOutlinedIcon />
                    <Typography>ADD Properties</Typography>
                </Box>
            </Box>

            <Box sx={{display:'flex' , alignItems:'center'}}>
                <Typography  variant='h4' color='#2f2d46' sx={{textAlign:'left' ,flexGrow:1}}>2</Typography>
                <Box> 
                    <Box display='flex' sx={{color:"#ba482e",alignItems:'center'}}>
                        <Typography variant='h5' color="#ba482e">4</Typography>
                        <ReportProblemIcon/>
                    </Box>
                        <Typography>issues</Typography>
                </Box>
                <Box ml="30px">
                    <Typography  variant='h5' color='#2f2d46'>6</Typography>
                    <Typography>Tasks</Typography>
                </Box>
            </Box>

        <Divider sx={{mt:2}}/>

        <Box sx={{display:'flex' ,alignItems:'center',mt:2}}>
                <Typography  color='#2f2d46' sx={{textAlign:'left' ,flexGrow:1}}>Recently Viewed</Typography>
            <Box> 
                <Box display='flex' sx={{alignItems:'center'}}>
                    <Typography>Issues</Typography>
                    
                </Box>
            </Box>
            <Box ml="30px">
                 <Typography>Tasks</Typography>
            </Box>
        </Box>

         
        <Box sx={{display:'flex' , alignItems:'center',mt:2}}>
              
            <Box ml="5px" sx={{ display:'flex', textAlign:'left' ,flexGrow:1,gap:1}}>
                <Avatar alt="" src="https://th.bing.com/th/id/R.8014731bbd5a6b57fa772fccb8653038?rik=%2fp%2bNCzs5UuBaug&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f01%2fbuilding-wallpaper.jpeg&ehk=Y6e8DJu5l31WDk1f5XrN%2biuqOrXdC%2fZvh7MMWsbzOc0%3d&risl=&pid=ImgRaw&r=0" />
                <Box>
                    <Typography color='#5b5397'>Arrowgrove</Typography>
                    <Typography>Multifamily:6</Typography>
                </Box>

            </Box>
            
            <Box> 
                <Box display='flex' sx={{color:"#ba482e",alignItems:'center',gap:1}}>
                        

                        <Typography variant='h5' color="#ba482e">4</Typography>
                        <ReportProblemIcon/>
                    </Box>
                </Box>
                <Box ml="45px">
                    <Typography variant='h5' color='#2f2d46'>4</Typography>
                
                </Box>
            </Box>
        



            <Box sx={{display:'flex' , alignItems:'center',mt:1}}>
              
                <Box ml="5px" sx={{ display:'flex', textAlign:'left' ,flexGrow:1,gap:1}}>
                    <Avatar alt="" src="https://i.redd.it/dbygfug4he741.jpg" />
                    <Box>
                        <Typography color='#5b5397'>BirchWood</Typography>
                        <Typography>Single family</Typography>
                    </Box>
    
                </Box>
                
                <Box> 
                    <Box display='flex' sx={{alignItems:'center'}}>
                        <Typography variant='h5' color='#2f2d46'>0</Typography>
                    </Box>
                </Box>
                <Box ml="45px">
                    <Typography variant='h5' color='#2f2d46'>2</Typography>
                </Box>
            </Box>
  
               <Divider sx={{mt:2}}/>

            <Box  sx={{textAlign:'end', mt:'5px'}}>
                <Typography  color='#5b5397'>VIEW PROPERTIES</Typography>
            </Box>
     

    </Box>
    );
}
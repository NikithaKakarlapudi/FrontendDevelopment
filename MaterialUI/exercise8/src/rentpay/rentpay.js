import * as React from 'react';
import RentPayHeader from './rentpayheader.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RentPatTenantDetails from './rentpaytenants.js';
import Divider from '@mui/material/Divider';
import bottomimage from '../Assets/rentpaybottomimg.PNG';
import RentPayTimeLine from './rentpaytimeline.js';


export default function RentPay(){
    return(
         <Box sx={{background:'#f7f6f5'}} >
            <Box sx={{height:'150px' , width:'100%', background:'#2f2d46'}} >
                
            </Box>
            <Box  display={"flex" } sx={{mt:'-130px',width:'100%' ,zIndex:7,position:'fixed'}}>
            <Box sx={{height:300 , width:'25%',background:'#fff',marginX:5}} >
                <Box padding={2}>
                    <Typography variant='h5' >Getting started with RentPay</Typography>
                    <Box justifyContent="flex-start">
                           <RentPayTimeLine/>
                    </Box>

                </Box>
                <Divider/>
                <Box sx={{width:'100%'}} component='img'
                alt="designer image"
                src={bottomimage}/>

            </Box>
            <Box sx={{width:'65%',background:'transparent'}} >
                <RentPayHeader/>
                <RentPatTenantDetails/>
            </Box>
            </Box>




                  {/* <RentPayHeader/>
                  <Box display="flex">
                  <Box sx={{minHeight:'200px',bgcolor:'red',width:'30%',bottom:'30px',zIndex:1011}}>
                      
                    </Box>
                     <Box sx={{bgcolor:'',width:'70%'}}>
                         <RentPatTenantDetails/>
                    </Box>
    
                  </Box> */}

         </Box>
    );
}
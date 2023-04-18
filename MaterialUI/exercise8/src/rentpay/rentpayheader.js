import { Box, Typography } from "@mui/material";
import React from "react";
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

import Avatar from '@mui/material/Avatar';



export default function RentPayHeader(){
    return(
        <Box mb={3}>
            <Box sx={{display:'flex',justifyContent:'flex-end',pr:10,gap:3}}>
                <Box  sx={{display:"flex",color:'white'}}>
                    <SaveIcon/>
                     <Typography ml={1}>Save & EXIT </Typography>
                </Box>
                <Box sx={{display:"flex",color:'white'}}>
                    <ClearIcon/>
                    <Typography ml={1}>CANCEL</Typography>
                </Box>

            </Box>
            <Box sx={{display:"flex",alignItems:'center'}}>
                <Box>
                    <Avatar
                        alt=""
                        src="https://mikevantassell.com/wp-content/uploads/2018/12/mike-vantassell-harborside-plaza-10-jersey-city-exterior-422-800x1000.jpg"
                        sx={{mr:3,width:80,height:80}}
                     />
                </Box>
                <Box sx={{textAlign:'left'}}>
                     <Typography variant="h5" color={'white'}>Set Up Brichwoods</Typography>
                     <Typography variant="body2" color='lightgray'>456 Broadway Ave.San Mateo,CA 94401</Typography>
                </Box>
            </Box>
        </Box>

    );
}
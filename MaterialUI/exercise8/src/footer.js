import React from "react";
import Box from '@mui/material/Box';
import jpstory_blue from './Assets/storyjpmc_blue.PNG'
import { Divider, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Footer(){
    return(
        <Box bgcolor="#2f2d46" color='white' padding='20px'>
            <Box>
                <Box sx={{display:'flex',justifyContent:'space-between' ,alignItems:'center'}}>
                   <Typography >Questions? Contact us,</Typography>
                   <Box
        component="img"
        sx={{
          height: 50,
          width: 150,
          maxHeight: { xs: 50, md: 50 },
          maxWidth: { xs: 150, md: 150 },
        }}
        alt="Story by JP Morgan"
        src={jpstory_blue}
      />
                </Box>
                <Box sx={{display:'flex' }}>
                    <Box display='flex'>
                        <LocalPhoneOutlinedIcon/>
                        <Typography>+1877 344 3080</Typography>
                    </Box>
                    <Box display='flex' ml='30px'>
                        <EmailOutlinedIcon/>
                        <Typography>Story.Support@jpmorgan.com</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider sx={{mt:'25px',bgcolor:'grey'}}/>

            <Box sx={{mt:'20px', display:'flex',gap:3}}>
                <Box>
                    <Typography variant="h6">J.P. Morgan Sites</Typography>
                    <Box display='flex' justifyContent='space-around' sx={{gap:3}}>
                        <Box>
                        <Typography>JPMorgan Chase & co.</Typography>
                        <Typography>J.p.Morgan</Typography>
                        </Box>
                        <Box>
                        <Typography>Chase</Typography>
                        <Typography>J.p.Morgan CRE</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box >
                    <Typography variant="h6">Legal</Typography>
                    <Box display='flex' justifyContent='space-around' sx={{gap:3}} >
                        <Box>
                            <Typography>Privacy & Security</Typography>
                            <Typography>Terms of Use</Typography>
                        </Box>
                        <Box>
                            <Typography>Regulatory Disclosures</Typography>
                            <Typography>Cookie policy</Typography>
                        </Box>
                        <Box>
                            <Typography>Data Privacy Protocol</Typography>
                            <Typography>Accessibility</Typography>
                        </Box>
                    </Box>
                </Box>
               
             </Box>
             <Divider sx={{mt:'25px',bgcolor:'grey'}}/>

             <Box sx={{mt:'20px'}}>
                <Box>
                    <Typography>2020 JPMorgan chase $ co. All rights reserved. "JPMorgan Chase." the JPMorgan Chase logo,"Story, and "story by J.P.Morgan" are trademarks of JPMorgan chase Bank, N.A.JPMorgan chase Bank, N.A. is a Wholly-owned subsidiary of JPMorgan Chase & co.</Typography>
                    
                </Box>

             </Box>
        </Box>
    )
}
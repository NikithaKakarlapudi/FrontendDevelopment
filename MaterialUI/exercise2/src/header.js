import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from '@mui/material/Button';
import { borderRadius } from '@mui/system';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';

export default function MiddleOne() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#eaeef2'  }}>
      <Box sx={{ my:3, mx: 3 }}>
        <Grid container alignItems="center">
          <Grid item xs={9}>
            <Typography gutterBottom variant="h6" component="div">
              Connections
            </Typography>
            <Typography color="text.secondary" variant="body2">
            Meet your collegues, make new connections
          </Typography> 
          </Grid>
         

           </Grid>
         
      </Box>
     
    </Box>
  );
}

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
    <Box sx={{ width: '100%', maxWidth: 1000, bgcolor: '#eaeef2'  }}>
      <Box sx={{ my:1, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography gutterBottom variant="h6" component="div">
              Master
            </Typography>
          </Grid>
          <Grid item xs={4}>
             <Button variant="contained" startIcon={<FiberManualRecordSharpIcon style={{color: 'green'}}/>} size="small" sx={{margin:'5px', borderRadius:'20px',color:'grey',background:'white'}} >
               active
             </Button>

              <Fab size="small" color="#fff" aria-label="add" sx={{margin:'5px 10px',backgroundColor:'white'}}>
              < RefreshIcon/>
              </Fab>

              <Fab size="small"  color="#fff" aria-label="edit" sx={{margin:'5px 10px',backgroundColor:'white'}}>
                < BorderColorTwoToneIcon/>
              </Fab>

              <Fab size="small"  color="#fff" aria-label="edit" sx={{margin:'5px 8px',backgroundColor:'white'}}> 
                <DeleteOutlineOutlinedIcon/>
              </Fab> 
            </Grid>

           </Grid>
         <Typography color="text.secondary" variant="body2">
            Chemical Tanker
          </Typography> 
      </Box>
     
    </Box>
  );
}

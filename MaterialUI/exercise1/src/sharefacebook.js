import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  maxWidth: 400,
  color: theme.palette.text.primary,
}));


export default function FacebookShare() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden'}}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          
        }}
      >
        <Grid container wrap="nowrap" spacing={2} sx={{padding:'5px',marginLeft:'5px'}}>
          <Grid item>
          <Avatar alt="facebook" src="https://1000logos.net/wp-content/uploads/2016/11/fb-logo.jpg" />
          </Grid>
          <Grid item marginTop={1}> 
            <Typography>Share on Facebook</Typography>
            
          </Grid>
        </Grid>
      </StyledPaper>
     </Box>
  );
}

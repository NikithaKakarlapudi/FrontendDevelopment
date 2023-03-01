import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { alignProperty } from '@mui/material/styles/cssUtils';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

 function BasicGrid() {
  return (
    <div>
      <div>
        <h2>Basic grids with multiple breakpoints</h2>
    <Box sx={{ flexGrow: 1,
         backgroundColor: 'primary.dark',
         textAlign:'center',
     }} >
      <Grid container spacing={2} sx={{padding:5}}>
        <Grid item xs={4}>
          <Item>Grid 1</Item>
        </Grid>
        <Grid item xs={4} >
          <Item>Grid 2</Item>
        </Grid>
        <Grid item xs={8} md={8}>
          <Item>Grid 3</Item>
        </Grid>
        <Grid item xs={8} md={8}>
          <Item>Grid 4</Item>
        </Grid>
      </Grid>
      </Box>
      <br/>
    <Box sx={{ width: '1000' }}>
    <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:3}}>
        <Grid item xs={6}>
            <Item>one</Item>
        </Grid>
        <Grid item xs={8}>
           <Item>two</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>three</Item>
        </Grid>
    </Grid>
    </Box>
  </div>
  <br/>
      <div >
        <AutoGridNoWrapExm/>
      </div>
    </div>
    
  );
}

const message = `The Material Design responsive layout grid adapts to screen size and orientation,
ensuring consistency across layouts.`;


 function AutoGridNoWrapExm() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>M</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>M</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>M</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
    
  );
}

export default BasicGrid;
import { Box, Grid, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import makeStyles from '@mui/material/styles/makeStyles';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';

export default function JobContent() {
  return (
    <Box>
      <BasicTable/>
    </Box>




    // <Box sx={{color:'white'}}>
    //     <Typography variant='h4' marginBottom="10px">Job Description</Typography>
    //     <Grid container spacing={2} sx={{margin:'5px'}}>
    //     <Grid item xs={4}>
    //         <Grid container direction="column" spacing={2}>
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Rank</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Ship Type</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Min.Experrience</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>US Visa</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Approx joining</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Salary</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Ship Details</Typography>
    //                 <Typography variant='subtitle2'>     </Typography>
    //                 <Typography variant='subtitle2'>    </Typography>
    //                 </Grid>
                  
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Description</Typography>
    //                 </Grid>
    //         </Grid>
    //     </Grid>
    //    <Grid item xs={8}>
    //        <Grid container direction="column" spacing={2}>
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Master</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Chemical Tanker</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>06 Months</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Required</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>20 September 2016</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>5000 USD</Typography>
    //                 </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>Chembulk gibriater<br/>20000 DWT<br/>2010 Built</Typography>
    //                  </Grid>
    //                 <Divider />
    //                 <Grid item>
    //                 <Typography variant='subtitle2'>donec egestas vitae mi et feugiat.Quisque urna mi,vestibuium sit amet congue quits,imprediet quis dui,pellentesque rhoncus,justo et sollicitudin feugiat ante urna fringile nisl,eu laoreet leo leo in velit.ante urna fringilla nisl,eu laoreet leo leo in velit</Typography>
    //                 </Grid>
                    
                   
    //             </Grid>
    //      </Grid>
    //     </Grid>
    
    // </Box>
    
  );
}

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('Rank', 'Master'),
  createData('Ship type', 'Chemical Tanker'),
  createData('Min.Experience', '06 Months'),
  createData('US Visa', 'Required'),
  createData('Apporx.joining','20 September 2016'),
  createData('Salary', '5000 USD'),
  createData('Ship Details','Chembulk gibrlater\n 20000 DWT\n 2010 Built'),
  createData('Description','Donec egestas vitae mi et feugiat.Quisque urna mi,vestibuium sit amet congue quits,imprediet quis dui,pellentesque rhoncus,justo et sollicitudin feugiat ante urna fringile nisl,eu laoreet leo leo in velit.ante urna fringilla nisl,eu laoreet leo leo in velit'),
];

function MultiLineBreak({ value }) {
  const chapters = value.split("\n");

  return (
    <List>
      {chapters.map((chapter, i) => (
        <ListItem key={i}>{chapter}</ListItem>
      ))}
    </List>
  );
}

function BasicTable() {
  //const classes = useStyles();
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}
                
                {/* <MultiLineBreak value={row.calories}/> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
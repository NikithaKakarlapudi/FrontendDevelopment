import { Box, Grid, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';

export default function JobContent() {
  return (
    <Box sx={{color:'white',padding:5}}>
        <Typography variant='h4'>Job Description</Typography>
        <Grid container spacing={2} >
        <Grid item xs={4}>
            <Grid container direction="column" spacing={2}>
                    <Grid item>
                    <Typography variant='subtitle2'>Rank</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>Ship Type</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>Min.Experrience</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>US Visa</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>Approx joining</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>Salary</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>Ship Details</Typography>
                    <Typography variant='subtitle2'>     </Typography>
                    <Typography variant='subtitle2'>    </Typography>
                    </Grid>
                  
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>Description</Typography>
                    </Grid>
            </Grid>
        </Grid>
       <Grid item xs={8}>
           <Grid container direction="column" spacing={2}>
                    <Grid item>
                    <Typography variant='subtitle2'>Master</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>Chemical Tanker</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>06 Months</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>Required</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>20 September 2016</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>5000 USD</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>Chembulk gibriater<br/>20000 DWT<br/>2010 Built</Typography>
                     </Grid>
                    <Divider />
                    <Grid item>
                    <Typography variant='subtitle2'>donec egestas vitae mi et feugiat.Quisque urna mi,vestibuium sit amet congue quits,imprediet quis dui,pellentesque rhoncus,justo et sollicitudin feugiat ante urna fringile nisl,eu laoreet leo leo in velit.ante urna fringilla nisl,eu laoreet leo leo in velit</Typography>
                    </Grid>
                    
                   
                </Grid>
         </Grid>
        </Grid>
    
    </Box>
    
  );
}
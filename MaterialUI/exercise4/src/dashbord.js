import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CenteredCard from './welcomecomponent.js';
import Buttons from './documentcomponent';



export default function DashBord() {
    return (

    <Box sx={{}}>
    <Grid container spacing={0} sx={{marginTop:'60px'}}>
        <Grid item xs={4}>
          <Box sx={{height:'100vh',background:"#fafafa",padding:3}}>
            <CenteredCard/>
          </Box>
        </Grid>
        <Grid item xs={8}>

        <Box sx={{height:'100vh',background:"#f1f1f3"}}>
            <Buttons/>
        </Box>

    
        </Grid>
    </Grid>
    
     </Box>
    
    );
}
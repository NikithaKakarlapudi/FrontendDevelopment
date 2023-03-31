import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Box from '@mui/material/Box';
import {makeStyles} from '@material-ui/core';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    height:60,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  iconbutton:{
    size:'20px',
    color:'white',
    width:'10px'

  }
}));

function PrevNextButtons() {
  const classes = useStyles();

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' my={5}>
        <Box display='flex' width="400px" justifyContent="space-between">
            <Button className={classes.button}  sx={{ gap: '10px' }}>
                <ArrowBack />
                <Typography>
                    Previous
                </Typography>
            </Button>
            <Button  className={classes.button} variant="contained" color="info" sx={{ gap: '70px' }}>
               <Typography>Next</Typography>
                  <ArrowForward />
           </Button>
        </Box>
        <Box>
            <IconButton sx={{ gap: '8px' }}>
                <Box sx={{ border: '1px solid white',width:'30px',background:'white' }}>
                   <ChevronLeftIcon />
                </Box>
                <Typography color="black">Previous</Typography>
            </IconButton>

            <IconButton className={classes.button} sx={{ gap: '8px' }}>
                <Typography color="black">Next</Typography>
                <Box sx={{ border: '1px solid white',width:'30px',background:'white' }}>
                    <ChevronRightIcon />
                </Box>
            </IconButton>
        </Box>
        <Box>
            <Button variant='contained' sx={{background:"white" ,color:"black",gap:'8px'}}>
                Enter
            </Button>
            <Button sx={{color:'black'}}>
            
                Confirm
             </Button>
        </Box>
    </Box>
    
  );
}

export default PrevNextButtons;

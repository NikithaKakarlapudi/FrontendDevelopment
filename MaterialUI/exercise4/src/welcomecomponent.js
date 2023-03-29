import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
const useStyles = makeStyles({
  card: {
    textAlign: "left",
    color:'black',
    background:'transparent',
    padding:'50px'
  },
  header: {
    marginTop: 30,
  },
  text: {
    marginTop: 30,
    marginBottom:30
  },

});

export default function CenteredCard() {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
         <Typography className={classes.header} variant="h3">
           Welcome back to
           <br/>
           your Dashboard
           <br/>
            Alex
        </Typography>
        <Typography className={classes.text} variant="body1">

         We recommended you complete <u>certificates of </u>
        <br/>
         <u>Employment</u> and upload <u> New Registration</u>to
         <br/>
          system form last week.
          
        </Typography>
        <CircularProgressWithLabel value={5} />
    </Box>
  );
}

function CircularProgressWithLabel(props) {
    return (
    <Box display='flex' alignItems='center'>
        <Box>
           <Typography variant="h6" align="center"> Tasks to do</Typography>
        <Box sx={{ position: 'relative', display: 'inline-flex',marginTop:2 }}>
            <CircularProgress variant="determinate" {...props} size={200} thickness={2} style={{ color: '#249ff3'}}/>
            <CircularProgress
            variant="determinate"
            size={200} thickness={2}
            value={100}
            style={{ color: 'rgba(0, 0, 0, 0.1)', position: 'absolute', top: 0, left: 0 }}
           />
          <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
              <Box>
                <Typography variant="h3" component="div" color="text.secondary">
                  {`${Math.round(props.value)}%`}
                </Typography>
                <Typography variant="body1">1/18</Typography>
              </Box>
          </Box>
        </Box>
        </Box>
        <Box>
          <Box marginLeft={3} padding={1} justifyContent='space-between' alignItems='center'>
            <Typography variant="h6" marginBottom='20px'> Cases</Typography>
            <Box height={200}  >
              <Box display='flex' justifyContent='space-around' alignItems='center'  marginTop={3} >
              <Typography variant="h6"> 12</Typography>
              <Typography marginLeft={1}>Open Document</Typography>
              </Box>
              <Box display='flex' justifyContent='space-around' alignItems='center'  marginTop={5}>
              <Typography variant="h6"> 3</Typography>
              <Typography  marginLeft={1}>New Tickets</Typography>
              </Box>
              <Box display='flex' justifyContent='space-around' alignItems='center'  marginTop={5}>
              <Typography variant="h6"> 3</Typography>
              <Typography marginLeft={1} >New Employees</Typography>
              </Box>
            </Box>
          </Box>   
        </Box>
    </Box>
    );
  }

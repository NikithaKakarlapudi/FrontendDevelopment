import React from 'react';
import { Grid, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

function IconTime({icon,text}) {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item>
        {icon}
      </Grid>
      <Grid item>
        <Typography variant="body1">{text}</Typography>
      </Grid>
      <Grid item>
      {icon}
        {/* <KeyboardArrowDownRoundedIcon/> */}
      </Grid>
    </Grid>
  );
}

export default IconTime;

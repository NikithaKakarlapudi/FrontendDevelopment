import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Stack from '@mui/material/Stack';



function stringAvatar(bill) {
    
  return {
    children: `${"$"+bill}`,
  };

}





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width:15,
    height:15,
    marginRight: theme.spacing(1),
  },
}));


function Billing({ bill,icon }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} >{icon}</Avatar>
      <Typography variant="subtitle2" {...stringAvatar(bill)}></Typography>
    </div>
  );
}

export default Billing;

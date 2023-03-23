import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

function Profile({ icon, name }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} src={icon}></Avatar>
      <Typography variant="h6">{name}</Typography>
    </div>
  );
}

export default Profile;
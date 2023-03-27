import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Stack from '@mui/material/Stack';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringcolor(name)
{
  return "#34efd4";
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringcolor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width:30,
    height:30,
    marginRight: theme.spacing(1),
  },
}));


function JobType({ name }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} {...stringAvatar(name)} ></Avatar>
      <Typography variant="subtitle2">{name}</Typography>
    </div>
  );
}

export default JobType;

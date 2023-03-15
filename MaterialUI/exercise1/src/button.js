import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function CircularButton() {
  const classes = useStyles();

  return (
    <Box>
            <IconButton aria-label="add" className={classes.button}>
                <AddCircleIcon />
                </IconButton>
                <IconButton aria-label="add" className={classes.button}>
                <RefreshTwoToneIcon />
            </IconButton>

    </Box>
   
  );
}

export default CircularButton;

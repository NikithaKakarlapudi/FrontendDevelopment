import React from 'react';
import { Box, Typography, IconButton, makeStyles } from '@material-ui/core';
import { Sort } from '@material-ui/icons';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    // paddingBottom: theme.spacing(1),
  },
  iconscolor:{
    color:'#3f47ae'
  },
  titlecolor:{
    color:'black'
  }
}));

const CustomBoxHeader = ({ title,subtitle }) => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Typography variant="h6" className={classes.titlecolor}>{title}</Typography>
      
      <IconButton aria-label="sort" className={classes.iconscolor} >
      <Typography variant='subtitle2'>{subtitle}</Typography>
        <ChevronRightIcon/>
      </IconButton>
    </Box>
  );
};



export default CustomBoxHeader;

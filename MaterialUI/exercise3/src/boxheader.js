import React from 'react';
import { Box, Typography, IconButton, makeStyles } from '@material-ui/core';
import { Sort } from '@material-ui/icons';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(1),
  },
  iconscolor:{
    color:'#56b7ce'
  },
  titlecolor:{
    color:'#717b8f'
  }
}));

const CustomBoxHeader = ({ title,subtitle }) => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Typography variant="h6" className={classes.titlecolor}>{title}</Typography>
      
      <IconButton aria-label="sort" className={classes.iconscolor} >
      <Typography variant='subtitle2'>{subtitle}</Typography>
        <KeyboardArrowDownOutlinedIcon />
      </IconButton>
    </Box>
  );
};



export default CustomBoxHeader;

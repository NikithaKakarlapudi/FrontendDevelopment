import React from 'react';
import { Grid, Typography, Icon, IconButton,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

function IconTime({icon,text}) {
  const classes = useStyles();

  return (
    <Box>
    <Grid container alignItems="center" >
      <Grid item>
        {icon}
      </Grid>
      <Grid item>
        <Typography variant="body1">{text}</Typography>
      </Grid>
      <Grid item>
        {<IconButton>         
        < KeyboardArrowDownOutlinedIcon/>
        </IconButton>}
      </Grid>
    </Grid>
    </Box>
  );
}

export default IconTime;

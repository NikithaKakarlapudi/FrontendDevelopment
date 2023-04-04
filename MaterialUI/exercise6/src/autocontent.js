import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';

export default function Calender() {
  return (
    <TextField sx={{maxWidth:'250px', marginRight:'50px'}}

      label=""
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <CalendarMonthOutlinedIcon  sx={{color:'#ca8690'}}/>
              <Typography>This Week</Typography>
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

const calender = [
 
];

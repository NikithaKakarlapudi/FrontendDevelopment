import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export default function Calender() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={calender}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField

          {...params}
        
          label="This Week"
          inputProps={{
            ...params.inputProps,
            
            startAdornment:<CalendarMonthOutlinedIcon/>
          }}
        />
      )}
    />
  );
}

const calender = [
 
];

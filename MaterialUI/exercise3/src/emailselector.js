import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const useStyles = makeStyles((theme) => ({
    hideIcon: {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '&[type=number]': {
        '-moz-appearance': 'textfield',
      },
    },
    hideEndAdornment: {
      display: 'none',
    },
  }));

const emails = [
    {email:'filip.justic@gmail.com'},
  { email: 'john.doe@example.com' },
  { email: 'jane.doe@example.com' },
  { email: 'bob.smith@example.com' },
  { email: 'sara.jones@example.com' },
];

const EmailSelector = () => {
  const [selectedEmail, setSelectedEmail] = React.useState(null);
  const classes = useStyles();
  const handleChange = (event, value) => {
    setSelectedEmail(value);
  };

  return (
    <Autocomplete
        sx={{minWidth:'400px'}}
        popupIcon={<SendOutlinedIcon color='primary'/>}
      options={emails}
      getOptionLabel={(option) => option.email}
      value={selectedEmail}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined" 
          InputProps={{
            ...params.InputProps,
            classes: {
              ...params.InputProps.classes,
              input: classes.hideIcon,
              //endAdornment: classes.hideEndAdornment,
            },
          }}
        />
      )}
    />
  );
};

export default EmailSelector;

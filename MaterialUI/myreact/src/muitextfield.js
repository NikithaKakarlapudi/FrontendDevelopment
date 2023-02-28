import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


 function FormpropsTextFields(){
    return(
        <Box
            component = "form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' }, }}
           
            noValidate
            autocomplete="off">
        
            <div>
                <h2>TextField Example</h2>
                <TextField                 
                    required
                    id="outlined-required-misaligned"
                    label="Name"
                    placeholder="Name"
                    color="secondary"
                    focused
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Lastname"
                    defaultvalue="Lastname"
                    color="warning"
                    focused
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                          <AccountCircle />
                          </InputAdornment>
                        ),
                    }}
                />
                <br/>
                <TextField fullWidth
                    sx={{
                    width: '1000',
                    maxWidth: '100%',
                    }}
                    required
                    id="outlined-required"
                    label="Email"
                    defaultvalue="Email"
                    color="secondary"
                    focused
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailIcon/>
                          </InputAdornment>
                        ),
                    }}
                /><br/>
                <TextField fullWidth
                    required
                    id="filled-required"
                    label="Password"
                    defaultvalue="Password"
                    variant="filled"
                    color="success"
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon/>
                          </InputAdornment>
                        ),
                    }}
                />
            
                <TextField
                   error
                   id="filled- error-required"
                   label="confirm-password"
                   defaultvalue="Reenter password"
                   variant="filled"
                   color="info"
                   InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon/>
                      </InputAdornment>
                    ),
                }}
                /><br/>
                <TextField
                    required
                    id="standard-number"
                    label="Number"
                    type="number"
                    color="secondary"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
                <TextField
                   required
                   id="filled-required"
                   label="address"
                   defaultvalue="address"
                   variant="standard"
                   helperText="please provide a valid address"
                   color="secondary"
                />
                <br/>
                <CustomizedInputBaseExm/>
            </div>
        </Box>
    );
 }
 function CustomizedInputBaseExm() {
    return (
    <div>
        <h2>Google map coustomized</h2>
    <Paper
    
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
    </Paper>
    </div>
    );
  }
  
 export default FormpropsTextFields;
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Button, Card, Divider, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';


export default function RentPatTenantDetails() {

    return (
    <Box>
      <Box sx={{textAlign:'left'}}>
           <Typography variant='h5'>Tenants</Typography>
      </Box>
        
      <Box sx={{flexWrap: 'wrap',
                background:'white',
                border:'2px solid whitesmoke',
                padding:2,
                mt:2
            }}>
            <Box sx={{textAlign:'left'}}>
                <Typography variant='h6'>Tenant details</Typography>
            </Box>
            <Box sx={{display:'flex',mt:3}}>

                <FormControl  sx={{ m: 1,width:'90ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">First name (optional)</InputLabel>
                <FilledInput
                  sx={{
                    id:"filled-adornment-amount",
                     border: '1px solid lightgrey',
                    borderRadius: '0px',
                    background: 'white',
                  
                    }}
                     startAdornment={<InputAdornment position="start">Helidi</InputAdornment>}
                 />
                </FormControl>
                <FormControl  sx={{ m: 1,width:'90ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Last name (optional)</InputLabel>
                <FilledInput
                  sx={{
                    id:"filled-adornment-amount",
                     border: '1px solid lightgrey',
                    borderRadius: '0px',
                    background: 'white',
                    
                    }}
                     startAdornment={<InputAdornment position="start" >Williams</InputAdornment>}
                 />
                </FormControl>
            </Box>


            <Box sx={{display:'flex'}}>
            <FormControl  sx={{ m: 1,width:'90ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Email</InputLabel>
                <FilledInput
                  sx={{
                    id:"filled-adornment-amount",
                     border: '1px solid lightgrey',
                    borderRadius: '0px',
                    background: 'white'
                    }}
                     startAdornment={<InputAdornment position="start">heidiwilliams@spark.com</InputAdornment>}
                 />
                </FormControl>
                <FormControl  sx={{ m: 1,width:'90ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">phone number</InputLabel>
                <FilledInput
                  sx={{
                    id:"filled-adornment-amount",
                     border: '1px solid lightgray',
                    borderRadius: '0px',
                    background: 'white'
                    }}
                     startAdornment={<InputAdornment position="start">(650)-100-1000</InputAdornment>}
                 />
                </FormControl>
            </Box>
            <Box>
            <FormControl  fullWidth sx={{ m: 1}} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Notes (optional)</InputLabel>
                <FilledInput
                  sx={{
                    id:"filled-adornment-amount",
                     border: '1px solid lightgray',
                    borderRadius: '0px',
                    background: 'white'
                    }}
                     startAdornment={<InputAdornment position="start"></InputAdornment>}
                 /> 
                </FormControl>
            </Box>
            <Box mt='10px'>
                <FormControl style={{paddingRight:'664px',alignItems:'start'}}>
                    
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'black'}}>Invite tenant to sign up to the tenant portal?</FormLabel>
                    <FormLabel id="demo-row-radio-buttons-group-label">we'll send the invitation to their email address.</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        
                    >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                 </FormControl>
            </Box>
            <Box>
              <Box sx={{textAlign:'end',mt:'10px'}}>
                <Button sx={{mr:3,color:'#6e66a3'}}>Cancle</Button>
                <Button variant='contained' style={{borderRadius:'40px',color:'black',backgroundColor:'#ed8b00'}}>ADD TENANT</Button>
              </Box>
            </Box>
            <Divider  flexItem  sx={{mt:5,borderColor:'lightgray'}}/>
            <Box sx={{display:'flex',justifyContent:'space-between',mt:'25px'}}>
              <Button  startIcon={<AddIcon/>} disabled >
                  ADD TENANT
              </Button>
              <Typography color=" #6e66a3">Total : 0</Typography>
            </Box>
        </Box>
         <Box sx={{ width:'100%', mt:5,display:"flex",justifyContent:"space-between"}}>
            <Box  >
               <Button disabled >SKIP STEP</Button>
            </Box>
            <Box display="flex">
              <Button disabled >PREVIOUS</Button>
               <Button variant='contained' disabled sx={{borderRadius:'25px'}}>REVIEW</Button> 
            </Box>
         </Box>

    </Box>
    );
}

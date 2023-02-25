
import * as React from 'react'
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import { pink } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Box from '@mui/material/Box'



function LabelExm(){
    return(
        <div>
        <h2>You can provide a label to the Checkbox thanks to the FormControlLabel component.</h2>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
       </FormGroup>
    </div>
    )
    
};


function CheckboxExm(){
 return(
    <div>
        <h2>Basic Checkboxs</h2>
        <Checkbox arial-label="checkbox demo" default checked></Checkbox>
        <Checkbox arial-label="checkbox demo" default></Checkbox>
        <Checkbox arial-label="checkbox demo" disabled></Checkbox>
        <Checkbox arial-label="checkbox demo" disabled checked></Checkbox>

        <LabelExm/>
         <ColorCheckboxes/><br/>
         < IconCheckboxes/><br/>
         <IndeterminateCheckbox/><br/>
         <LabelplacementExm/><br/>

    </div>
 )
};

 
function ColorCheckboxes(){
    return(
        <div>
        <h2>colors</h2>

        <Checkbox arial-label="defaultChecked"/>
        <Checkbox arial-label="defaultchecked" color="success"/>
        <Checkbox arial-label="defaultchecked" color="secondary"/>
        <Checkbox arial-label="defaultchecked" color="warning"/>
        <Checkbox
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
        />
       </div>

    )
};
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

 function IconCheckboxes() {
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}

function IndeterminateCheckbox(){
    const [checked, setChecked] = React.useState([true, false]);
    const handelchild1 = (event) => {
        setChecked([checked[0],event.target.checked]);
      };
    
    const handelchild2 = (event) => {
    setChecked([checked[1],event.target.checked]);
    };
    const handleOnChange =(event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
            label = "one"
            control = {<Checkbox checked ={checked[0]} onchange = {handelchild1} />}
            />

            <FormControlLabel
            label = "two"
            control ={<Checkbox checked ={checked[1]} onchange = {handelchild2} />}
            />

        </Box>
    )
    return(
        <div>
            <h3>Indeterminate</h3>
            <FormControlLabel
            label = "Numbers"
            control ={<Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleOnChange} />}/>
            {children}
        </div>

    );
    };
      function LabelplacementExm(){
        return(
          <FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="End"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>

        )
      };


export default CheckboxExm;
 

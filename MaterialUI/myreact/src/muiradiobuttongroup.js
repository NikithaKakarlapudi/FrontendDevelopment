import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as React from 'react';
import { pink } from '@mui/material/colors';
import  FormHelperText  from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';


 function RadioButtonsGroup() {
  return (
    <div>
        <h4>Radio button group</h4>
        <FormControl>
        <FormLabel id="radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />          
        
        </RadioGroup>
        </FormControl>
         <br/><br/>
        <RowRadioButtonsGroup/>
        <br/>
        <StandAloneButtons />
        <br/>
        <ColorRadioButtons/>
        <br/>
        <br/>
        <ErrorRadios/>

    </div>   
  );
}

function RowRadioButtonsGroup(){
    return(
        <FormControl>
        <FormLabel id="row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            row
            aria-labelledby="row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="male" />
        <FormControlLabel value="other" control={<Radio />} label="other" />
        <FormControlLabel value="disabled" disabled control={<Radio />}label="other" />
        </RadioGroup>
        </FormControl>
    )
};

function StandAloneButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    return (
      <div>
        <h4>Standalone radio buttons</h4>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />
      </div>
    );
  }
  
    function ColorRadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,onChange: handleChange, value: item,name: 'color-radio-button-demo',inputProps: { 'aria-label': item },
    });
  
    return (
      <div>
        <h4>color radio buttons</h4>
        <Radio {...controlProps('a')} />
        <Radio {...controlProps('b')} color="secondary" />
        <Radio {...controlProps('c')} color="success" />
        <Radio {...controlProps('d')} color="default" />
        <Radio
          {...controlProps('e')}
          sx={{color: pink[800],'&.Mui-checked': {color: pink[600],},
          }}
        />
      </div>
    );
  }

  function ErrorRadios() {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
  
    const handleRadioChange = (event) => {
      setValue(event.target.value);
      setHelperText(' ');
      setError(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (value === 'best') {
        setHelperText('You got it!');
        setError(false);
      } else if (value === 'worst') {
        setHelperText('Sorry, wrong answer!');
        setError(true);
      } else {
        setHelperText('Please select an option.');
        setError(true);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel id="demo-error-radios">Error Message</FormLabel>
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="best" control={<Radio />} label="The best!" />
            <FormControlLabel value="worst" control={<Radio />} label="The worst." />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
          </Button>
        </FormControl>
      </form>
    );
  }
  

export default RadioButtonsGroup;  
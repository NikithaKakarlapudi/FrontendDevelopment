import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

 function BasicSwitchesExm() {
  return (
    <div>
        <h2>Basic switches</h2>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
      <Switch {...label} defaultChecked size="small" />
     
      <FormGroup>
        <h2>label</h2>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
     </FormGroup>

     <SwitchesGroupExm/>
    </div>
  );
}
 function SwitchesGroupExm() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <h2>Switches with Formgroup</h2>
        <FormControlLabel
          control={
            <Switch checked={state.gilad} onChange={handleChange} name="First" />
          }
          label="First Switch"
        />
        <FormControlLabel
          control={
            <Switch checked={state.jason} onChange={handleChange} name="Second" />
          }
          label="Second switch"
        />
        <FormControlLabel
          control={
            <Switch checked={state.antoine} onChange={handleChange} name="Third" />
          }
          label="Third switch"
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
}

export default BasicSwitchesExm;

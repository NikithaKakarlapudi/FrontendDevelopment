import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/system';
import FormHelperText from '@mui/material/FormHelperText';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

 function BasicSelectExm() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {setAge(event.target.value);};

  return (
    <div>
    <h2>Basic select example</h2>
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br/>
        <SelectVariants/>
        <br/>
        <br/>
        <MultipleSelectExm/><br/>
        <GroupedSelectExm/>
    </div>
);
}
 function SelectVariants(){
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
    setAge(event.target.value);
  };
  return(
    <div>
        <h2>Labels and helper text &standard variants</h2>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          </FormControl>
           <FormControl sx={{ m:2, minwidth:200 }} disabled>
            <InputLabel id="select-disabled-label">Age</InputLabel>
            <Select
            labelId="select-disabled-label"
            id="select-disabled"
            value="Age"
            onChange={handleChange}
        >
           <MenuItem value="">
           <em>None</em>
           </MenuItem>
           <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          label="Age"
          onChange={handleChange}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
   );
 }

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
 const movieNames = [
        'Chatrapathi',
        'Mirchi',
        'Varsham',
        'Pournami',
        'Mirchi',
        'Darling',
        'MrPerfect ',
        'Baahubali',
        'Baahubali2',
        'RadheShyam',
    ];
 function getStyles(movie, movieName, theme) {
    return {
      fontWeight:
      movieName.indexOf(movie) === 1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  
   function MultipleSelectExm() {
    const theme = useTheme();
    const [movieName, setMovieName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setMovieName(
          typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    return (
      <div>
        <h2>Multiple select</h2>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label"> Movie Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={movieName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {movieNames.map((movie) => (
              <MenuItem
                key={movie}
                value={movie}
                style={getStyles(movie, movieName, theme)}
              >
                {movie}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={movieName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {movieName.map((movie) => (
            <MenuItem key={movie} value={movie}>
              <Checkbox checked={movieName.indexOf(movie) > -1} />
              <ListItemText primary={movie} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    );
  }
        
 function GroupedSelectExm() {
    return (
      <div>
        <h2>Grouping</h2>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-native-select">Crouses</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Grouping">
            <option aria-label="None" value="" />
            <optgroup label="Courses">
              <option value={1}>Web development</option>
              <option value={2}>Digital marketing</option>
            </optgroup>
            <optgroup label="Courses">
              <option value={3}>python</option>
              <option value={4}>Wed desiging</option>
            </optgroup>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">Crouses</InputLabel>
          <Select defaultValue="" id="grouped-select" label="Grouping">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <ListSubheader>Courses</ListSubheader>
            <MenuItem value={1}>Web development</MenuItem>
            <MenuItem value={2}>Digital marketing</MenuItem>
            <ListSubheader>Courses 2</ListSubheader>
            <MenuItem value={3}>python</MenuItem>
            <MenuItem value={4}>Wed desiging</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
export default BasicSelectExm;
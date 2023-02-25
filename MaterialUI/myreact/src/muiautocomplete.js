import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

 function ComboBox(){
    return(
        <div>
            <h4>Select a movie</h4>
        <div>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={topfilms}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
       /><br/>
        <Countryselect/>
        <MultipleValues/><br/>
        <SizesExm/>
        </div>
        </div>
        
      
    )
 };
  const topfilms =[
    { label : 'Chatrapathi'},
    { label : 'Mirchi'},
    { label : 'Varsham'},
    { label : 'Pournami'},
    { label : 'Mirchi'},
    { label : 'Darling'},
    { label :  'MrPerfect '},
    { label :  'Baahubali'},
    { label :  'Baahubali2'},
    { label :  'RadheShyam'},
  ];

  function Countryselect(){
    return(
        <div>
            <h4>Select a Country</h4>
            <Autocomplete
        id="countries"
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        )}
      />
        </div>
    
    )
  };
 const countries = [
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
  ]

  function MultipleValues(){
    const Films =[
        { title : 'Chatrapathi'},
        { title : 'Mirchi'},
        { title : 'Varsham'},
        { title : 'Pournami'},
        { title : 'Mirchi'},
        { title : 'Darling'},
        { title :  'MrPerfect '},
        { title:  'Baahubali'},
        { title:  'Baahubali2'},
        { title :  'RadheShyam'}
      ];
    return(
        <Stack spacing={3} sx={{ width: 500 }}>
            <h4>MultipleValues</h4>
      <Autocomplete
        multiple
        id="tags-standard"
        options={Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[Films[5]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[Films[5]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-filled"
        options={Films.map((option) => option.title)}
        defaultValue={[Films[5].title]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="freeSolo"
            placeholder="Favorites"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-readOnly"
        options={Films.map((option) => option.title)}
        defaultValue={[Films[5].title, Films[6].title]}
        readOnly
        renderInput={(params) => (
          <TextField {...params} label="readOnly" placeholder="Favorites" />
        )}
      />
    </Stack>

    )
  };

  const movies =[
    { title : 'Chatrapathi'},
    { title : 'Mirchi'},
    { title : 'Varsham'},
    { title : 'Pournami'},
    { title : 'Mirchi'},
    { title : 'Darling'},
    { title :  'MrPerfect '},
    { title:  'Baahubali'},
    { title:  'Baahubali2'},
    { title :  'RadheShyam'}
  ]
   function SizesExm(){
    return(
        <Stack spacing={2} sx={{ width: 500 }}>
            <h4>Different sizes</h4>
        <Autocomplete
          id="size-small-standard"
          size="small"
          options={movies}
          getOptionLabel={(option) => option.title}
          defaultValue={movies[4]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Size small"
              placeholder="Favorites"
            />
          )}
        />
        <Autocomplete
          multiple
          id="size-small-standard-multi"
          size="small"
          options={movies}
          getOptionLabel={(option) => option.title}
          defaultValue={[movies[3]]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Size small"
              placeholder="Favorites"
            />
          )}
        />
        <Autocomplete
          id="size-small-outlined"
          size="small"
          options={movies}
          getOptionLabel={(option) => option.title}
          defaultValue={movies[6]}
          renderInput={(params) => (
            <TextField {...params} label="Size small" placeholder="Favorites" />
          )}
        />
        <Autocomplete
          multiple
          id="size-small-outlined-multi"
          size="small"
          options={movies}
          getOptionLabel={(option) => option.title}
          defaultValue={[movies[7]]}
          renderInput={(params) => (
            <TextField {...params} label="Size small" placeholder="Favorites" />
          )}
        />
        <Autocomplete
          id="size-small-filled"
          size="small"
          options={movies}
          getOptionLabel={(option) => option.title}
          defaultValue={movies[9]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option.title}
                size="small"
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Size small"
              placeholder="Favorites"
            />
          )}
        />
        <Autocomplete
          multiple
          id="size-small-filled-multi"
          size="small"
          options={movies}
          getOptionLabel={(option) => option.title}
          defaultValue={[movies[3]]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option.title}
                size="small"
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Size small"
              placeholder="Favorites"
            />
          )}
        />
      </Stack>
    )
   };
  
  export default ComboBox;
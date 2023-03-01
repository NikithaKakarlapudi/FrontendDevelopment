import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Stack from '@mui/material/Stack';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function ToggleButtonsExm() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
   return (
    <div>
    <h2>Exclusive selection</h2>
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
                <ToggleButton value="left"  color="warning"aria-label="left aligned">
                    <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" color="success" aria-label="centered">
                    <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right"  color="primary"aria-label="right aligned">
                    <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                    <FormatAlignJustifyIcon />
                </ToggleButton>
                </ToggleButtonGroup>
                   
                    <br/>
                   < ToggleButtonsMultipleexm/>
                   <br/>
                   <ToggleButtonSizesExm/>
                   <br/>
                   <VerticalToggleButtonsExm/>
    <ToggleButtonGroup/>
    </div>
  );
}
    function ToggleButtonsMultipleexm(){
            const [formats, setFormats] = React.useState(() => ['bold , italic']);
            const handleFormat = (event, newFormats) => {
            setFormats(newFormats);
           };
 return(
    <div>
        <h2>Multiple selection</h2>
        <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
              <ToggleButton value="bold" aria-label="bold">
                 <FormatBoldIcon />
              </ToggleButton>
              <ToggleButton value="italic" aria-label="italic">
                 <FormatItalicIcon />
              </ToggleButton>
              <ToggleButton value="underlined" aria-label="underlined">
                 <FormatUnderlinedIcon />
              </ToggleButton>
              <ToggleButton value="color" aria-label="color" disabled>
                <FormatColorFillIcon />
                <ArrowDropDownIcon />
              </ToggleButton>
        </ToggleButtonGroup>


        <ToggleButtonGroup>
            <ToggleButton value="Laptop" aria-label="Laptop">
                <LaptopIcon />
            </ToggleButton>
            <ToggleButton value="tv" aria-label="tv">
               <TvIcon/>
            </ToggleButton>
            <ToggleButton value="phone" aria-label="phone">
               <PhoneAndroidIcon/>
            </ToggleButton>
        </ToggleButtonGroup>


       
        </div>
        );
  }
  function ToggleButtonSizesExm() {
    const [alignment, setAlignment] = React.useState('left');
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  
    const children = [
      <ToggleButton value="left" key="left">
        <FormatAlignLeftIcon />
      </ToggleButton>,
      <ToggleButton value="center" key="center">
        <FormatAlignCenterIcon />
      </ToggleButton>,
      <ToggleButton value="right" key="right">
        <FormatAlignRightIcon />
      </ToggleButton>,
      <ToggleButton value="justify" key="justify">
        <FormatAlignJustifyIcon />
      </ToggleButton>,
    ];
  
    const control = {
      value: alignment,
      onChange: handleChange,
      exclusive: true,
    };
  
    return (
      <Stack spacing={2} alignItems="center">
        <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
          {children}
        </ToggleButtonGroup>
        <ToggleButtonGroup {...control} aria-label="Medium sizes">
          {children}
        </ToggleButtonGroup>
        <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
          {children}
        </ToggleButtonGroup>
      </Stack>
    );
  }
   function VerticalToggleButtonsExm() {
    const [view, setView] = React.useState('list');
  
    const handleChange = (event, nextView) => {
      setView(nextView);
    };
  
    return (
    <div>
        <h2>vertical Buttons</h2>
    <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
    >
        <ToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="module" aria-label="module">
          <ViewModuleIcon />
        </ToggleButton>
        <ToggleButton value="quilt" aria-label="quilt">
          <ViewQuiltIcon />
        </ToggleButton>
    </ToggleButtonGroup>
    </div>
    );
  }
  
  
 export default ToggleButtonsExm;


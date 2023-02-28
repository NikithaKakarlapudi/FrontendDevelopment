import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Typography from '@mui/material/Typography';


function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;

  }

 
function valuetext(value) {
    return `${value}°C`;
  }

function ContinuousSlidersExm(){
    const[ value, setValue] = React.useState(30)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div>
            <h2>Continuous sliders</h2>
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <VolumeDown />
              <Slider aria-label="Volume" value={value} onChange={handleChange} />
              <VolumeUp />
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        </Box>
        <Box width={300}>
            <h2>Sizes</h2>
        <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
        />
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
        <Box sx={{ width: 300 }}>
            <h2>Discrete sliders</h2>
        <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
       </Box>
        < DiscreteSliderMarks/>
        
       </div>
  )
};
export default ContinuousSlidersExm;


const marks = [
                {
                    value: 10,
                    label: '10°C',
                },
                {
                    value: 20,
                    label: '20°C',
                },
                {
                    value: 30,
                    label: '30°C',
                },
                {
                    value: 100,
                    label: '100°C',
                },
            ];
    
            function  DiscreteSliderMarks(){
                return(
                    <div>
                        <h2>Custom marks</h2>
                    <Box sx={{ width: 300 }}>
                    <Slider
                        aria-label="Custom marks"
                        defaultValue={20}
                        getAriaValueText={valuetext}
                        step={10}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                   </Box>
                   <Box sx={{ width: 300 }}>
                    <h2>Restricted values</h2>
                    <Slider
                        aria-label="Restricted values"
                        defaultValue={20}
                        valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext}
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                    </Box>
                    <Box sx={{ width: 300 }}>
                        <h2>color</h2>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        color="secondary"
                    />
                    </Box>
                   
                    <Stack sx={{ height: 300 }} spacing={1} direction="row">
                        <h2>Vertical sliders</h2>
                    <Slider
                      aria-label="Temperature"
                      orientation="vertical"
                      getAriaValueText={valuetext}
                      valueLabelDisplay="auto"
                      defaultValue={30}
                    />
                    <Slider
                      aria-label="Temperature"
                      orientation="vertical"
                      defaultValue={30}
                      valueLabelDisplay="auto"
                      disabled
                    />
                    <Slider
                      getAriaLabel={() => 'Temperature'}
                      orientation="vertical"
                      getAriaValueText={valuetext}
                      defaultValue={[20, 30]}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                  </Stack>
                  
                   </div>

                );
            }
           


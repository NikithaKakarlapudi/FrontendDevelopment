import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';


const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

 function SpeedDialExm() {
  return (
  <div>
    <h2>Speed Dial</h2>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
                ))}
            </SpeedDial> 
            <br/>
            <PlaygroundSpeedDial/>
            <br/>
            <ControlledOpenSpeedDialExm/>
            <br/>
            <SpeedDialTooltipOpenExm/>
            </Box>
   </div>
  );
}
const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }));
  
  const value = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  
  function PlaygroundSpeedDial() {
    const [direction, setDirection] = React.useState('up');
    const [hidden, setHidden] = React.useState(false);
  
    const handleDirectionChange = (event) => {
      setDirection(event.target.value);
    };
  
    const handleHiddenChange = (event) => {
      setHidden(event.target.checked);
    };
  
    return (
    <div>
        <h2>playground</h2>
      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
        <FormControlLabel
          control={
            <Switch checked={hidden} onChange={handleHiddenChange} color="primary" />
          }
          label="Hidden"
        />
        <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
          <FormLabel component="legend">Direction</FormLabel>
          <RadioGroup
            aria-label="direction"
            name="direction"
            value={direction}
            onChange={handleDirectionChange}
            row
          >
            <FormControlLabel value="up" control={<Radio />} label="Up" />
            <FormControlLabel value="right" control={<Radio />} label="Right" />
            <FormControlLabel value="down" control={<Radio />} label="Down" />
            <FormControlLabel value="left" control={<Radio />} label="Left" />
          </RadioGroup>
        </FormControl>
        <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
          <StyledSpeedDial
            ariaLabel="SpeedDial playground example"
            hidden={hidden}
            icon={<SpeedDialIcon />}
            direction={direction}
          >
            {actions.map((value) => (
              <SpeedDialAction
                key={actions.name}
                icon={actions.icon}
                tooltipTitle={actions.name}
              />
            ))}
          </StyledSpeedDial>
        </Box>
      </Box>
    </div>
    );
  }
  const name = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  
  function ControlledOpenSpeedDialExm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
    <div>
        <h2>Controlled speed dial</h2>
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((name) => (
            <SpeedDialAction
              key={name.name}
              icon={name.icon}
              tooltipTitle={name.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
        
      </Box>
    </div>
    );
  }
  const value1 = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  
   function SpeedDialTooltipOpenExm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
    <div>
        <h2>Persistent action tooltips</h2>
      <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((value1) => (
            <SpeedDialAction
              key={value1.name}
              icon={value1.icon}
              tooltipTitle={value1.name}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
    );
  }
  
  
  
export default SpeedDialExm;

 import * as React from 'react';
 import Popover from '@mui/material/Popover';
 import Typography from '@mui/material/Typography';
 import Button from '@mui/material/Button';

function BasicPopoverExm() {
  const [anchorEl, setAnchorEl] = React.useState(null);

 const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

   const handleClose = () => {
     setAnchorEl(null);   };

   const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined;

  return (
     <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
         Open Popover
       </Button>
       <Popover
         id={id}
         open={open}
         anchorEl={anchorEl}
         onClose={handleClose}
         anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'left',
         }}
        >
         <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
       </Popover>


       <br/>
       <MouseOverPopoverExm/>
     </div>
  );
 }


 function MouseOverPopoverExm() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  
    return (
      <div>
        <h2>Hover example</h2>
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Hover with a Popover.
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>I use Popover.</Typography>
        </Popover>
      </div>
    );
  }
  
export default BasicPopoverExm;
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

 function PositionedTooltipExm() {
    return (
    <div>
        <h2>Tooltips examples</h2>
      <Box sx={{ width: 500 }}>
        <Grid container justifyContent="center">
          <Grid item>
          <Tooltip title="Delete">
            <IconButton>
               <DeleteIcon />
           </IconButton>
          </Tooltip>
          <Tooltip title="Add" arrow>
            <Button>Arrow</Button>
          </Tooltip>
            <Tooltip title="Add" placement="top-start">
              <Button>top-start</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top">
              <Button>top</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top-end">
              <Button>top-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <Tooltip title="Add" placement="left-start">
              <Button>left-start</Button>
            </Tooltip>
            <br />
            <Tooltip title="Add" placement="left">
              <Button>left</Button>
            </Tooltip>
            <br />
            <Tooltip title="Add" placement="left-end">
              <Button>left-end</Button>
            </Tooltip>
          </Grid>
          <Grid item container xs={6} alignItems="flex-end" direction="column">
            <Grid item>
              <Tooltip title="Add" placement="right-start">
                <Button>right-start</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Add" placement="right">
                <Button>right</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Add" placement="right-end">
                <Button>right-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Tooltip title="Add" placement="bottom-start">
              <Button>bottom-start</Button>
            </Tooltip>
            <Tooltip title="Add" placement="bottom">
              <Button>bottom</Button>
            </Tooltip>
            <Tooltip title="Add" placement="bottom-end">
              <Button>bottom-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>


      <TriggersTooltipsExm/>
      </div>
    );
  }
  
  
  function TriggersTooltipsExm() {
    const [open, setOpen] = React.useState(false);
  
    const handleTooltipClose = () => {
      setOpen(false);
    };
  
    const handleTooltipOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
  
    return (
      <div>
        <Grid container justifyContent="center">
          <Grid item>
            <Tooltip disableFocusListener title="Add">
              <Button>Hover or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableHoverListener title="Add">
              <Button>Focus or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <Button>Hover</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Add"
                >
                  <Button onClick={handleTooltipOpen}>Click</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
          <div>
             <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Add">
             <Button>Controlled</Button>
              </Tooltip>
              <Tooltip title="You don't have permission to do this">
                <span>
              <Button disabled>A Disabled Button</Button>
               </span>
             </Tooltip>
             <Tooltip title="Add">
               <Button>Grow</Button>
             </Tooltip>
             <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Add"
            >
             <Button>Fade</Button>
             </Tooltip>
             <Tooltip TransitionComponent={Zoom} title="Add">
             <Button>Zoom</Button>
             </Tooltip>
             <Tooltip title="Delete">
              <IconButton>
               <DeleteIcon />
              </IconButton>
             </Tooltip>
             <Tooltip describeChild title="Does not add if it already exists.">
             <Button>Add</Button>
             </Tooltip>
            </div> 
      </div>
    );
  }
  
  export default PositionedTooltipExm;
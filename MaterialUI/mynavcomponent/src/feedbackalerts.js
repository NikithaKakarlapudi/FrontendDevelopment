import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function AlertsExm() {
  return (
    <div>
        <h2>Alerts Examples</h2>
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert   variant="filled" severity="error">This is an error alert — <strong>check it out!</strong></Alert>
        <Alert  variant="filled" severity="warning">This is a warning alert — <strong>check it out!</strong></Alert>
        <Alert  variant = "outlined" severity="info">This is an info alert — <strong>check it out!</strong></Alert>
        <Alert   variant = "outlined"   severity="success">This is a success alert — <strong>check it out!</strong></Alert>
        <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
        <Alert action={ <Button color="inherit" size="small"> UNDO </Button>}>
            This is a success alert — check it out!
        </Alert>
        <Alert severity="success" color="info">
         This is a success alert — check it out!
         </Alert>
        </Stack>
        <br/>
        <TransitionAlertsExm/>
    </div>
  );
}

 function TransitionAlertsExm() {
    const [open, setOpen] = React.useState(true);
  
    return (
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </Box>
    );
  }
  
export default AlertsExm;

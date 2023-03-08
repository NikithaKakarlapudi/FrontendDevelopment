import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Toolbar from '@mui/material/Toolbar';

import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';

 function SnackbarExm() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
        <h2>snackbar examples</h2>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
      <br/>
      <CustomizedSnackbarsExm/>
      <br/>
      <PositionedSnackbarExm/>
      <br/>
      <FabIntegrationSnackbarExm/>
      <br/>
      <TransitionsSnackbarExm/>
    </div>
  );
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
 function CustomizedSnackbarsExm () {
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
        <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert>
      </Stack>
    );
  }

 function PositionedSnackbarExm() {
    const [state, setState] = React.useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
  
    const handleClick = (newState) => () => {
      setState({ open: true, ...newState });
    };
  
    const handleClose = () => {
      setState({ ...state, open: false });
    };
  
    const buttons = (
      <React.Fragment>
        <Button
          onClick={handleClick({
            vertical: 'top',
            horizontal: 'center',
          })}
        >
          Top-Center
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'top',
            horizontal: 'right',
          })}
        >
          Top-Right
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'right',
          })}
        >
          Bottom-Right
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'center',
          })}
        >
          Bottom-Center
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'left',
          })}
        >
          Bottom-Left
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'top',
            horizontal: 'left',
          })}
        >
          Top-Left
        </Button>
      </React.Fragment>
    );
  
    return (
      <div>
        {buttons}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
        />
      </div>
    );
  }
  
 function FabIntegrationSnackbarExm() {
    return (
      <React.Fragment>
        <CssBaseline />
    
        <GlobalStyles
          styles={(theme) => ({
            body: { backgroundColor: theme.palette.background.paper },
          })}
        />
        <div>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton
                edge="start"
                sx={{ mr: 2 }}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                App bar
              </Typography>
            </Toolbar>
          </AppBar>
          <Fab
            color="secondary"
            sx={{
              position: 'absolute',
              bottom: (theme) => theme.spacing(2),
              right: (theme) => theme.spacing(2),
            }}
          >
            <AddIcon />
          </Fab>
          <Snackbar
            open
            autoHideDuration={6000}
            message="Archived"
            action={
              <Button color="inherit" size="small">
                Undo
              </Button>
            }
            sx={{ bottom: { xs: 90, sm: 0 } }}
          />
        </div>
      </React.Fragment>
    );
  }
  

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }
  
  function GrowTransition(props) {
    return <Grow {...props} />;
  }
  
   function TransitionsSnackbarExm() {
    const [state, setState] = React.useState({
      open: false,
      Transition: Fade,
    });
  
    const handleClick = (Transition) => () => {
      setState({
        open: true,
        Transition,
      });
    };
  
    const handleClose = () => {
      setState({
        ...state,
        open: false,
      });
    };
  
    return (
      <div>
        <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
        <Button onClick={handleClick(Fade)}>Fade Transition</Button>
        <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
        <Snackbar
          open={state.open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          message="I love india"
          key={state.Transition.name}
        />
      </div>
    );
  }
  
  
export default SnackbarExm;
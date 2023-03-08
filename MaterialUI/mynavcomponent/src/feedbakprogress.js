import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

function CircularExm() {
return (
    <div>
        <h2>progress examples</h2>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
            </Stack>

            <br/>
        <CircularDeterminateExm/>
        <br/>
        < CircularIntegrationExm/>
        <br/>
        <LinearIndeterminateExm/>
        <br/>
        <LinearBufferExm/>
        <br/>
        <LinearWithValueLabelExm/>
        <br/>
        <DelayingAppearanceExm/>
  </div>

);
}

function CircularDeterminateExm() {
    const [progress, setProgress] = React.useState(0);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <Stack spacing={2} direction="row">
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
        <CircularProgress variant="determinate" value={progress} />
      </Stack>
    );
  }

   function CircularIntegrationExm() {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();
  
    const buttonSx = {
      ...(success && {
        bgcolor: green[500],
        '&:hover': {
          bgcolor: green[700],
        },
      }),
    };
  
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
  
    const handleButtonClick = () => {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 2000);
      }
    };
  
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ m: 1, position: 'relative' }}>
          <Fab
            aria-label="save"
            color="primary"
            sx={buttonSx}
            onClick={handleButtonClick}
          >
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && (
            <CircularProgress
              size={68}
              sx={{
                color: green[500],
                position: 'absolute',
                top: -6,
                left: -6,
                zIndex: 1,
              }}
            />
          )}
        </Box>
        <Box sx={{ m: 1, position: 'relative' }}>
          <Button
            variant="contained"
            sx={buttonSx}
            disabled={loading}
            onClick={handleButtonClick}
          >
            Accept terms
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
        </Box>
      </Box>
    );
  }
  
function LinearIndeterminateExm() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />

      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
     <LinearProgress color="secondary" />
     <LinearProgress color="success" />
     <LinearProgress color="inherit" />
   </Stack>
   </Box>
  );
}

 function LinearDeterminate() {
    const [progress, setProgress] = React.useState(0);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    );
  }

   function LinearBufferExm() {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
  
    const progressRef = React.useRef(() => {});
    React.useEffect(() => {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
      </Box>
    );
  }
  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };
  
 function LinearWithValueLabelExm() {
    const [progress, setProgress] = React.useState(10);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    );
  }
 function DelayingAppearanceExm() {
    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState('idle');
    const timerRef = React.useRef();
  
    React.useEffect(
      () => () => {
        clearTimeout(timerRef.current);
      },
      [],
    );
  
    const handleClickLoading = () => {
      setLoading((prevLoading) => !prevLoading);
    };
  
    const handleClickQuery = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
  
      if (query !== 'idle') {
        setQuery('idle');
        return;
      }
  
      setQuery('progress');
      timerRef.current = window.setTimeout(() => {
        setQuery('success');
      }, 2000);
    };
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ height: 40 }}>
          <Fade
            in={loading}
            style={{
              transitionDelay: loading ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        </Box>
        <Button onClick={handleClickLoading} sx={{ m: 2 }}>
          {loading ? 'Stop loading' : 'Loading'}
        </Button>
        <Box sx={{ height: 40 }}>
          {query === 'success' ? (
            <Typography>Success!</Typography>
          ) : (
            <Fade
              in={query === 'progress'}
              style={{
                transitionDelay: query === 'progress' ? '800ms' : '0ms',
              }}
              unmountOnExit
            >
              <CircularProgress />
            </Fade>
          )}
        </Box>
        <Button onClick={handleClickQuery} sx={{ m: 2 }}>
          {query !== 'idle' ? 'Reset' : 'Simulate a load'}
        </Button>
      </Box>
    );
  }
  
  
export default CircularExm;
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function VariantsExm() {
  return (
    <div>

     <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
        </Stack>

        <AnimationsExm/>
        <br/>
        <YouTubeExm/>
        <br/>
    
    </div>
     );
}
 function AnimationsExm() {
    return (
    <div>
        <h2>Skeleton examples</h2>
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </div>
    );
  }

  const data = [
    {
      src: 'https://qph.fs.quoracdn.net/main-qimg-e64f607c77c92b5094f3ce58f027418f-c',
      title: 'A Beautiful Mind 2001 - Biography, ',
      channel: 'A Beautiful Mind',
      views: '396k views',
      createdAt: '6 years ago',
    },
    {
      src: 'https://2.bp.blogspot.com/-mCVFo7Pv9PQ/W2d_G8PfagI/AAAAAAAASmY/sM4_W3PGTPs91JKSQjrE6bnEGElbScV4ACLcBGAs/s1600/uyoyupyf.jpg',
      title: 'Top Gun Maverick | Tom Cruise | Miles Teller | Jennifer Connelly, Joseph',
      channel: 'Top Gun',
      views: '40M views',
      createdAt: '3 years ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    },
  ];
  
  function Media(props) {
    const { loading = false } = props;
  
    return (
 <div>

    <Grid container wrap="nowrap">
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            {item ? (
              <img
                style={{ width: 210, height: 118 }}
                alt={item.title}
                src={item.src}
              />
            ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )}
  
            {item ? (
              <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                  {item.channel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
      </div>
    );
  }
  Media.propTypes = {
    loading: PropTypes.bool,
  };
  
   function YouTubeExm() {
    return (
      <Box sx={{ overflow: 'hidden' }}>
        <Media loading />
        <Media />
      </Box>
    );
  }
  
  
export default VariantsExm;

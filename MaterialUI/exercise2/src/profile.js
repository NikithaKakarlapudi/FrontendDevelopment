
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import { padding } from '@mui/system';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function Profile(url,name,job) {
  return (
<Card sx={{width:"240px",
    height:"300px",
    alignItems:'center',
    padding:"10px",
    margin:"10px",
    borderRadius:"5px"
    }}>
    <CardContent>
    <Avatar 
        alt="Prakesh"
        src="https://th.bing.com/th/id/OIP.hvq3uaxUDuhLRv4UNalCMAHaHa?pid=ImgDet&w=512&h=512&rs=1" 
        sx={{ width: 80, height: 80,  marginLeft:"60px"}}
       
    /> 
    
    <Typography variant="body2" component="div"  sx={{ mt: 1.5,mx:4 }} color="primary"     >
           Capt.prakesh Negi
    </Typography>
    <Typography variant="subtitle2" sx={{ mt:1,mb: 1.5,mx:8}} color="black">
             Captain
    </Typography>
    <Fab size="small" color="#e7e7e9" aria-label="file" sx={{margin:'3px 3px',backgroundColor:'#e7e7e9'}}>
            <BadgeOutlinedIcon/>
    </Fab>
    <Fab size="small" color="#e7e7e9" aria-label="file" sx={{margin:'3px 3px',backgroundColor:'#e7e7e9'}}>
              <AnchorOutlinedIcon/>
    </Fab>
    <Fab size="small" color="#e7e7e9"  aria-label="file" sx={{margin:'3px 3px',backgroundColor:'#e7e7e9'}}>
              <ArticleOutlinedIcon/>
    </Fab>
    <Fab size="small" color="#e7e7e9" aria-label="file" sx={{margin:'3px 3px',backgroundColor:'#e7e7e9'}}>
              <SailingOutlinedIcon/>
    </Fab>
    </CardContent>
    <CardActions>
        <Stack direction="row" marginLeft="20px" spacing={1}>
                <Chip label="Message" color="success" />
                <Chip label="Unfriend" variant="contained" color="primary" />
        </Stack>
    </CardActions></Card>
  );
}

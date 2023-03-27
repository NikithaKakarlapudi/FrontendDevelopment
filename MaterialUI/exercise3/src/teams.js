
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Profile  from './profile.js';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { Grid, Typography } from '@mui/material';
import IconText from './icontext.js';
import IconTime from './icontime.js';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import { deepPurple,} from '@mui/material/colors';
import { IconButton } from '@material-ui/core';
import { Box } from '@mui/system';
import CustomBoxHeader from './boxheader.js'





export default function Teams() {
    return (
      <Box sx={{padding:"0px",margin:"30px",width:"80%"}}>
        <CustomBoxHeader title='Team Members' subtitle='Sort by:Recent'/>

        <TableContainer component={Paper} >
        <Table sx={{ Width: 500 }} 
        aria-label="simple table">
          
        <TableBody>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Profile icon="https://th.bing.com/th/id/OIP.Fpd9zMqEU44M94-V0lv0egHaHa?pid=ImgDet&w=930&h=930&rs=1" name="Mark Spencer"/>
              </TableCell>  
             <TableCell >
                <IconText icon={<LocalOfferOutlinedIcon color="secondary"/>} text="Design Development"/>
            </TableCell>
              <TableCell>
                <IconTime icon={<AccessTimeOutlinedIcon/>} text="This Week: 1h:12m" />
              </TableCell>
            <TableCell align="right">
                <AvatarGroup>
                <Avatar sx={{ bgcolor: "#ff4081" }}>B</Avatar>
                <Avatar sx={{ bgcolor:  "#4fc3f7"}}>B</Avatar>
                <Avatar sx={{ bgcolor: "#4db6ac" }}>G</Avatar>
                </AvatarGroup>
            </TableCell>
            <TableCell>
              <IconButton  disabled>
                   <MoreIcon/>
              </IconButton>
            </TableCell>
        </TableRow>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Profile icon="https://i.pinimg.com/280x280_RS/8e/ad/7f/8ead7f2ddacb8725cdaa2ed8c603759f.jpg" name="Rebbeca k.Quinn"/>
              </TableCell>  
             <TableCell align="right">
                <IconText icon={<LocalOfferOutlinedIcon color="secondary"/>} text="Copywritting,Photography"/>
            </TableCell>
              <TableCell align="right">
                <IconTime icon={<AccessTimeOutlinedIcon/>} text="This Week: 9h:25m"/>
              </TableCell>
            <TableCell align="right">
                <AvatarGroup>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>Z</Avatar>
                <Avatar sx={{ bgcolor: "#4fc3f7" }}>B</Avatar>
                
                </AvatarGroup>
            </TableCell>
            <TableCell>
              <IconButton  disabled >
                 <MoreIcon/>
              </IconButton>
                 
            </TableCell>
        </TableRow>


        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Profile icon="https://th.bing.com/th/id/OIP.p9EwHva9inuIotqUpk3G6QHaHa?pid=ImgDet&w=540&h=540&rs=1" name="Damon Martin"/>
              </TableCell>  
             <TableCell align="right">
                <IconText icon={<LocalOfferOutlinedIcon color="secondary"/>} text="Design Development"/>
            </TableCell>
              <TableCell align="right">
                <IconTime icon={<AccessTimeOutlinedIcon/>} text="This Week: 10h:33m"/>
              </TableCell>
            <TableCell align="right">
                <AvatarGroup>
                   <Avatar sx={{ bgcolor: "#c0ca33" }}>s</Avatar>
                </AvatarGroup>
            </TableCell>
            <TableCell>
                    <IconButton disabled >
                    <MoreIcon/>
                    </IconButton>
            </TableCell>
        </TableRow>
        </TableBody>
        </Table>
      </TableContainer>
      </Box>
      
    );
  }
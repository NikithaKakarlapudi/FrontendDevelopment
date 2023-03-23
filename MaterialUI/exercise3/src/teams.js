
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






export default function Teams() {
    return (
      <TableContainer component={Paper} sx={{padding:"20px",margin:"30px",width:"80%"}}>
        <Table sx={{ Width: 500 }} 
        aria-label="simple table">
          
        <TableBody>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Profile icon="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?pid=ImgDet&rs=1" name="Mark Spencer"/>
              </TableCell>  
             <TableCell >
                <IconText icon={<LocalOfferOutlinedIcon/>} text="Design Development"/>
            </TableCell>
              <TableCell>
                <IconText icon={<AccessTimeOutlinedIcon/>} text="This Week: 1h:12m"/>
              </TableCell>
            <TableCell align="right">
                <AvatarGroup>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                </AvatarGroup>
            </TableCell>
            <TableCell>
                 <MoreIcon/>
            </TableCell>
        </TableRow>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Profile icon="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?pid=ImgDet&rs=1" name="Rebbeca k.Quinn"/>
              </TableCell>  
             <TableCell align="right">
                <IconText icon={<LocalOfferOutlinedIcon/>} text="Copywritting,Photography"/>
            </TableCell>
              <TableCell align="right">
                <IconText icon={<AccessTimeOutlinedIcon/>} text="This Week: 9h:25m"/>
              </TableCell>
            <TableCell align="right">
                <AvatarGroup>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  
                </AvatarGroup>
            </TableCell>
            <TableCell>
                 <MoreIcon/>
            </TableCell>
        </TableRow>


        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Profile icon="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?pid=ImgDet&rs=1" name="Damon Martin"/>
              </TableCell>  
             <TableCell align="right">
                <IconText icon={<LocalOfferOutlinedIcon/>} text="Design Development"/>
            </TableCell>
              <TableCell align="right">
                <IconText icon={<AccessTimeOutlinedIcon/>} text="This Week: 10h:33m"/>
              </TableCell>
            <TableCell align="right">
                <AvatarGroup>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                 
                </AvatarGroup>
            </TableCell>
            <TableCell>
                 <MoreIcon/>
            </TableCell>
        </TableRow>
        </TableBody>
        </Table>
      </TableContainer>
    );
  }
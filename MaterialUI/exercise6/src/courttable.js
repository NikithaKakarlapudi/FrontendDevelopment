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
// import Profile  from './profile.js';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import {Grid, Typography } from '@mui/material';
// import IconText from './icontext.js';
// import IconTime from './icontime.js';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@material-ui/core';
import { Box } from '@mui/system';

import ProfileCourt from './profilecourt.js';
import CourtIconText from './courticontext.js';
import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import PoolIcon from '@mui/icons-material/Pool';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';

const bookinglist = [
    {
        tId:'TCWI-2056',
        date:'02/04/2016',
        bname:'Jennifer Wilson',
        bavatar:'https://images4-f.ravelrycache.com/uploads/siula/269253540/fotor__36__small2.jpg',
        sportIcon:<SportsTennisOutlinedIcon sx={{ color: '#fdd360' }}/>,
        sportName:'Tennis',
        courtIcon:<AccountBalanceOutlinedIcon sx={{ color: '#f9c7a1' }}/>,
        courtName:'Court4',
        amount:'20.00EUR',
        status:'paid',
    },
    {
        tId:'TCWI-2057',
        date:'02/04/2016',
        bname:'paul jason',
        bavatar:'',
        sportIcon:<SportsTennisOutlinedIcon sx={{ color: '#fdd360' }}/>,
        sportName:'Tennis',
        courtIcon:<AccountBalanceOutlinedIcon sx={{ color: '#f9c7a1' }}/>,
        courtName:'Court3',
        amount:'12.00EUR',
        status:'paid',
    },
    {
        tId:'TCWI-2058',
        date:'01/04/2016',
        bname:'Laurentiu macovei',
        bavatar:'',
        sportIcon:<SportsTennisOutlinedIcon sx={{ color: '#fdd360' }}/>,
        sportName:'Tennis',
        courtIcon:<AccountBalanceOutlinedIcon sx={{ color: '#f9c7a1' }}/>,
        courtName:'Court4',
        amount:'12.00EUR',
        status:'unpaid',
    },
    {
        tId:'TCWI-2059',
        date:'01/04/2016',
        bname:'Amber Rose',
        bavatar:'https://th.bing.com/th/id/OIP.gX97wIec4fZf0XuupArw6wHaGK?pid=ImgDet&rs=1',
        sportIcon:<SportsBasketballIcon sx={{ color: '#fdd360' }}/>,
        sportName:'Basketball',
        courtIcon:<AccountBalanceOutlinedIcon sx={{ color: '#f9c7a1' }}/>,
        courtName:'Court2',
        amount:'32.00EUR',
        status:'paid',
    },
    {
        tId:'TCWI-2060',
        date:'01/04/2016',
        bname:'Alexandru Petrache',
        bavatar:'https://dtzulyujzhqiu.cloudfront.net/expcorporate377/profiles/1615151869.jpg',
        sportIcon:<SportsBasketballIcon sx={{ color: '#fdd360' }}/>,
        sportName:'Basketball',
        courtIcon:<AccountBalanceOutlinedIcon sx={{ color: '#f9c7a1' }}/>,
        courtName:'Court2',
        amount:'20.00EUR',
        status:'cancelled',
    },
    {
        tId:'TCWI-2061',
        date:'27/03/2016',
        bname:'Marla lgnatenko',
        bavatar:'',
        sportIcon:<SportsVolleyballIcon sx={{ color: '#7b87d3' }}/>,
        sportName:'squash',
        courtIcon:<AccountBalanceOutlinedIcon sx={{ color: '#f9c7a1' }}/>,
        courtName:'Court1',
        amount:'10.00EUR',
        status:'cancelled',
    },
    {
        tId:'TCWI-2062',
        date:'27/03/2016',
        bname:'Richard Stewart',
        bavatar:'https://www.univarsolutionspensions.co.uk/images/person-smiling-1.jpg',
        sportIcon:<SportsTennisOutlinedIcon  sx={{ color: '#fdd360' }}/>,
        sportName:'Tennis',
        courtIcon:<AccountBalanceOutlinedIcon sx={{ color: '#f9c7a1' }}/>,
        courtName:'Court4',
        amount:'12.00EUR',
        status:'paid',
    },
    {
        tId:'TCWI-2063',
        date:'26/03/2016',
        bname:'Laura Negru',
        bavatar:'',
        sportIcon:<PoolIcon  sx={{ color: '#be8791' }}/>,
        sportName:'Swimming',
        courtIcon:<AccountBalanceOutlinedIcon sx={{ color: '#8adfff' }}/>,
        courtName:"Kid's pool",
        amount:'24.00EUR',
        status:'paid',
    },
    {
        tId:'TCWI-2064',
        date:'24/03/2016',
        bname:'Sorana Stratinzky',
        bavatar:'https://wtsinternational.com/wp-content/uploads/2016/02/WTS-Susan-Shanugham.jpg',
        sportIcon:<PoolIcon sx={{ color: '#be8791' }}/>,
        sportName:'swimming',
        courtIcon:<AccountBalanceOutlinedIcon sx={{ color: '#8adfff' }}/>,
        courtName:'Olympic pool',
        amount:'16.00EUR',
        status:'unpaid'
    },
]


function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    
    return color;
  }
  
  function stringAvatar(name) {
    return {
      style: {
        backgroundColor: stringToColor(name),
     
      },
      children: `${name.split(' ')[0][0]}`+`${name.split(' ')[1][0]}`,
    };
  }
  
  const getAvatarContent = (avatarURL,name) =>
  {
    if(avatarURL=='')
    {
      return(
            <Box display='flex' alignItems='center'> 
                <Avatar {...stringAvatar(name)}></Avatar>
                <Typography sx={{marginLeft:'5px'}} >{name}</Typography>
                
            </Box>
      )
    }
    else{
      return(
        <Box display='flex' alignItems='center'>
        <Avatar src={avatarURL}></Avatar>
        <Typography sx={{marginLeft:'5px'}} >{name}</Typography>
        </Box>
      )
    }
  }

  const getStatusContent = (status) =>{
    if(status=='paid')
    {
        return(
            <Box display='flex' alignItems='center'>
                <FiberManualRecordIcon  sx={{fontSize:'large',  color: '#75d585'}}/>
                <Typography>paid</Typography>
            </Box>
        )
    }
    else if(status=='unpaid')
    {
        return(
            <Box display='flex' alignItems='center'>
                <FiberManualRecordIcon sx={{fontSize:'large',  color: '#fec366'}}/>
                <Typography>unpaid</Typography>

            </Box>
        )
    }
    else{
        return(
            <Box display='flex' alignItems='center'>
                <CloseOutlinedIcon sx={{fontSize:'large', color: '#eb6b6b'}}/>
                <Typography>cancelled</Typography>
            </Box>
        )

    }
  }



export default function CourtTable() {
    return (
      <Box sx={{padding:"0px",margin:"5px"}}>

        <TableContainer component={Paper} >
        <Table sx={{  }}  aria-label="simple table"  checkboxSelection>

        <TableHead >
            <TableRow sx={{ '&:last-child td, &:last-child th': { borderBottom: '1px solid grey' } }}>
            <TableCell align="left">
                <Box sx={{display:"flex" , justifyContent:'space-around',alignItems:'center'}}>
                <Checkbox color="primary"  />
                <Typography>Transaction ID</Typography>
                 <KeyboardArrowDownIcon/>
                </Box>

            </TableCell>
            <TableCell align="left" >
                <Box sx={{display:"flex" , justifyContent:'space-around',alignItems:'center'}}>
                <Typography>Transaction data</Typography>
                <KeyboardArrowDownIcon/>
                </Box>
            </TableCell>
           
            <TableCell align="left">
            <Box   sx={{display:"flex" , justifyContent:'space-around',alignItems:'center'}}>
                 <Typography>Booker</Typography>
                 <KeyboardArrowDownIcon/>
             </Box>
             </TableCell>

            <TableCell align="left">
            <Box sx={{display:"flex" , justifyContent:'space-around',alignItems:'center'}}>
                <Typography>Sport</Typography>
                <KeyboardArrowDownIcon/>
             </Box>
            </TableCell>

            <TableCell align="left" >
            <Box  sx={{display:"flex" , justifyContent:'space-around',alignItems:'center'}}>
                <Typography> Court</Typography>
                <KeyboardArrowDownIcon/>
            </Box>
            </TableCell>

            <TableCell align="left" >
            <Box sx={{display:"flex" , justifyContent:'space-around',alignItems:'center'}}>
                
                <Typography>Amount</Typography>
                <KeyboardArrowDownIcon/>

            </Box>
            </TableCell>

            <TableCell align="left"  >
            <Box sx={{display:"flex" , justifyContent:'space-around',alignItems:'center'}}>
                
                <Typography>Status</Typography>
                <KeyboardArrowDownIcon/>
             </Box>
            </TableCell>

            </TableRow>
        </TableHead>
        

        <TableBody>
         {bookinglist.map((item) =>(
            <TableRow  >
            <TableCell >
            {/* <Checkbox color="primary"  /> */}
              <Typography> {item.tId}</Typography>
           </TableCell>

           <TableCell >
               <Typography>{item.date}</Typography>
           </TableCell>

             <TableCell >
                {getAvatarContent(item.bavatar,item.bname)}
               
             </TableCell>

            <TableCell >
               <CourtIconText icon={item.sportIcon} text={item.sportName}/>
           </TableCell>

           <TableCell >
               <CourtIconText icon={item.courtIcon} text={item.courtName}/>
           </TableCell>

           <TableCell >
               <Typography>{item.amount}</Typography>
           </TableCell>

           <TableCell >
               {/* <CourtIconText icon={<FiberManualRecordOutlinedIcon  fontsize="small" color="succes"/>} text="paid"/> */}
                {getStatusContent(item.status)}
           </TableCell>
       </TableRow>  
         ))}
         
       
        </TableBody>
        </Table>
      </TableContainer>
      </Box>
      
    );
  }
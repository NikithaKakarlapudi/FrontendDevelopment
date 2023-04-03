import {
  Typography,
  Box,
  Divider,
  Button,
  IconButton,
  Avatar,
  Icon,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IosShareIcon from "@mui/icons-material/IosShare";
import ShortTextSharpIcon from "@mui/icons-material/ShortTextSharp";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import Chip from "@mui/material/Chip";
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';

const useStyles = makeStyles({
  maincontent: {
    background: "#f0f4f6",
    height: "100vh",
    padding: "50px",
    marginLeft: "300px",
  },
  griditem: {
    display: "flex",
    justifyContent: "flex-start",
  },
  horizontalAlign:{
    display:'flex',
    justifyContent:'space-between',
    my:1 
  },
  griditemend:{
    display: "flex",
    justifyContent: "flex-end",
  },
  iconButtonContentSize:{
    width: '18px'
  }
});








function MainContent() {
  const classes = useStyles();
  return (
    <Box className={classes.maincontent}>
      <Box>
        <Typography variant="h4" align="left">
          Expenses
        </Typography>
        <Grid
          container
          spacing={1}
          my={1}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={3.5} className={classes.griditem}>
            <Typography>Wallet expenses</Typography>
            <Typography style={{ fontWeight: 600, marginLeft: "5px" }}>
              71.180,00 kr
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3.5} className={classes.griditem}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                alignItems: "center",
              }}
            >
              <SearchIcon sx={{ color: "action.active", mr: 1, my: 2.5 }} />
              <TextField
                InputProps={{
                  disableUnderline: true, // <== added this
                }}
                sx={{ disableUnderlineprop: true }}
                id="input-with-sx"
                label="Search in activity"
                variant="standard"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Button
              variant="outlined"
              style={{ borderRadius: "25px" }}
              startIcon={<IosShareIcon />}
            >
              Export
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "15",
              }}
            >
              <Typography>Filter</Typography>
              <IconButton style={{ background: "#e6edf1" }}>
                <ShortTextSharpIcon />
              </IconButton>
              <IconButton style={{ background: "#e6edf1" }}>
                <HelpCenterOutlinedIcon />
              </IconButton>
              <IconButton style={{ background: "#e6edf1" }}>
                <Person3OutlinedIcon />
              </IconButton>
            
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box>
        <ContentList />
      </Box>
    </Box>
  );
}

const itemslist = [
  {
    avatar:'https://www.maxpixel.net/static/photo/640/Male-Man-Rugged-Portrait-Face-Handsome-Guy-White-6153298.jpg',
    title: "Amazon",
    name: "Niccolo Perra",
    date: "13 Aug 2016",
    time:"21 hours",
    icon1:<NotesOutlinedIcon/>,
    icon1text:"Select a Category",
    icon1color:"grey",
    icon2:<NoteAltOutlinedIcon sx={{color: '#609ee5'}}/>,
    icon2text:"Add note",
    icon2color:"grey",
    paymentStatus:2,
    amountDollars:'200$',
    amountinKR:'300,00 kr',
    noteicon:<ReceiptOutlinedIcon/>

  },
  {
    avatar:'https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg',
    title: "Starbucks",
    name: "Lily Dawson",
    date: "13 Aug 2016",
    time:"21 hours",
    icon1:<FastfoodOutlinedIcon sx={{ color: '#4cc873'}}/>,
    icon1text:"Meals and drinks",
    icon1color:"#4cc873",
    icon2:<NoteAltOutlinedIcon/>,
    icon2text:"Note added",
    icon2color:"grey",
    paymentStatus:0,
    amountDollars:'150$',
    amountinKR:'',
    noteicon:<PostAddOutlinedIcon sx={{color: '#609ee5'}}/>

  },
  {
    avatar:'',
    title: "PVR Cinemas",
    name: "Stacy Arimjo",
    date: "13 Aug 2016",
    time:"21 hours",
    icon1:<VideoCameraFrontOutlinedIcon sx={{ color: '#da0e7c' }}/>,
    icon1text:"Entertainment",
    icon1color:"#da0e7c",
    icon2:<NoteAltOutlinedIcon />,
    icon2text:"Note added",
    icon2color:"grey",
    paymentStatus:0,
    amountDollars:'280$',
    amountinKR:'',
    noteicon:<PostAddOutlinedIcon sx={{color: '#609ee5'}}/>

  },
  {
    avatar:'https://media.sandrareynolds.co.uk/models/GPun0nCD34TFT3VT7jDy6Xqh0QPQBEfA9nfSeeivPSYKWKYnToFiYD5sM8RkRMnvrw6ERP.jpg',
    title: "Overheat PS3 Gamezone",
    name: "Dominique",
    date: "13 Aug 2016",
    time:"21 hours",
    icon1:<VideoCameraFrontOutlinedIcon sx={{ color: '#da0e7c' }}/>,
    icon1text:"Entertainment",
    icon1color:"#da0e7c",
    icon2:<NoteAltOutlinedIcon sx={{color: '#609ee5'}}/>,
    icon2text:"Add note",
    icon2color:"grey",
    paymentStatus:1,
    amountDollars:'150$',
    amountinKR:'120,00 kr',
    noteicon:<PostAddOutlinedIcon sx={{color: '#609ee5'}}/>

  },
  //https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg

];

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
      color: stringToColor(name),
      backgroundColor:'grey',
      height:70,
      width:70
    },
    children: `${name.split(' ')[0][0]}`+`${name.split(' ')[1][0]}`,
  };
}

const getAvatarContent = (avatarURL,name) =>
{
  if(avatarURL=='')
  {
    return(
    <Avatar {...stringAvatar(name)}></Avatar>
    )
  }
  else{
    return(
    <Avatar style={{height:70,width:70}} src={avatarURL}></Avatar>
    )
  }
}

const getGridItemContent = (paymentStatus,dollars,amountkr) => {
  if(paymentStatus ==2)
  {
    return(
    
      <Box>
        <Typography style={{color:"#4cc873"}} >Refunded</Typography>
        <Typography style={{color:"#4cc873"}}>{dollars}</Typography>
        <Typography>{amountkr}</Typography>
      </Box>
    )
  }
  else if(paymentStatus ==1)
  {
    return(
    
      <Box>
        <Typography>{dollars}</Typography>
        <Typography>{amountkr}</Typography>
      </Box>
    )
  }
  else{
    return(
    
      <Box>
        <Typography>{dollars}</Typography>        
        <Typography>Pending</Typography>
      </Box>
    )

  }
  

};

function ContentList() {
    const classes = useStyles();

    // function StringAvatar(name) {
    //   return {
    //     sx: {
    //       color:'#609ee5',
    //     },
    //    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    //   };
    // }

  return (
    <Box>
      <Grid container spacing={2} style={{marginTop:'30px'}}  >
        {itemslist.map((item) => (
          <Grid item container spacing={2} marginY={0.5} padding={2} style={{height:180}} >
            <Grid item xs={12} md={10} lg={10} container style={{padding:'12px 64px 12px 12px' ,background:'white', borderRight:'8px solid #f0f4f6'}}>
               <Grid item>
               {getAvatarContent(item.avatar,item.name)}
                </Grid> 
                <Grid item>
                <Box style={{marginLeft: '30px', width:'420px'}}>
                  <Typography variant="h6" style={{textAlign:'left'}}>{item.title}</Typography>
                  <Box className={classes.horizontalAlign}>
                   <Typography><PersonOutlineOutlinedIcon fontSize="small"/>{item.name}</Typography>
                   <Typography><CalendarMonthOutlinedIcon fontSize="small"/>{item.date}</Typography>
                   <Typography><AccessTimeOutlinedIcon fontSize="small"/>{item.time}</Typography>
                   
                  </Box>
                  <Box className={classes.horizontalAlign}>
                    <Button
                      variant="outlined"
                      style={{ borderRadius: "25px",borderColor:item.icon1color }}
                      startIcon={item.icon1}
                    >
                      {item.icon1text}
                    </Button>
                    <Button
                      variant="outlined"
                      style={{ borderRadius: "25px",borderColor:item.icon2color }}
                      startIcon={item.icon2}
                    >
                      {item.icon2text}
                    </Button>
                  </Box>
                </Box>
                </Grid> 
                <Grid item flexGrow={1} className={classes.griditemend} sx={{alignItems:'center',justifySelf:'center'}}>
                  {getGridItemContent(item.paymentStatus,item.amountDollars,item.amountinKR)}
                </Grid> 
             
            </Grid>
            <Grid item xs={12} md={2} lg={2} style={{background:'white', display:'grid', alignItems:'center',justifySelf:'center'}}>
              <Box >
                <Icon sx={{height:60,width:60}}>
                    {item.noteicon}
                </Icon>
              </Box>
               
              
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MainContent;

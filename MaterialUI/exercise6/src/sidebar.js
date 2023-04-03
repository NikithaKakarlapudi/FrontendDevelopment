import * as React from 'react';
import { Avatar, Box, Button, Drawer, makeStyles, Typography } from '@material-ui/core';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AdfScannerRoundedIcon from '@mui/icons-material/AdfScannerRounded';



import { styled } from '@mui/material/styles';

const drawerWidth =200;
const useStyles = makeStyles((theme) => ({


  drawer: {
    width: drawerWidth,

  },
  drawerPaper: {
    width: drawerWidth,
    background:'#fffff',
    
    alignContent:'center'
  },
  tabiconscolor:{
    color:'white'
  }

}));


const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      color:'#52c7fc'
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#52c7fc',
     color:'#52c7fc'
    },
  });

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: 'black',
      '&.Mui-selected': {
        color: '#da0e7c',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );




export default function Sidebar() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const classes = useStyles();
  
    return (
      <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >

    
        <Box>



            <Box style={{ justifyContent: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height:'200px',
                marginTop:15,

           
            }}> 
                <Avatar  style={{ width: '60px', height: '60px' }}
                alt="Astria" src="https://th.bing.com/th/id/R.2d4be5df29b88422cda6fd8188aa5bfe?rik=BQ6gH%2fbKlGVGKQ&riu=http%3a%2f%2fsurlalunephotography.com%2fwp-content%2fuploads%2f2017%2f01%2f11-25916-post%2fBowlinggreenkyweddingphotographer_0015.jpg&ehk=CwOPNQZKSLO4nURpv8l5iSPgD7gclitLhpiIsjctW8M%3d&risl=&pid=ImgRaw&r=0" />
      
            
            </Box>  
        </Box>
        <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
            orientation="vertical"
            sx={{justifyContent:"flex-start"}}
            
        >
            <StyledTab  icon={<BoltOutlinedIcon/>} fontSize="large"/>
            <StyledTab icon={<VpnKeyOutlinedIcon/>}/>
            <StyledTab icon={<IntegrationInstructionsOutlinedIcon/>}/>
            <StyledTab icon={<PersonOutlineOutlinedIcon/ >}fontSize="large"/>

            <StyledTab icon={<CalendarMonthOutlinedIcon/>} />
            <StyledTab icon={<ContentPasteIcon/>}/>
            <StyledTab icon={<AdfScannerRoundedIcon/>}/>
            
        </StyledTabs>
       
        </Drawer>
    );
} 
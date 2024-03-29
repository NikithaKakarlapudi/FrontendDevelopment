import * as React from 'react';
import { Avatar, Box, Button, Drawer, makeStyles, Typography } from '@material-ui/core';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import ShortTextOutlinedIcon from '@mui/icons-material/ShortTextOutlined';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { styled } from '@mui/material/styles';

const drawerWidth =300;
const useStyles = makeStyles((theme) => ({


  drawer: {
    width: drawerWidth,
    //flexShrink: 0,
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
      color:'#da0e7c'
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#da0e7c',
      color:'#da0e7c'
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
            <Box style={{ justifyContent:"center",
            display: "flex",
            alignItems:"center",
            marginTop:40,
            fontFamily:"BlinkMacSystemFont",
            color:"#dc1783"
         }}>
            <Typography variant="h3"  >
                  pleo
            </Typography>
            </Box>
            <Box style={{ justifyContent: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height:'200px',
                marginTop:25,

           
            }}> 
                <Avatar  style={{ width: '60px', height: '60px' }}
                alt="Astria" src="https://th.bing.com/th/id/R.2d4be5df29b88422cda6fd8188aa5bfe?rik=BQ6gH%2fbKlGVGKQ&riu=http%3a%2f%2fsurlalunephotography.com%2fwp-content%2fuploads%2f2017%2f01%2f11-25916-post%2fBowlinggreenkyweddingphotographer_0015.jpg&ehk=CwOPNQZKSLO4nURpv8l5iSPgD7gclitLhpiIsjctW8M%3d&risl=&pid=ImgRaw&r=0" />
      
              <Typography variant="h6" gutterBottom >
                      Astria
                  </Typography>
            </Box>  
        </Box>
        <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
            orientation="vertical"
            sx={{justifyContent:"flex-start"}}
        
            
        >
            <StyledTab  icon={<CreditCardOutlinedIcon/>}iconPosition="start" label="Card" />
            <StyledTab icon={<InsightsOutlinedIcon />} iconPosition="start" label="Expenses" />
            <StyledTab icon={<AccountBalanceWalletOutlinedIcon/>} iconPosition="start" label="wallet" />
            <StyledTab icon={<Groups3OutlinedIcon />} iconPosition="start" label="Manage Team" />

            <StyledTab icon={<CreditCardOutlinedIcon/>}iconPosition="start" label=" Manage Cards" />
            <StyledTab icon={<LocationCityOutlinedIcon  />} iconPosition="start" label="Company Profile" />
            <StyledTab icon={<ShortTextOutlinedIcon/>} iconPosition="start" label="Manage categories" />
            <StyledTab icon={<Person2OutlinedIcon/>} iconPosition="start" label="My Profile" />
        </StyledTabs>
       
        </Drawer>
    );
} 
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DocumentContent from './documentcontent';
import { makeStyles } from '@material-ui/core';
import { spacing } from '@mui/system';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 0}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles({
    customStyleOnTab:{
      fontSize:'15px',
      fontWeight:'600',
      minWidth:'150px'
    },
    activeTab:{
      fontSize:'16px',
      fontWeight:'600',
      color:'#249ff3',
      minWidth:'150px'
    },
    indicativeColor:{
        color:'red',

        
    }
  })
  
  export default function TabsDocuments() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 0 }}>
          <Tabs value={value}  onChange={handleChange}  aria-label="tabs">
            <Tab label={<span className={ value === 0 ? classes.activeTab : classes.customStyleOnTab}>Document</span> } {...a11yProps(0)} />
            <Tab label={<span className={ value === 1 ? classes.activeTab : classes.customStyleOnTab}>People</span> } {...a11yProps(1)} />
            <Tab label={<span className={ value === 2 ? classes.activeTab : classes.customStyleOnTab}>Tickets</span> } {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
             <DocumentContent/>
    
        </TabPanel>
        <TabPanel value={value} index={1}>
          

        </TabPanel>
        <TabPanel value={value} index={2}>
        

        </TabPanel>
      </Box>
    );
  }
  
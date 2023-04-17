import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OverviewTasks from './propertiesoverviewtasks';
import ViewInvoicesDashboard from './viewinvoicesdashboard';
import Footer from './footer';
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

//import Task from './task.js';

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
        <Box sx={{ p: 0 }}>
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

export default function Overview() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',bgcolor:'#2f2d46',color:'white',padding:5 }}>
        <Tabs value={value} onChange={handleChange} 
        aria-label="basic tabs example"
         textColor='white'
          variant='h6'
          
          >
          <Tab label="OVERVIEW" {...a11yProps(0)} />
          <Tab label="UNITS" {...a11yProps(1)} />
          <Tab label="LEASES" {...a11yProps(2)} />
          <Tab label="TENANTS" {...a11yProps(3)} />
          <Tab label="TIMELINE" {...a11yProps(4)} />
          <Tab label="DOCUMENTS" {...a11yProps(5)} />
          <Tab label="ABOUT" {...a11yProps(6)} />
        </Tabs>
        
      </Box>
      <Button variant="contained" startIcon={<AddIcon />} sx={{ float: 'right', zIndex: '3', bottom: '20px', marginRight: '40px', borderRadius: '25px', background: '#ed8b00' }}>New Invoice</Button>
      <TabPanel value={value} index={0} >
        <Box sx={{height:'50px',background: '#f7f6f5'}}></Box>
        <Box sx={{background: '#f7f6f5'}}>
        <OverviewTasks />
        <Typography variant='h5' mt={2} px={5}>Invoices</Typography>
        <ViewInvoicesDashboard />
        <Footer />
        </Box>
        
        
        
        
        
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
      <TabPanel value={value} index={2}>
        3
      </TabPanel>
      <TabPanel value={value} index={2}>
        4
      </TabPanel>
      <TabPanel value={value} index={2}>
        5
      </TabPanel>
      <TabPanel value={value} index={2}>
        6
      </TabPanel>
      <TabPanel value={value} index={2}>
        7
      </TabPanel>
    </Box>
  );
}

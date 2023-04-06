import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Dashboard from './dashboard.js';

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
        <Box sx={{ p: 3 }}>
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

export default function MenuTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' ,bgcolor:'#f9fafc',px:10 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',display:'flex', justifyContent:'space-between',alignItems:'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab  icon={<DashboardOutlinedIcon />}  iconPosition="start" label="Dashboard" {...a11yProps(0)} />
            <Tab  icon={<LocalAtmOutlinedIcon />}  iconPosition="start" label="Accounting" {...a11yProps(1)} />
            <Tab  icon={<MessageOutlinedIcon/>}  iconPosition="start" label="Reports" {...a11yProps(2)} />
            <Tab  icon={<SmsOutlinedIcon/>}  iconPosition="start" label="Messages" {...a11yProps(3)} />
            <Tab  icon={<CheckBoxOutlinedIcon/>}  iconPosition="start" label="Tasks" {...a11yProps(4)} />
            <Tab icon={<MoreHorizOutlinedIcon/>}/>
        </Tabs>
        <Box>
           <SearchOutlinedIcon/>
           <Typography>search</Typography>
        </Box> 


      </Box>
      <Box >
      <TabPanel value={value} index={0}>
            <Dashboard/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
      </Box>
      
    </Box>
  );
}






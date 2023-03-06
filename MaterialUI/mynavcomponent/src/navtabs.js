import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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

 function BasicTabsExm() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
 <div>
    <h2>Basic tab</h2>
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {/* <Tabs value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example" */}
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>


    <DisabledTabsExm/>
    <br/>
    <ScrollableTabsButtonAutoExm/>
    <br/>
    <IconTabsExm/>
    
</div>
  );
}

 function DisabledTabsExm() {
    const [value, setValue] = React.useState(2);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Tabs
           value={value}
           onChange={handleChange}
        >
        <Tab label="Active" />
        <Tab
           label="Disabled"
           disabled
        />
        <Tab label="Active" />
        </Tabs>
      );
    }
    function ScrollableTabsButtonAutoExm() {
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        return (
        <div>
            <h2>Scrollable tabs</h2>
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              textColor="secondary"
              indicatorColor="secondary"
            
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
            </Tabs>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                
            >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
            </Tabs>
        </Box>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <h2>centered tab</h2>
            <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            </Tabs>
        </Box>
        </div>
      );
    }


       function IconTabsExm() {
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        return (
        <div>
            <h2>icons</h2>
          <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
            <Tab icon={<SearchIcon />} aria-label="search" />
            <Tab icon={<StarIcon />} aria-label="star" />
            <Tab icon={<SettingsIcon />} aria-label="settings" />
            <Tab icon={<SearchIcon />} label="search" />
            <Tab icon={<StarIcon />} label="Favorites" />
            <Tab icon={<SettingsIcon />} label="settings" />
          </Tabs>
          <Tabs value={value} onChange={handleChange} aria-label="icon position tabs example">
            <Tab icon={<searchIcon />} label="top" />
            <Tab icon={<startIcon />} iconPosition="start" label="start" />
            <Tab icon={<FavoriteIcon />} iconPosition="end" label="end" />
            <Tab icon={<ArrowDownwardIcon />} iconPosition="bottom" label="bottom" />
         </Tabs>
        </div>
        );
      }
      
      
    
  
export default BasicTabsExm;
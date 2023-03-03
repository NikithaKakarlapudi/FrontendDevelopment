import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
 
function BottomNavigationExm() {
const [value, setValue] = React.useState(0);
      
    return(
    <div>
        <h2>BottomNavigation</h2>
        <Box sx={{width: 500}}>
            <BottomNavigation
                showLabels
                value={value}
                onchange={(event, newValue) => {
                setValue(newValue);
                 }}           
            >
            <BottomNavigationAction label="Recent" icon={<RestoreIcon/>} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>} />
           </BottomNavigation>


           <LabelBottomNavigationExm/><br/>
           < FixedBottomNavigationExm/> 
        </Box>
    </div>
    );
}

function LabelBottomNavigationExm() {
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
    <div>
        <h2>Bottom navigation with no label</h2>
      <BottomNavigation sx={{ width: 500 }}
       value={value} 
       onChange={handleChange}>

        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </div>
    );
  }



  function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  
    return Array.from(new Array(50)).map(
      () => messageExamples[getRandomInt(messageExamples.length)],
    );
  }
  
  function FixedBottomNavigationExm() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const [messages, setMessages] = React.useState(() => refreshMessages());
  
    React.useEffect(() => {
      ref.current.ownerDocument.body.scrollTop = 0;
      setMessages(refreshMessages());
    }, [value, setMessages]);
  
    return (
    <div>
        <h2>Fixed positioning</h2>
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <List>
          {messages.map(({ primary, secondary, person }, index) => (
            <ListItem button key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          ))}
        </List>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
    );
  }
  
  const messageExamples = [
    {
      primary: 'Brunch this week?',
      secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: 'https://foreignpolicyi.org/wp-content/uploads/2018/11/BH-2-870x696.jpg',
    },
    {
      primary: 'Birthday Gift',
      secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
      person:'https://www.minton.group/wp-content/uploads/2019/11/Sam-Sarradj-Consultant-Scientist-Minton-Treharne-Davies-Group-300x300.jpg',
    },
    {
      primary: 'Recipe to try',
      secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
      person: 'https://th.bing.com/th/id/OIP.DOFpyh41yrHpmFWuxv9KfgAAAA?pid=ImgDet&w=316&h=299&rs=1',
    },
    {
      primary: 'Yes!',
      secondary: 'I have the tickets to the ReactConf for this year.',
      person: 'https://th.bing.com/th/id/OIP.HXAsGm_f-8vG2T0SyUsVcQAAAA?pid=ImgDet&w=225&h=300&rs=1',
    },
    {
      primary: "Doctor's Appointment",
      secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
      person: 'https://th.bing.com/th/id/OIP.TWdEB344w2WXS9epEfn7ZgHaHa?pid=ImgDet&w=1181&h=1181&rs=1',
    },
    {
      primary: 'Discussion',
      secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
      person: 'https://th.bing.com/th/id/OIP.S5lxexoUc6OF2YJ0vpmXgwHaHa?pid=ImgDet&w=1140&h=1140&rs=1',
    },
    {
      primary: 'Summer BBQ',
      secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
      person: 'https://th.bing.com/th/id/OIP.30wpkStAFh5mqI7Rqh5NbwHaHa?pid=ImgDet&w=630&h=631&rs=1',
    },
  ];
  
  
export default BottomNavigationExm;
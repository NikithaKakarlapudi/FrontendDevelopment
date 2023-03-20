import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function Jobs() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        padding:'10px',
        alignContent:'center'
      }}
    >
      <Typography>Other Jobs</Typography>
      <ListItem>
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="https://www.kolbetimes.com/wp-content/uploads/2020/08/Mercy-Ships-Logo.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Master" secondary="Chemical Tanker" third="Posted: 20 Aug 2016" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="https://media-exp3.licdn.com/dms/image/C510BAQEetLFQo-K1dg/company-logo_200_200/0/1519879340893?e=2159024400&v=beta&t=nuJRQ65QGk-QOVtAlNp7GpAmqWe_YA-nCgTYMfMU-Pw" />
        </ListItemAvatar>
        <ListItemText primary="Chief Officer" secondary="Oil Tanker" third="Posted: 20 Aug 2016" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0018/2979/brand.gif?itok=mQovC8FJ" />
        </ListItemAvatar>
        <ListItemText primary="Executive Officer" secondary="Bulk Carrier" third="Posted: 20 Aug 2016" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="https://i0.wp.com/cyprusscene.com/wp-content/uploads/2015/10/phoenician-ship.jpg?resize=350%2C316&ssl=1" />
        </ListItemAvatar>
        <ListItemText primary="Master" secondary="Chemimcal Tanker" third="Posted: 20 Aug 2016" />
      </ListItem>
      <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            justifycontent="center"
            disabled
            

           >
          <MoreHorizOutlinedIcon sx={{marginLeft:'150px'}}/>
      </IconButton>
    </List>
  );
}

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { red, pink} from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import AvatarGroup from '@mui/material/AvatarGroup';


 function ImageAvatarsExm() {
  return (
    <div>
        <h2>Basic avatars</h2>
        <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="https://www.brtstage.org/wp-content/uploads/2019/12/Leslie-Becker-headshot-1200x1800.jpg" />
        <Avatar alt="Travis Howard" src="https://www.hawtcelebs.com/wp-content/uploads/2018/03/lucie-shorthouse-at-empire-film-awards-in-london-03-18-2018-0.jpg" />
        <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.ea59bd33895e52149453aa9ff80b70b0?rik=5nlaNfvtTjGjuw&riu=http%3a%2f%2fwww.tellychakkar.com%2fsites%2fwww.tellychakkar.com%2ffiles%2fstyles%2fdisplay_665x429%2fpublic%2fimages%2fstory%2f2015%2f09%2f03%2fanuja.jpg%3fitok%3dn-1h6MjU&ehk=NunCXKePwXW9%2bGTs1SrpAE2h05NbW%2fv2Gguk7v7uSrA%3d&risl=&pid=ImgRaw&r=0" />
        </Stack>
        <br/>
        <h2>Letter avatars</h2>
        <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>
        <br/>
        <h2>Size avatar</h2>
        <Stack direction="row" spacing={2}>
        <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
        />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
        />
       </Stack>
       <br/>
       <h2>IconAvatars</h2>
       <Stack direction="row" spacing={2}>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <PageviewIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: red[500] }}>
          <AssignmentIcon />
        </Avatar>
        </Stack>
        <br/>
        <h2> Variant</h2>
        <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: red[500] }} variant="square">
            N
        </Avatar>
        <Avatar sx={{ bgcolor: pink[500] }} variant="rounded">
           <AssignmentIcon />
        </Avatar>
        </Stack>
        <br/>
        <h2>FallbackAvatars</h2>
        <Stack direction="row" spacing={2}>
        <Avatar
            sx={{ bgcolor: pink[500] }}
            alt="nikitha"
            src="/broken-image.jpg"
        >
            N
        </Avatar>
        <Avatar
            sx={{ bgcolor: pink[500] }}
            alt="Anji"
            src="/broken-image.jpg"
        />
        <Avatar src="/broken-image.jpg" />
        <br/>
        <h2> GroupAvatars:</h2>
        <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="https://www.brtstage.org/wp-content/uploads/2019/12/Leslie-Becker-headshot-1200x1800.jpg" />
            <Avatar alt="Travis Howard" src="https://www.hawtcelebs.com/wp-content/uploads/2018/03/lucie-shorthouse-at-empire-film-awards-in-london-03-18-2018-0.jpg" /> 
            <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.ea59bd33895e52149453aa9ff80b70b0?rik=5nlaNfvtTjGjuw&riu=http%3a%2f%2fwww.tellychakkar.com%2fsites%2fwww.tellychakkar.com%2ffiles%2fstyles%2fdisplay_665x429%2fpublic%2fimages%2fstory%2f2015%2f09%2f03%2fanuja.jpg%3fitok%3dn-1h6MjU&ehk=NunCXKePwXW9%2bGTs1SrpAE2h05NbW%2fv2Gguk7v7uSrA%3d&risl=&pid=ImgRaw&r=0"/>
            <Avatar alt="Agnes Walker" src="https://dynl.mktgcdn.com/p/yl4soNwMYL4sA1LPo0jX_cX2o-HMd-57Ko5wo0DeSaQ/1068x1600.jpg" />
            <Avatar alt="Trevor Henderson" src="https://aiolaus.com/wp-content/sabai/File/files/l_d57504ff8b985569c91430705d0ce7d4.jpg" />
       </AvatarGroup>
       </Stack>

       <br/>
       <BadgeAvatarsExm/>
    </div>
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  
 function BadgeAvatarsExm() {
    return (
    <div>
        <h2>BadgeAvatars</h2>
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="Honey" src="https://www.brtstage.org/wp-content/uploads/2019/12/Leslie-Becker-headshot-1200x1800.jpg" />
        </StyledBadge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <SmallAvatar alt="Lasya" src="https://www.hawtcelebs.com/wp-content/uploads/2018/03/lucie-shorthouse-at-empire-film-awards-in-london-03-18-2018-0.jpg" />
          }
        >
          <Avatar alt="Travis Howard" src="https://www.hawtcelebs.com/wp-content/uploads/2018/03/lucie-shorthouse-at-empire-film-awards-in-london-03-18-2018-0.jpg" />
        </Badge>
      </Stack>
      </div>
    );
  }
  
export default ImageAvatarsExm;
import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

 function SimpleBadgeExm() {
  return (
    <div>
    <Stack>
        <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
        </Badge>
    </Stack>
    <Stack spacing={2} direction="row">
        <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
        </Badge>
    </Stack>
    <h2>BadgeMax</h2>
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
       <Badge color="secondary" badgeContent={99}>
          <MailIcon />
       </Badge>
       <Badge color="secondary" badgeContent={100}>
          <MailIcon />
       </Badge>
       <Badge color="secondary" badgeContent={1000} max={999}>
         <MailIcon />
       </Badge>
    </Stack>

    <CustomizedBadgesExm/>
    <br/>
    <BadgeVisibilityExm/>
    <br/>
    <BadgeOverlapExm/>
  </div>
   
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  
 function CustomizedBadgesExm() {
    return (
    <div>
        <h2>CustomizedBadges</h2>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
    );
  }

 function BadgeVisibilityExm() {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);
  
    const handleBadgeVisibility = () => {
      setInvisible(!invisible);
    };
  
    return (
    <div>
        <h2>BadgeVisibility</h2>
      <Box
        sx={{
          color: 'action.active',
          display: 'flex',
          flexDirection: 'column',
          '& > *': {
            marginBottom: 2,
          },
          '& .MuiBadge-root': {
            marginRight: 4,
          },
        }}
      >
        <div>
          <Badge color="secondary" badgeContent={count}>
          <ShoppingCartIcon />
          </Badge>
          <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <Badge color="secondary" variant="dot" invisible={invisible}>
            <MailIcon />
          </Badge>
          <FormControlLabel
            sx={{ color: 'text.primary' }}
            control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
            label="Show Badge"
          />
        </div>
      </Box>
      </div>
    );
  }
  

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);
 function BadgeOverlapExm() {
  return (
    <Stack spacing={3} direction="row">
      <Badge color="secondary" badgeContent=" ">
        {rectangle}
      </Badge>
      <Badge color="secondary" badgeContent=" " variant="dot">
        {rectangle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" ">
        {circle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
        {circle}
      </Badge>
      <Box sx={{ color: 'action.active' }}>
      <Badge color="secondary" variant="dot">
      <MailIcon />
      </Badge>
      </Box>
    </Stack>
   
  );
}

export default SimpleBadgeExm;
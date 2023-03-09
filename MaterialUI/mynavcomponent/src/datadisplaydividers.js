import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import Box from '@mui/material/Box';
import MuiGrid from '@mui/material/Grid';


const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

function ListDividersExm() {
return (
<div>
    <h2>Divider Example</h2>
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
    <ListItem>
        <ListItemAvatar>
        <Avatar>
            <ImageIcon />
        </Avatar>
        </ListItemAvatar>
    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem>
        <ListItemAvatar>
        <Avatar>
            <WorkIcon />
        </Avatar>
        </ListItemAvatar>
    <ListItemText primary="Work" secondary="Jan 7, 2014" />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem>
        <ListItemAvatar>
        <Avatar>
            <BeachAccessIcon />
        </Avatar>
        </ListItemAvatar>
    <ListItemText primary="Vacation" secondary="July 20, 2014" />
    </ListItem>

    <SubheaderDividersExm/>
    <br/>
    <DividerTextExm/>
    <br/>
    <VerticalDividersExm/>
    <br/>
    <VerticalDividerTextExm/>
    
</div>

  );
}

function SubheaderDividersExm() {
    return (
    <div>
    <h2>SubheaderDividers</h2>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <li>
          <Typography
            sx={{ mt: 0.5, ml: 2 }}
            color="text.secondary"
            display="block"
            variant="caption"
          >
            Divider
          </Typography>
        </li>
        <ListItem>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <Divider component="li" variant="inset" />
        <li>
          <Typography
            sx={{ mt: 0.5, ml: 9 }}
            color="text.secondary"
            display="block"
            variant="caption"
          >
            Leisure
          </Typography>
        </li>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
      </div>
    );
  }
  
  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));
  
 function DividerTextExm() {
    const content = (
      <div>
        {`Consuming a healthy diet throughout a person’s life helps prevent malnutrition in all its forms,
         as well as a range of diet-related non-communicable diseases and conditions. But the increased 
         consumption of processed food, rapid urbanisation and changing lifestyles have led to a shift in 
         dietary patterns. People now consume fast food and do not eat enough fibre-rich fruits, vegetables
          and whole grains. So, to help students understand the importance of a healthy diet, we have provided 
          a “Healthy Diet” essay.`}
      </div>
    );
  
    return (
        <div>
            <h2>divider with text</h2>
      <Root>
        {content}
        <Divider>CENTER</Divider>
        {content}
        <Divider textAlign="left">LEFT</Divider>
        {content}
        <Divider textAlign="right">RIGHT</Divider>
        {content}
        <Divider>
          <Chip label="CHIP" />
        </Divider>
        {content}
      </Root>
      </div>
    );
  }

function VerticalDividersExm() {
    return (
      <div>
        <h2>VerticalDividers</h2>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '& svg': {
              m: 1.5,
            },
            '& hr': {
              mx: 0.5,
            },
          }}
        >
          <FormatAlignLeftIcon />
          <FormatAlignCenterIcon />
          <FormatAlignRightIcon />
          <Divider orientation="vertical" flexItem />
          <FormatBoldIcon />
          <FormatItalicIcon />
        </Box>
      </div>
    );
  }
  
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));
  
   function VerticalDividerTextExm() {
    const matter = (
        <div>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
       Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
       Sed malesuada lobortis pretium.`}
        </div>
      );
    return (
        <div>
            <h2>Vertical with text</h2>
      <Grid container>
        <Grid item xs>
          {matter}
        </Grid>
        <Divider orientation="vertical" flexItem>
          VERTICAL
        </Divider>
        <Grid item xs>
          {matter}
        </Grid>
      </Grid>
      </div>
    );
  }
  
  
export default ListDividersExm;
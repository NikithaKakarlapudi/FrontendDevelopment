import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DividerStack() {
  return (
    <div>
      <Typography variant="h4">Dashboard</Typography>
    <Box
        sx={{
          display: 'flex',
          padding:"20px",
          margin:"30px",
          width:"80%",
          alignItems: 'center',
          //width: 'fit-content',
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
        }}>
            
        <Stack sx={{padding:'5px'}}  >
            <IconButton aria-label="delete">
            <NewspaperIcon/> 5
            </IconButton>
            <Typography variant='body2'>OPEN INVOICES</Typography>
        </Stack>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Stack sx={{padding:'5px'}}  >
            <IconButton aria-label="delete">
            < AttachMoneyIcon/> 14,215
            </IconButton>
            <Typography variant='body2'>INVOICES AMOUNT</Typography>
        </Stack>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Stack  sx={{padding:'5px'}}>
            <IconButton aria-label="delete">
            < AttachMoneyIcon/> 10,215
            </IconButton>
            <Typography variant='body2'>AMOUNT OVERDUE</Typography>
        </Stack>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Stack sx={{padding:'5px'}}>
            <IconButton aria-label="delete">
            < AccessTimeIcon/> 19
            </IconButton>
            <Typography variant='body2' >HOURS TRACKED</Typography>
        </Stack>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Stack sx={{padding:'5px'}}>
            <IconButton aria-label="delete">
            < LibraryAddOutlinedIcon/> 8
            </IconButton>
            <Typography variant='body2'>OPEN PROJECTS</Typography>
        </Stack>
    </Box>
    </div>



























      /* <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>
        <IconButton aria-label="delete">
           <NewspaperIcon/> 5
        </IconButton>
        <Typography>OPEN INVOICES</Typography>
        </Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
      </Stack> */

  );
}

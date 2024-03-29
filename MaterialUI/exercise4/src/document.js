import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import { Icon, IconButton } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
//import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react';

const cards = [
  {

    title: 'Mark Thompson',
    description:'Holiday Request' ,
    icon:<CloudDownloadOutlinedIcon color='info'/>,
    date:'08-04-2019'
  },
  {
    title: 'Tillie Carlson',
    description: 'Certificate of employement',
    icon:<CheckCircleIcon color='success'/>,
    date:'07-03-2019'
  },
  {
    title: 'Corey Gross',
    description: 'Half-Time Application',
    icon:<HourglassEmptyOutlinedIcon color='info'/>,
    date:'04-17-2019'
  },
  {
    title: 'Harriett McGuire',
    description: 'Holiday request',
    icon:<CloudDownloadOutlinedIcon color='info'/>,
    date:'07-07-2019'
  },
  {
    title: 'Larry Christensen',
    description: 'sick leave',

    date:'04-18-2019'
  },
  {
    title: 'Elnora poole',
    description:'Certificate of employement',
    icon:<CheckCircleIcon color='success'/>,
    date:'04-25-2019'
  },
  {
    title: 'Sally Rhodes',
    description: 'Holiday request',
    icon:<CheckCircleIcon  color='success' />,
    date:'03-11-2019'
  },
  {
    
    title: 'phillip Ryan',
    description: 'New Born',
    icon:<CheckCircleIcon  color='success'/>,
    date:'02-25-2019'
  
  },
];



const Documentlist = () => {
  
  const [selected, setSelected] = useState(null);

  const handleItemClick = (index) => {
    setSelected(index);
  };
  return (
    <Grid container spacing={2}>
      {cards.map((card,index) => (
        <Grid item xs={12} sm={6} md={3} key={card.title}
        >
          <Card style={{
          border: selected === index ? '2px  solid #249ff3' : '1px solid #ddd',
          cursor: 'pointer',
        
        }}
        onClick={() => handleItemClick(index)}>            
            <CardContent>
                <Box height={150}  display='flex' flexDirection='column'>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <CalendarMonthOutlinedIcon/>
                        <Typography>{card.date}</Typography>
                        <IconButton>
                            {card.icon}
                        </IconButton>
                    </Box>
                    <Box flexGrow={1}>

                    </Box>
                    <Box>
                        <Typography gutterBottom variant="h6" component="h2" align='left'>
                            {card.title}
                        </Typography>
                        <Typography variant="subtitle2" style={{color:"#249ff3"}}  align='left'>
                            {card.description}
                        </Typography>
                    </Box>
                </Box>              
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Documentlist;

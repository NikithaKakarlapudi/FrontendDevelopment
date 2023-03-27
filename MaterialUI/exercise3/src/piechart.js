import React from 'react';
import { PieChart, Pie, Cell,Legend } from 'recharts';
import { Typography, makeStyles } from '@material-ui/core';
import { Box } from '@mui/system';
import CustomBoxHeader from './boxheader.js'


const data = [
    { name: 'Redesigning Tackkle - $4750.00', value: 4750 },
    { name: 'Copywriting Nike Email - $3750.00', value: 3750 },
    { name: 'Developing Red Bull - $2000.00', value: 2000 },
    
  ];

  
  const useStyles = makeStyles((theme) => ({
    chartTitle: {
      marginBottom: theme.spacing(2),
      textAlign: 'center',
    },
    chartContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
  }));
  const colors = ['#b590f5', '#f45b93', '#31bfe1'];

  export default function PieChartComponent(){
    const classes = useStyles();
    return (  
        <Box sx={{background:'white',padding:2}}>
            <CustomBoxHeader title="Top Box : " subtitle="15 days"/>
            <Box className={classes.chartContainer} >            
            <PieChart width={400} height={315} marginTop="30px">
      <Pie
        data={data}
        dataKey="value"
        cx={200}
        cy={100}
        innerRadius={50}
        outerRadius={100}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Legend align='left' wrapperStyle={{ padding: '25px',marginTop:'15px' }}>

      </Legend>
    </PieChart>
        </Box>
        </Box> 
          
        
    )
  };
    
  
  
  
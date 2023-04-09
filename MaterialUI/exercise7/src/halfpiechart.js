import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import { IconButton,Box, Typography } from '@mui/material';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const HalfMoonChart = () => {
    const COLORS = [ '#ff545d', '#FF7a21', '#4850b2'];
    const data = [
        { name: '8', value: 8 },
        { name: '16', value: 16 },
        { name: '22', value: 22 },
      ];
      const renderCenter = () => (
        <IconButton>
          <HomeWorkOutlinedIcon />
        </IconButton>
      );
    return (
    <Box>
        <PieChart width={400} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value"
          startAngle={180}
          endAngle={0}
          innerRadius={100}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
        {/* <Legend
          align="center"
          verticalAlign="middle"
          layout="vertical"
          iconType="circle"
          iconSize={10}
          width={100}
          positionType="bottom"
        /> */}
      </PieChart>
      <LegendItem/>
     

    </Box>
      
    );
  };

  function LegendItem(){
    return(
      <Box display='flex' justifyContent='space-evenly' alignItems='center' marginTop='-35px' >
            <Box>
              <Box display='flex'>
                    <FiberManualRecordIcon sx={{color:'#ff545d'}}/>
                    <Typography>8</Typography>
              </Box>
              <Box textAlign='left'>
                    <Typography> 30 days</Typography>
              </Box>
            </Box>
            <Box>
              <Box display='flex'>
                    <FiberManualRecordIcon sx={{color:'#ff8529'}}/>
                    <Typography>16</Typography>
              </Box>
              <Box textAlign='left'>
                    <Typography>31-60 days</Typography>
              </Box>
            </Box>
            <Box>
              <Box display='flex'>
                    <FiberManualRecordIcon sx={{color:'#3a43ac'}}/>
                    <Typography>22</Typography>
              </Box>
              <Box textAlign='left'>
                    <Typography>61-90 days</Typography>
              </Box>
            </Box>
        </Box>
    )
  }
  export default HalfMoonChart;
  
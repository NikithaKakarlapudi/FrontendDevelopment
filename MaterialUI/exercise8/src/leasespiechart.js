import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Typography } from '@mui/material';

const data = [
  { name: '1-30 days', value: 1 },
  { name: '31-60 days', value: 1 },
  { name: '61-90 days', value: 1 },
  { name: '90+ days', value: 4 },
];

const COLORS = ['#3f3a69', '#5b5397', '#8c86b6','#cecbe0'];

const renderCenterText = (msg,x,y) => {
    return (
      <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" >
        {/* <Typography variant="h5" component="h2" color="textPrimary">
          Total
        </Typography>
        <Typography variant="h6" component="p" color="textSecondary">
          1200
        </Typography> */}
       {msg}
      </text>
    );
  };

const LeasesPieChart = () => {
  return (
    <ResponsiveContainer width={350} height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend/>
        <g>
          {renderCenterText('7','50%','48%')}
        </g>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default LeasesPieChart;

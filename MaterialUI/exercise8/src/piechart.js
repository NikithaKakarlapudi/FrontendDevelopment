import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

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

const PieChartWithCenterText = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
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
        <g>
          {renderCenterText('50%','50%','48%')}
          {renderCenterText('Paid','50%','53%')}
        </g>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartWithCenterText;

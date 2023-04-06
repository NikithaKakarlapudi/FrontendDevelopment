import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';


const HalfMoonChart = () => {
    const COLORS = [ '#00C49F', '#FFBB28', '#FF8042'];
    const data = [
        { name: '8', value: 8 },
        { name: '16', value: 16 },
        { name: '22', value: 22 },
      ];
  
    return (
      <PieChart width={400} height={250}>
        <Pie
          data={data}
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
        <Legend
          align="center"
          verticalAlign="middle"
          layout="vertical"
          iconType="circle"
          iconSize={10}
          width={100}
          positionType="bottom"
        />
      </PieChart>
    );
  };
  export default HalfMoonChart;
  
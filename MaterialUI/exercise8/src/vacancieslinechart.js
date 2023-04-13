import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const series = [
  {
    name: 'Series 1',
    data: [
      { category: 'Dec2019', value: 100 },
      { category: 'Jan2020', value: 60 },
      { category: 'Feb2020', value: 70 },
    ],
  },
  {
    name: 'Series 2',
    data: [
       
        { category: 'Feb2020', value: 70 },
        { category: 'Mar2020', value: 90 },
      ],
  },
];

export default function VacanciesChart(){
    return (
        <LineChart width={350} height={250}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          {series.map((s) => (
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
          ))}
        </LineChart>
    );
  }
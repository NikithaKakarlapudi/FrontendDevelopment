import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";



const BarChartWithLegend = () => {
    const data = [
        { name: "Jan", Expense: 100, Income: 50 },
        { name: "Feb", Expense: 200, Income: 100 },
        { name: "Mar", Expense: 300, Income: 150 },
        { name: "Apr", Expense: 400, Income: 200 },
        { name: "May", Expense: 500, Income: 250 },
      ];
    return (
      <BarChart width={500} height={250} data={data} style={{padding:2}}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Expense" fill="#8884d8" />
        <Bar dataKey="Income" fill="#82ca9d" />
      </BarChart>
    );
  };

  export default BarChartWithLegend;
  
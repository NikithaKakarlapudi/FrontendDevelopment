import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";



const BarChartWithLegend = () => {
    const data = [
        { name: "Jan", Expense: 10000, Income: 5000 },
        { name: "Feb", Expense: 20000, Income: 10000},
        { name: "Mar", Expense: 30000, Income: 15000 },
        { name: "Apr", Expense: 40000, Income: 20000},
        { name: "May", Expense: 50000, Income: 25000 },
        { name: "June", Expense: 40000, Income: 20000 },
        { name: "July", Expense: 50000, Income: 25000 },
      ];
    return (
      <BarChart width={700} height={250} data={data} style={{padding:2}}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Expense" fill="#ff7a21" />
        <Bar dataKey="Income" fill="#4149ac" />
      </BarChart>
    );
  };

  export default BarChartWithLegend;
  
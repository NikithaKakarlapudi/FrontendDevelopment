
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "1-30 days",
    unit: 1500,
    laterentamount: 2000,
    otherlateamount: 50
  },
  {
    name: "31-60 days",
    unit: 0,
    laterentamount: 0,
    otherlateamount: 0
  },
  {
    name: "60-90 days",
    unit: 0,
    pv: 0,
    otherlateamount: 0
  },
  {
    name: "90+ days",
    unit: 0,
    laterentamount: 0,
    otherlateamount: 0
  }
];

export default function LatePaymentsBars() {
  return (
    <BarChart
      width={350}
      height={250}
      data={data}
      
      margin={{
        top: 20,
        right: 10,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Bar dataKey="unit" fill="#ffc658" />
      <Bar dataKey="laterentamount" stackId="a" fill="#8884d8" />
      <Bar dataKey="otherlateamount" stackId="a" fill="#82ca9d" />
      
    </BarChart>
  );
}

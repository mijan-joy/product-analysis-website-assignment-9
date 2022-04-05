import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart, ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const Dashboard = () => {
  const [chart, setChart] = useState([]);
  console.log(chart);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="chart-title text-center my-4">Monthly Sell Report</h2>
            <ResponsiveContainer width="100%" height={500}>
              <LineChart
                width={500}
                height={300}
                data={chart}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sell"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="col-md-6">
            <h2 className="chart-title text-center my-4">Investment Report in BarChart</h2>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                width={500}
                height={300}
                data={chart}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
        </div>
        <div className="row">
         
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const ProductivityChart = () => {
  const [data, setData] = useState([]);
  const [chartHeight, setChartHeight] = useState(220);

  useEffect(() => {
    const rawStats = JSON.parse(localStorage.getItem('dailyTaskStats')) || {};
    const formatted = Object.entries(rawStats).map(([date, count]) => ({
      date,
      tasks: count,
    }));
    setData(formatted);
  }, []);

  // Adjust chart height for mobile vs larger screens
  useEffect(() => {
    const updateHeight = () => {
      const isMobile = window.innerWidth < 768;
      setChartHeight(isMobile ? 180 : 250);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#EADFFB] to-white shadow-lg rounded-2xl p-4 sm:p-6 mt-4 sm:mt-6 w-full md:w-[1140px] mx-auto md:mx-0 md:ml-[-100px] transition-all duration-300 ease-in-out transform hover:translate-y-2 cursor-pointer overflow-hidden">
      <h2 className="text-lg sm:text-xl font-bold text-purple-600 mb-3 sm:mb-4">📊 Daily Productivity</h2>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="tasks" fill="#a78bfa" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductivityChart;

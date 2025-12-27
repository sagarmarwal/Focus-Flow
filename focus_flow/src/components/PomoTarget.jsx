import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const PomoTarget = ({ count, goal = 8 }) => {
  const percentage = Math.min((count / goal) * 100, 100);

  return (
    <div className="mt-4 ml-[30px] bg-white shadow-xl rounded-2xl p-6 w-80 text-center transition-all duration-300 hover:shadow-2xl min-h-[100px] ">
      <div className="flex items-center justify-center gap-2 mb-3">
        <FaChartLine className="text-blue-500 text-3xl" />
        <h2 className="text-2xl font-semibold text-gray-800">Daily Progress</h2>
      </div>

      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
        <div
          className="h-4 bg-purple-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="text-lg text-gray-700 mt-3 font-medium">
        {Math.round(percentage)}% complete
      </p>
      <p className="text-sm text-gray-500">{count} of {goal} sessions</p>
    </div>
  );
};

export default PomoTarget;

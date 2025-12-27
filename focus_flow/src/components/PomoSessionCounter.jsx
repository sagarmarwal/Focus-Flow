import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PomoSessionCounter = ({ count }) => {
  return (
    <div className="mt-4 ml-[30px] bg-white shadow-xl rounded-2xl p-6 w-80 text-center transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center justify-center gap-2 mb-3">
        <FaCheckCircle className="text-green-500 text-3xl" />
        <h2 className="text-2xl font-semibold text-gray-800">Sessions Completed</h2>
      </div>
      <p className="text-5xl font-bold text-purple-600">{count}</p>
    </div>
  );
};

export default PomoSessionCounter;

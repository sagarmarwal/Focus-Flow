import React, { useState, useEffect } from "react";
import { FaPlay, FaRedo } from "react-icons/fa";

const Pomo = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const reset = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  const progressAngle = (timeLeft / (25 * 60)) * 360;

  return (
    <div
      className="w-full sm:w-[340px] md:w-[350px] h-[260px] sm:h-[280px] md:h-[300px] bg-gradient-to-br from-[#EADFFB] to-white rounded-2xl p-4 shadow-xl relative transition-all duration-300 ease-in-out transform hover:translate-y-2 cursor-pointer"
    >
      {/* Glow */}
      <div className="absolute -inset-1 rounded-[1.5rem] blur-2xl opacity-30 bg-purple-300 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Circular Timer */}
        <div
          className="w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 rounded-full flex justify-center items-center mb-4"
          style={{
            background: `conic-gradient(#AF8BEF ${progressAngle}deg, #e5e7eb ${progressAngle}deg)`,
            transition: "background 1s linear",
          }}
        >
          <div className="w-24 sm:w-24 md:w-28 h-24 sm:h-24 md:h-28 bg-white rounded-full flex justify-center items-center shadow-sm">
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 bg-gray-200 px-3 py-1 rounded">
              {formatTime(timeLeft)}
            </h1>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-2 px-4 py-1.5 bg-[#AF8BEF] text-white rounded-full font-medium hover:bg-[#ccb8ee] transition shadow-md text-sm"
          >
            <FaPlay />
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={reset}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow-sm"
          >
            <FaRedo className="text-gray-600 text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pomo;

import React, { useState, useEffect } from "react";

const modes = {
  pomodoro: 1500, // 25 minutes
  short: 300,     // 5 minutes
  long: 900       // 15 minutes
};

const PomoComp = () => {
  const [mode, setMode] = useState("pomodoro");
  const [timeLeft, setTimeLeft] = useState(modes[mode]);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);
  const [task, setTask] = useState("");

  useEffect(() => {
    setTimeLeft(modes[mode]);
    setIsRunning(false);
  }, [mode]);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setSessionCount((prev) => prev + 1);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (time) => {
    const min = Math.floor(time / 60).toString().padStart(2, "0");
    const sec = (time % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div className="w-full md:w-[92%] lg:w-[82%] xl:w-[72%] mx-auto mt-6 p-5 sm:p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-center">Focus Timer</h1>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
        {Object.keys(modes).map((m) => (
          <button
            key={m}
            className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
              mode === m ? "bg-purple-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => setMode(m)}
          >
            {m === "pomodoro" ? "Pomodoro" : m === "short" ? "Short Break" : "Long Break"}
          </button>
        ))}
      </div>

      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-5 sm:mb-6">{formatTime(timeLeft)}</div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6">
        <button
          className="w-full sm:w-auto bg-purple-500 text-white px-5 sm:px-6 py-2 rounded-md hover:bg-purple-600 cursor-pointer transition duration-200"
          onClick={() => setIsRunning((prev) => !prev)}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="w-full sm:w-auto bg-gray-200 px-5 sm:px-6 py-2 rounded-md cursor-pointer hover:bg-gray-300"
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(modes[mode]);
          }}
        >
          Reset
        </button>

      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1 text-sm sm:text-base">What are you working on?</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your current task..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
        <span>Sessions Completed Today: {sessionCount}</span>
        <span>Mode: {mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
      </div>
    </div>
  );
};

export default PomoComp;

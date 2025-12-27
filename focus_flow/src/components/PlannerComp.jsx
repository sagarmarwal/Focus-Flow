import React, { useState, useEffect } from "react";
import { FiEdit2, FiPlus } from "react-icons/fi";

const categories = {
  Work: { color: "bg-purple-100", icon: "📅" },
  Meal: { color: "bg-orange-100", icon: "🍴" },
  Break: { color: "bg-green-100", icon: "☕" },
  Personal: { color: "bg-blue-100", icon: "💖" },
  Fun: { color: "bg-pink-100", icon: "😊" },
};

const defaultSchedule = [
  { time: "06:00 AM", activity: "Wake up & morning routine", category: "Personal" },
  { time: "07:00 AM", activity: "Breakfast", category: "Meal" },
  { time: "08:00 AM", activity: "Start work - Important tasks", category: "Work" },
];

export default function PlannerComp() {
  const [schedule, setSchedule] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const saved = localStorage.getItem("planner");
    setSchedule(saved ? JSON.parse(saved) : defaultSchedule);
  }, []);

  useEffect(() => {
    localStorage.setItem("planner", JSON.stringify(schedule));
  }, [schedule]);

  const handleChange = (i, key, value) => {
    const updated = [...schedule];
    updated[i][key] = value;
    setSchedule(updated);
  };

  const handleAdd = () => {
    setSchedule([
      ...schedule,
      { time: "09:00 AM", activity: "New Task", category: "Work" },
    ]);
  };

  const handleFilter = (cat) => setFilter(cat);
  const filtered = filter === "All"
    ? schedule
    : schedule.filter((task) => task.category === filter);

  return (
    <div className="w-full md:w-[92%] lg:w-[82%] xl:w-[72%] mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Today's Schedule</h2>
      <div className="mb-4 flex flex-wrap gap-2">
        {[
          "All",
          ...Object.keys(categories)
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
              filter === cat ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((task, i) => (
          <div
            key={i}
            className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 rounded-lg ${categories[task.category]?.color || "bg-gray-100"}`}
          >
            <input
              value={task.time}
              onChange={(e) => handleChange(i, "time", e.target.value)}
              className="w-full sm:w-28 bg-transparent border-b border-gray-400 text-sm focus:outline-none"
            />
            <div className="flex-1 flex items-start sm:items-center gap-2">
              <span className="text-xl">{categories[task.category]?.icon}</span>
              <input
                value={task.activity}
                onChange={(e) => handleChange(i, "activity", e.target.value)}
                className="flex-1 bg-transparent border-b border-gray-400 text-sm focus:outline-none"
              />
            </div>
            <select
              value={task.category}
              onChange={(e) => handleChange(i, "category", e.target.value)}
              className="sm:ml-2 text-sm bg-white border rounded px-2 py-1"
            >
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button
        onClick={handleAdd}
        className="mt-6 flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 cursor-pointer w-full sm:w-auto"
      >
        <FiPlus /> Add Task
      </button>
    </div>
  );
}

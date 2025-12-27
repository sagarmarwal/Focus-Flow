// DailyReflectionJournal.jsx
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import CalendarComp from '../pages/Calender';

const DailyReflectionJournal = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [reflections, setReflections] = useState({});
  const [input, setInput] = useState('');

  const formattedDate = selectedDate.format('MMMM D, YYYY');

  // Load reflections from localStorage on mount
  useEffect(() => {
    const savedReflections = localStorage.getItem('dailyReflections');
    if (savedReflections) {
      setReflections(JSON.parse(savedReflections));
    }
  }, []);

  // Save reflections to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('dailyReflections', JSON.stringify(reflections));
  }, [reflections]);

  const handleUpdate = () => {
    setReflections({ ...reflections, [formattedDate]: input });
    setInput('');
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 sm:p-6 w-full md:w-[1200px] mx-auto md:mx-0 text-black">
      {/* Journal Section */}
      <div className="w-full md:w-[720px] p-4 sm:p-6 bg-gradient-to-br from-[#EADFFB] to-white rounded-3xl shadow-lg cursor-pointer transition-transform hover:translate-y-1 h-[360px] md:h-[450px] overflow-auto">
        <h2 className="text-lg sm:text-xl font-semibold mb-1">📝 Daily Reflection Journal</h2>
        <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{formattedDate}</p>
        <textarea
          rows={3}
          placeholder="How was your day today? (Just one line)"
          className="w-full p-3 border border-gray-200 rounded-lg mb-3 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleUpdate}
          className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          Update Today's Reflection
        </button>

        <div className="mt-5 sm:mt-6">
          <h3 className="text-gray-700 font-medium mb-2">Recent Reflection:</h3>
          <div className="bg-gray-100 p-3 rounded-md text-sm text-gray-800">
            {reflections[formattedDate] || 'No reflection for this day yet.'}
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="w-full md:flex-1 md:mt-0">
        <CalendarComp onDateSelect={setSelectedDate} />
      </div>
    </div>
  );
};

export default DailyReflectionJournal;

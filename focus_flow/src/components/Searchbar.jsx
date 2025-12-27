import React from 'react';
import { useLocation } from 'react-router-dom';
import './Searchbar.css';

const getTitleFromPath = (path) => {
  switch (path) {
    case '/':
      return 'Dashboard';
    case '/TodoPage':
      return 'To-Do List';
    case '/pomo':
      return 'Pomodoro Timer';
    case '/tips':
      return 'Productivity Tips';
    case '/music':
      return 'Focus Music';
    case '/planner':
      return 'Planner';
    case '/chatgpt':
      return 'Chat Assistant';
    case '/habit':
      return 'Habit Tracker';
    default:
      return 'FocusFlow';
  }
};

const Searchbar = () => {
  const location = useLocation();
  const pageTitle = getTitleFromPath(location.pathname);

  return (
    <div className="w-full md:w-[96%] lg:w-[88%] xl:w-[95%] mx-auto bg-gradient-to-br from-[#EADFFB] to-white rounded-2xl px-3 sm:px-6 py-4 sm:py-5 flex items-center justify-between shadow-lg">
      <h1 className="text-base sm:text-xl font-semibold ml-1 sm:ml-2 text-black truncate">{pageTitle}</h1>

      <button className="krit mr-2 sm:mr-4" aria-label="Notifications">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Searchbar;

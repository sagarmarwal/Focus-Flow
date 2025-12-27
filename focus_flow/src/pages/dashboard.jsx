import React from 'react';
import Todo from './todo';
import Pomo from './pomo';
import Searchbar from '../components/Searchbar';
import RandomQuoteBox from '../components/RandomQuoteBox';
import Sticky from '../components/Sticky';
import DailyReflectionJournal from '../components/DailyReflectionJournal';
import ProductivityChart from '../components/ProductivityChart';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f4] p-4 sm:p-6">
      {/* Search Bar */}
      <div className="mb-6 max-w-6xl mx-auto">
        <Searchbar />
      </div>
      
      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto">
        {/* Top Row - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-6">
          {/* Todo Section - Moved left */}
          <div className="w-full h-full -mr-2 md:mr-0">
            <Todo />
          </div>
          
          {/* Sticky Notes - Centered */}
          <div className="w-full h-full mx-auto">
            <Sticky />
          </div>
          
          {/* Pomodoro and Quote - Moved right */}
          <div className="w-full flex flex-col gap-3 -ml-2 md:ml-0">
            <div className="w-full">
              <Pomo />
            </div>
            <div className="w-full">
              <RandomQuoteBox />
            </div>
          </div>
        </div>
        
        {/* Middle Row - Daily Reflection */}
        <div className="w-full ml-[-22px]">
          <DailyReflectionJournal />
        </div>
        
        {/* Bottom Row - Productivity Chart */}
        <div className="w-full md:ml-28 lg:ml-28 xl:ml-28">
          <ProductivityChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


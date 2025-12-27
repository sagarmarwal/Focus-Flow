import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidee from './components/sidee';
import Todo from './pages/todo';
import Pomo from './pages/pomo';
import Dashboard from './pages/dashboard';
import './assets/fonts/font.css';
import Preloader from './components/Preloader';
import TodoPage from './pages/TodoPage'; // Assuming you have a TodoPage component
import PomoTimerPage from './pages/PomoTimerPage';
import Tips from './pages/Tips';
import Chatgpt from './pages/Chatgpt';
import Planner from './pages/Planner';
import ErrorPage from './pages/ErrorPage';
import Developer from './pages/Developer';


function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader ? (
        <Preloader onFinish={() => setShowPreloader(false)} />
      ) : (
        <div className="flex">
          <Sidee />
          <div className="flex-1 p-5 ml-0 md:ml-[240px]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/pomo" element={<PomoTimerPage/>} />
              <Route path="/TodoPage" element={<TodoPage/>} />
              <Route path="/Tips" element={<Tips/>} />
              <Route path="/chatgpt" element={<Chatgpt/>} />
              <Route path="/planner" element={<Planner/>} />
              <Route path="/developer" element={<Developer/>} />
              <Route path="*" element={<ErrorPage/>} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
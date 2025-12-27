import React, { useState, useRef, useEffect } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Todo = () => {
  const [todoList, setTodoList] = useState(() =>
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (!inputText) return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          if (!todo.completed) {
            // Track lifetime completed
            const current = parseInt(localStorage.getItem('lifetimeCompleted')) || 0;
            localStorage.setItem('lifetimeCompleted', (current + 1).toString());

            // Track per-day completed tasks
            const today = new Date().toISOString().split("T")[0]; // e.g., "2025-05-02"
            const stats = JSON.parse(localStorage.getItem('dailyTaskStats')) || {};
            stats[today] = (stats[today] || 0) + 1;
            localStorage.setItem('dailyTaskStats', JSON.stringify(stats));
          }
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="w-full sm:w-[340px] md:w-[350px] max-w-full bg-gradient-to-br from-[#f1e8ff] to-white rounded-3xl p-4 sm:p-5 md:p-6 shadow-xl relative transition-all duration-300 hover:translate-y-1 cursor-pointer">
      <div className="absolute -inset-1 rounded-[28px] blur-2xl opacity-30 bg-purple-300 z-0"></div>

      <div className="relative z-10 flex flex-col h-[420px] sm:h-[460px] md:h-[500px]">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-black text-xl sm:text-2xl">🗓️</span>
          <h1 className="text-lg sm:text-xl font-bold text-black tracking-wide font-sans">TO-DO LIST</h1>
        </div>

        <div className="flex items-center bg-white rounded-full px-3 sm:px-4 py-2 shadow-inner mb-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a new task"
            className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400 font-medium"
          />
          <button
            onClick={add}
            className="ml-2 w-8 h-8 bg-[#AF8BEF] hover:bg-[#c1a6f5] text-white rounded-full flex items-center justify-center transition"
          >
            <FaPlus size={12} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 pr-1">
          {todoList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-2 px-1 mb-2"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggle(item.id)}
                  className="w-5 h-5 accent-purple-500"
                />
                <span
                  className={`text-sm sm:text-md font-semibold ${
                    item.completed ? 'line-through text-gray-400' : 'text-black'
                  }`}
                >
                  {item.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(item.id)}
                className="text-gray-500 hover:text-red-400"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-3 text-xs sm:text-sm text-center text-gray-600 font-medium">
          ✅ {todoList.filter((t) => t.completed).length} of {todoList.length} tasks completed
        </div>
      </div>
    </div>
  );
};

export default Todo;

import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, id, completed, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2 transition-all duration-300">

      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer gap-2"
      >
        <img
          src={completed ? tick : not_tick}
          alt="checkmark"
          className="w-6 transition-transform duration-300"
        />
        
        <p
          className={`ml-4 text-[17px] transition-all duration-300 ${
            completed
              ? 'text-gray-400 italic opacity-70'
              : 'text-slate-700'
          }`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="delete"
        className="w-3.5 cursor-pointer hover:scale-110 transition-transform duration-200"
      />
    </div>
  );
};

export default TodoItems;


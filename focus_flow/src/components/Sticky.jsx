import React, { useState, useEffect } from 'react';
import { FaPlus, FaRegStickyNote } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const colors = ['#FDE68A', '#E0E7FF', '#FCE7F3', '#D1FAE5', '#F3E8FF'];

const Sticky = () => {
  const [notes, setNotes] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('stickyNotes')) || [
        {
          id: 'default',
          text: 'Welcome to FocusFlow! Use these sticky notes to jot down short reminders and stay focused throughout your day.',
          color: '#FEF3C7',
          isDefault: true,
        },
      ]
    );
  });

  const [input, setInput] = useState('');

  const addNote = () => {
    if (!input.trim() || input.length > 100) return;

    const newNote = {
      id: Date.now(),
      text: input.trim(),
      color: colors[Math.floor(Math.random() * colors.length)],
      isDefault: false,
    };

    setNotes((prev) => [...prev, newNote]);
    setInput('');
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="w-full sm:w-[340px] md:w-[350px] bg-white rounded-3xl p-4 sm:p-5 md:p-6 shadow-xl relative transition-all duration-300 ease-in-out transform hover:translate-y-2 cursor-pointer">
      <div className="absolute -inset-1 rounded-[28px] blur-2xl opacity-30 bg-purple-300 z-0"></div>

      <div className="relative z-10 h-[420px] sm:h-[460px] md:h-[500px] flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <FaRegStickyNote className="text-lg sm:text-xl text-purple-600" />
          <h2 className="text-base sm:text-lg font-bold text-gray-800 tracking-wide font-sans">Sticky Notes</h2>
        </div>

        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add short reminder (max 100 chars)"
            maxLength={100}
            className="flex-1 bg-transparent border-2 border-purple-400 rounded-l-full px-3 sm:px-4 py-2 outline-none text-sm text-gray-800 placeholder-gray-400 font-medium"
          />
          <button
            onClick={addNote}
            className="bg-purple-500 hover:bg-purple-600 text-white px-3 sm:px-4 rounded-r-full flex items-center justify-center"
          >
            <FaPlus />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 pr-1 flex flex-wrap gap-2 sm:gap-3">
          {notes.map((note) => (
            <div
              key={note.id}
              className="relative px-3 sm:px-4 py-3 rounded-xl text-sm font-medium text-gray-800 shadow-md w-[120px] sm:w-[140px] min-h-[100px] break-words"
              style={{ backgroundColor: note.color }}
            >
              <p className="pr-6">{note.text}</p>
              {!note.isDefault && (
                <button
                  onClick={() => deleteNote(note.id)}
                  className="absolute top-1 right-2 text-gray-600 hover:text-red-500"
                >
                  <IoClose size={18} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sticky;

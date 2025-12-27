// import React, { useState, useEffect } from 'react';
// import { FaTrash } from 'react-icons/fa';

// const colors = ['#FFFACD', '#E6E6FA', '#FFE4E1', '#E0FFFF', '#F5F5DC'];

// const StickyNotes = () => {
//   const [notes, setNotes] = useState(() => {
//     return JSON.parse(localStorage.getItem('stickyNotes')) || [];
//   });

//   const addNote = () => {
//     const newNote = {
//       id: Date.now(),
//       text: '',
//       color: colors[Math.floor(Math.random() * colors.length)],
//     };
//     setNotes(prev => [...prev, newNote]);
//   };

//   const updateNote = (id, newText) => {
//     const updated = notes.map(note =>
//       note.id === id ? { ...note, text: newText } : note
//     );
//     setNotes(updated);
//   };

//   const deleteNote = (id) => {
//     setNotes(notes.filter(note => note.id !== id));
//   };

//   useEffect(() => {
//     localStorage.setItem('stickyNotes', JSON.stringify(notes));
//   }, [notes]);

//   return (
//     <div className="flex flex-wrap gap-4 mt-4">
//       <button
//         onClick={addNote}
//         className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
//       >
//         + Add Sticky Note
//       </button>
//       {notes.map(note => (
//         <div
//           key={note.id}
//           className="w-60 h-60 p-4 rounded-xl shadow-lg relative transition-all duration-300 hover:scale-[1.02] cursor-pointer"
//           style={{ backgroundColor: note.color }}
//         >
//           <textarea
//             value={note.text}
//             onChange={(e) => updateNote(note.id, e.target.value)}
//             className="w-full h-full bg-transparent resize-none outline-none text-black font-medium"
//           />
//           <button
//             onClick={() => deleteNote(note.id)}
//             className="absolute top-2 right-2 text-red-500 hover:text-red-700"
//           >
//             <FaTrash />
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StickyNotes;


import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const colors = ['#FFFACD', '#E6E6FA', '#FFE4E1', '#E0FFFF', '#F5F5DC'];

const StickyNotes = () => {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem('stickyNotes')) || [];
  });

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      text: '',
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setNotes(prev => [...prev, newNote]);
  };

  const updateNote = (id, newText) => {
    const updated = notes.map(note =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updated);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl w-full max-w-5xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">📝 Sticky Notes</h2>
        <button
          onClick={addNote}
          className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
        >
          + Add Note
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {notes.map(note => (
          <div
            key={note.id}
            className="w-60 h-60 p-4 rounded-xl shadow-lg relative transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            style={{ backgroundColor: note.color }}
          >
            <textarea
              value={note.text}
              onChange={(e) => updateNote(note.id, e.target.value)}
              className="w-full h-full bg-transparent resize-none outline-none text-black font-medium"
            />
            <button
              onClick={() => deleteNote(note.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyNotes;

// import React, { useEffect, useState } from 'react';

// const quotes = [
//   { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
//   { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
//   { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
//   { text: "You can do anything, but not everything.", author: "David Allen" },
//   { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
//   { text: "It's not about having time, it's about making time.", author: "Unknown" },
//   { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
//   { text: "Small deeds done are better than great deeds planned.", author: "Peter Marshall" },
//   { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
//   { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
//   { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
//   { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
//   { text: "Productivity is never an accident. It is always the result of commitment to excellence.", author: "Paul J. Meyer" },
//   { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
//   { text: "Ordinary people think merely of spending time. Great people think of using it.", author: "Arthur Schopenhauer" },
//   { text: "Work hard in silence; let success make the noise.", author: "Frank Ocean" },
//   { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
//   { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
//   { text: "The best way out is always through.", author: "Robert Frost" },
//   { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
//   { text: "Productivity is about managing energy, not time.", author: "David Allen" },
//   { text: "If you spend too much time thinking about a thing, you’ll never get it done.", author: "Bruce Lee" },
//   { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
//   { text: "Amateurs sit and wait for inspiration. The rest of us just get up and go to work.", author: "Stephen King" },
//   { text: "A year from now you may wish you had started today.", author: "Karen Lamb" },
//   { text: "Done is better than perfect.", author: "Sheryl Sandberg" },
//   { text: "Clarity breeds mastery.", author: "Robin Sharma" },
//   { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
//   { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
//   { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
//   { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
//   { text: "When you feel like quitting, think about why you started.", author: "Unknown" },
//   { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
//   { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
//   { text: "Don’t be busy. Be productive.", author: "Unknown" },
//   { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
//   { text: "Lost time is never found again.", author: "Benjamin Franklin" },
//   { text: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr." },
//   { text: "Being busy is not the same as being productive.", author: "Unknown" },
//   { text: "Motivation gets you going, but discipline keeps you growing.", author: "John C. Maxwell" },
//   { text: "Nothing will work unless you do.", author: "Maya Angelou" },
//   { text: "Don’t confuse movement with progress.", author: "Denzel Washington" },
//   { text: "Fall in love with the process and the results will come.", author: "Eric Thomas" },
//   { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
//   { text: "The price of excellence is discipline.", author: "William Arthur Ward" },
//   { text: "Don’t limit your challenges, challenge your limits.", author: "Jerry Dunn" },
//   { text: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
//   { text: "It’s not always that we need to do more but rather that we need to focus on less.", author: "Nathan W. Morris" },
//   { text: "There is no substitute for hard work.", author: "Thomas Edison" }
// ];

// const RandomQuoteBox = () => {
//   const [quote, setQuote] = useState(quotes[0]);

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     setQuote(quotes[randomIndex]);
//   }, []);

//   return (
//     <div className="bg-white shadow-md rounded-xl p-4 text-gray-700 w-full max-w-[550px] min-h-[20px] ml-[-90px]">
//       <p className="text-lg italic mb-2">"{quote.text}"</p>
//       <p className="text-sm text-right font-semibold mt-[150px] ">– {quote.author}</p>
//     </div>
//   );
// };

// export default RandomQuoteBox;



import React, { useEffect, useState } from 'react';

const quotes = [
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
  { text: "You can do anything, but not everything.", author: "David Allen" },
  { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
  { text: "It's not about having time, it's about making time.", author: "Unknown" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Small deeds done are better than great deeds planned.", author: "Peter Marshall" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Productivity is never an accident. It is always the result of commitment to excellence.", author: "Paul J. Meyer" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Ordinary people think merely of spending time. Great people think of using it.", author: "Arthur Schopenhauer" },
  { text: "Work hard in silence; let success make the noise.", author: "Frank Ocean" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "The best way out is always through.", author: "Robert Frost" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Productivity is about managing energy, not time.", author: "David Allen" },
  { text: "If you spend too much time thinking about a thing, you’ll never get it done.", author: "Bruce Lee" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Amateurs sit and wait for inspiration. The rest of us just get up and go to work.", author: "Stephen King" },
  { text: "A year from now you may wish you had started today.", author: "Karen Lamb" },
  { text: "Done is better than perfect.", author: "Sheryl Sandberg" },
  { text: "Clarity breeds mastery.", author: "Robin Sharma" },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
  { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
  { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
  { text: "When you feel like quitting, think about why you started.", author: "Unknown" },
  { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "Don’t be busy. Be productive.", author: "Unknown" },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { text: "Lost time is never found again.", author: "Benjamin Franklin" },
  { text: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr." },
  { text: "Being busy is not the same as being productive.", author: "Unknown" },
  { text: "Motivation gets you going, but discipline keeps you growing.", author: "John C. Maxwell" },
  { text: "Nothing will work unless you do.", author: "Maya Angelou" },
  { text: "Don’t confuse movement with progress.", author: "Denzel Washington" },
  { text: "Fall in love with the process and the results will come.", author: "Eric Thomas" },
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
  { text: "The price of excellence is discipline.", author: "William Arthur Ward" },
  { text: "Don’t limit your challenges, challenge your limits.", author: "Jerry Dunn" },
  { text: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
  { text: "It’s not always that we need to do more but rather that we need to focus on less.", author: "Nathan W. Morris" },
  { text: "There is no substitute for hard work.", author: "Thomas Edison" }
];

const QuoteComp = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div
      className="w-full sm:w-[340px] md:w-[350px] h-[180px] sm:h-[210px] md:h-[230px] bg-gradient-to-br from-[#f5f0ff] to-[#ffffff] rounded-3xl shadow-xl p-4 sm:p-5 md:p-6 text-gray-700 transition-all duration-300 ease-in-out transform hover:translate-y-2 cursor-pointer overflow-hidden"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <p className="text-base sm:text-lg md:text-xl italic leading-relaxed text-purple-900 line-clamp-4">"{quote.text}"</p>
      <p className="text-right text-sm sm:text-base md:text-md font-semibold text-purple-700 mt-6 sm:mt-10 md:mt-[70px]">– {quote.author}</p>
    </div>
  );
};

export default QuoteComp;

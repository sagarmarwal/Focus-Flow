import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "Believe in yourself.",
  "Small steps lead to big changes.",
  "Dream it. Do it.",
  "Stay hungry, stay foolish.",
  "Success is no accident.",
  "Push yourself, because no one else will.",
  "Great things take time.",
  "Make it happen.",
  "Turn ideas into action.",
  "Discipline is the bridge to success.",
  "Start where you are. Use what you have.",
  "Keep going no matter what.",
  "Think big. Start small.",
  "Consistency creates results.",
  "Work hard in silence.",
  "Your future is created by what you do today.",
  "Believe you can and you're halfway there.",
  "Do something today your future self will thank you for.",
  "Stay focused and never give up.",
  "One day or day one. You decide.",
];

const Preloader = ({ onFinish }) => {
  const [quote, setQuote] = useState('');
  const [exitAnim, setExitAnim] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  const handleClick = () => {
    setExitAnim(true);
    setTimeout(() => {
      onFinish(); // load main app AFTER animation
    }, 1000); // match exit animation duration
  };

  return (
    <AnimatePresence>
      {!exitAnim && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 1 } }}
          onClick={handleClick}
          className="flex flex-col items-center justify-center h-screen bg-[#AF8BEF] text-center cursor-pointer px-4"
        >
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-semibold max-w-md text-white"
          >
            “{quote}”
          </motion.p>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 text-sm  text-white font-medium"
          >
            Click to enter
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

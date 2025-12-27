import React from 'react';
import Krit from '../assets/krit.png'; 

const Developer = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#EADFFB] to-white p-6 sm:p-8 rounded-xl shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
          Personal Productivity Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Your hub for productivity tools and developer information
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0">
  <img
    src={Krit}
    alt="Developer"
    className="rounded-full object-cover w-full h-full shadow"
  />
</div>


          <div className="text-center md:text-left">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Krit Garg</h2>
            <p className="text-blue-600 text-sm sm:text-base">Full Stack Developer / UI Enthusiast</p>

            <div className="mt-4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">About Me</h3>
              <p className="text-sm sm:text-base text-gray-700">
                I am the developer of this productivity dashboard. I'm passionate about creating user-centric digital experiences that blend functionality with beautiful design. With a focus on productivity tools and creative applications, I enjoy solving complex problems through clean code and intuitive interfaces. My goal is to build software that makes people's daily workflows more efficient and enjoyable.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">Node.js</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">Tailwind CSS</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">Python</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">JavaScript</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">HTML5</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">CSS3</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">Connect With Me</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
                <a href="https://github.com/kritgarg" target="_blank" rel="noreferrer"
                  className="flex items-center justify-center px-3 py-2 bg-purple-500 rounded hover:bg-purple-400 text-sm text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/krit--garg" target="_blank" rel="noreferrer"
                  className="flex items-center justify-center px-3 py-2 bg-purple-500 rounded hover:bg-purple-400 text-sm text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;

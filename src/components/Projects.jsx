import React from 'react';
import portfolioImage from '../assets/portfolioimg.png';


const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-purple-900 to-black text-white p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow hover:shadow-lg transition">
          <div className="w-full h-48 overflow-hidden rounded-lg mb-3">
            <img
              src="\assets\Task-manager.png"
              alt="Task Manager App"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold">Task Manager App</h3>
          <p className="text-sm mb-2">React, Node.js, SQL - Manage tasks efficiently</p>
          <a
            href="https://github.com/yourusername/task-manager"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        </div>

        {/* Portfolio Website */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow hover:shadow-lg transition">
          <div className="w-full h-48 overflow-hidden rounded-lg mb-3">
            <img
              src={portfolioImage}
              alt="Portfolio Website"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="text-sm mb-2">Tailwind CSS, EmailJS - This very site!</p>
          <a
            href="https://github.com/Sirivennela6/student-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

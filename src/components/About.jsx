import React from 'react';
import myImage from '../assets/siri profile.jpg'; 

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-purple-900 to-black text-white p-10">
      
      <div className="flex justify-center mb-6">
        <img
          src={myImage}
          alt="Bala Siri Vennela"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg object-cover"
        />
      </div>

     
      <h2 className="text-4xl font-bold mb-4 text-center font-[Poppins]">About Me</h2>

      <p className="max-w-4xl mx-auto text-lg text-center mb-6 leading-relaxed">
        I'm a passionate 3rd year Computer Science student with interests in full-stack development,
        UI/UX design, and AI.
      </p>

     
      <div className="max-w-4xl mx-auto text-lg space-y-4 leading-relaxed">
        <p><strong>Name:</strong> Bala Siri Vennela</p>

        <p><strong>Education:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Completed schooling at Vikas The Concept School</li>
          <li>Completed intermediate at Deeksha Junior College</li>
          <li>Currently studying at Christ University, Kengeri</li>
          <li>Completed 4th semester of B.Tech</li>
          <li>Pursuing CSE with Honours in Cyber Security</li>
        </ul>
<p>
  <strong>Programming Languages:</strong> C, Java, Python, HTML, CSS, JavaScript<br />
  <strong>Hobbies:</strong> Reading, Painting
</p>

      </div>
    </div>
  );
};

export default About;

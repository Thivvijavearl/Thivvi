import React from 'react';
import { useTheme } from '../ThemeContext';

function AboutSection() {
  const { theme } = useTheme();
  
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">👨‍💻 About Me</h2>
      <div className={`p-6 rounded-lg ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <p className="text-lg leading-relaxed ">
        Hello! I’m Thivvijavearl Thillainathan, a driven software engineer and Information Technology scholar at SLIIT, with a deep-seated passion for transforming ideas into innovative, impactful solutions.
        With a strong foundation in software development, I’m dedicated to crafting impactful tech solutions, bringing expertise in various programming languages, web frameworks, and mobile development tools.
        Known for my collaborative spirit and creative problem-solving, I’m always striving for growth and innovation. Beyond coding, my interests in photography, graphic design, and UI/UX design lend a unique perspective to my work.
        Let’s connect-I’m excited to share ideas, explore new technologies, and collaborate on meaningful projects!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
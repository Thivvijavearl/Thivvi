import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { Laptop } from 'lucide-react'; // Importing the laptop icon

function ProjectSection() {
  const { theme } = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null); // State to track the hovered project

  const projects = [
    {
      title: 'Online Laundry Management',
      tech: 'HTML, CSS, PHP',
      description: 'A web application for managing laundry services with user registration and authentication.'
    },
    {
      title: 'Online Music Store',
      tech: 'HTML, CSS, Java, MySQL',
      description: 'An e-commerce platform for music, focusing on user experience and efficient backend processing.'
    },
    {
      title: 'Online Optical Store',
      tech: 'ReactJS, ExpressJS, NodeJS, MongoDB',
      description: 'A digital library for optical products with a responsive design for better accessibility.'
    },
    {
      title: 'Photography Marketplace App',
      tech: 'Figma, Android Studio, Kotlin',
      description: 'A mobile app for photographers to sell and license images, featuring secure transactions.'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 flex items-center justify-center">
        <Laptop className="w-8 h-8 text-blue-500 mr-2" /> {/* Icon for web development projects */}
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`p-6 rounded-lg cursor-pointer transition-transform duration-300 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            } ${hoveredProject === index ? 'scale-105 z-10' : ''}`} // Scale effect on hover
            onMouseEnter={() => setHoveredProject(index)} // Set hovered project
            onMouseLeave={() => setHoveredProject(null)} // Reset hovered project
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <div className="text-blue-500">
              <span className="text-sm">Technologies: {project.tech}</span>
            </div>
            {/* Show project description on hover */}
            {hoveredProject === index && (
              <div className="mt-2 text-gray-700">
                <p>{project.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Overlay effect to blur background */}
      {hoveredProject !== null && (
        <div className="fixed inset-0 bg-black opacity-50 backdrop-blur-sm z-0" />
      )}
    </section>
  );
}

export default ProjectSection;

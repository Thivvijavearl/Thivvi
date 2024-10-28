import React from 'react';
import { Github, Linkedin, Camera, Palette, Plane, Instagram } from 'lucide-react'; // Added Instagram icon
import { useTheme } from '../ThemeContext';

function Footer() {
  const { theme } = useTheme();

  return (
    <footer id="contact" className={`py-12 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">Find me on</h2>
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/Thivvijavearl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/thivvijavearl-thillainathan-36b532240" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/tn_thivvi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-colors"
            >
              <Instagram className="w-6 h-6" /> {/* Instagram icon */}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Camera className="w-5 h-5" />
            <Palette className="w-5 h-5" />
            <Plane className="w-5 h-5" />
          </div>
          <div className="mt-4 text-center">
            <p>© 2024 Thivvijavearl Thillainathan - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

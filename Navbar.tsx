import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-sm ${
      theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">👋 Thivvijavearl Thillainathan</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 relative ${
              theme === 'dark' 
                ? 'bg-[#FFA500]/30' // Warmer orange color with 30% opacity
                : 'bg-[#4B0082]/30' // Deeper purple (indigo) with 30% opacity
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
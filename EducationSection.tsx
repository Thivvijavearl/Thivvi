import React from 'react';
import { useTheme } from '../ThemeContext';
import { BookOpen } from 'lucide-react'; // Importing an icon for a visual touch

function EducationSection() {
  const { theme } = useTheme();

  return (
    <section id="education" className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className="text-3xl font-bold mb-8 text-blue-600">🎓Education</h2>
      <div className="space-y-6">
        <div className={`p-6 rounded-lg shadow-lg ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'
        }`}>
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">BSc Special (Hons) in Information Technology</h3>
          </div>
          <p className="text-500">Sri Lanka Institute of Information Technology (SLIIT)</p>
          <p className="text-sm">2022 - Now</p>
        </div>
        
        <div className={`p-6 rounded-lg shadow-lg ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'
        }`}>
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">G.C.E A/L: Physical Science Stream</h3>
          </div>
          <p className="text-500">Nelliady Central College, Jaffna, Sri Lanka</p>
          <p className="text-sm">2012 - 2021</p>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;

import React from 'react';
import { useTheme } from '../ThemeContext';
import { Code, Laptop, Database } from 'lucide-react'; // Importing icons for visual enhancement

function SkillsSection() {
  const { theme } = useTheme();
  
  const skills = {
    'Programming Languages': ['Python', 'Java', 'C', 'C++'],
    'Web Development': ['ReactJS', 'HTML', 'PHP', 'Node.js', 'Express'],
    'Mobile Development': ['Kotlin'],
    'Databases': ['MongoDB', 'MySQL'],
    'Version Control': ['Git', 'GitHub'],
    'IDEs': ['VS Code', 'IntelliJ'],
    'UI/UX Design': ['Figma', 'Canva'],
    'Tools': ['Photoshop', 'Illustrator']
  };

  return (
    <section id="skills" className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 flex items-center justify-center">
        <Code className="w-8 h-8 text-blue-500 mr-2" /> {/* Icon in the heading */}
        Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'
          }`}>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">{category}</h3>
            </div>
            <ul className="space-y-2">
              {skillList.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;

import React from 'react';
import { useTheme } from './ThemeContext';
import Navbar from './component/Navbar';
import ProfileSection from './component/ProfileSection';
import AboutSection from './component/AboutSection';
import EducationSection from './component/EducationSection';
import SkillsSection from './component/SkillSection';
import ProjectsSection from './component/ProjectSection';
import Footer from './component/Footer';

function App() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <ProfileSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
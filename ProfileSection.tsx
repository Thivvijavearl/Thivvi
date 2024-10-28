import React from 'react';
import { Mail, MapPin } from 'lucide-react'; // Updated import to include MapPin icon
import { useTheme } from '../ThemeContext';
import profileImage from '../assests/profile.jpg';

function ProfileSection() {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Thivvijavearl Thillainathan</h1>
        <h2 className="text-2xl text-blue-500 mb-4">Software Engineer</h2>
        <div className="flex flex-col space-y-2">
          <a href="mailto:thillaithivvi2001@gmail.com" className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
            <Mail className="w-5 h-5" />
            <span>thillaithivvi2001@gmail.com</span>
          </a>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" /> {/* Updated icon to MapPin */}
            <span>Malabe, Sri Lanka</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 mt-8 md:mt-0">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg"
        />
      </div>
    </section>
  );
}

export default ProfileSection;

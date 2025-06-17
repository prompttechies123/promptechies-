import React from 'react';
import { ChevronDown, Zap, Code2, Lightbulb } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-bounce slow"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg rotate-45 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 flex items-center justify-center">
            <img 
              src="/CMRIT PROMPT _TECHIES.png" 
              alt="Prompt Techies Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Prompt Techies
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
            Deploy. Develop. Dream.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A student-led technical club at CMR Institute of Technology, Hyderabad, 
            fostering innovation, coding excellence, AI exploration, and creative development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="font-medium text-gray-700">Innovation</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Code2 className="w-5 h-5 text-blue-500" />
            <span className="font-medium text-gray-700">Coding</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Lightbulb className="w-5 h-5 text-green-500" />
            <span className="font-medium text-gray-700">AI & Creativity</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Learn More
            <ChevronDown className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#join"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Join Our Club
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-blue-600" />
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Target, Eye, Trophy, Users, Code, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Prompt Techies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of tech innovators at CMR Institute of Technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To create a thriving ecosystem of innovative minds where students can explore, 
              learn, and push the boundaries of technology. We envision a community that 
              bridges the gap between academic learning and real-world application, 
              fostering creativity and technical excellence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide hands-on learning experiences through workshops, hackathons, and 
              collaborative projects. We aim to develop technical skills, promote innovation, 
              and create opportunities for students to showcase their talents while building 
              a strong network of future tech leaders.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-3xl font-bold mb-4">Our Achievements</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Building a legacy of innovation and excellence in the tech community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-blue-100">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">20+</div>
              <div className="text-blue-100">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">10+</div>
              <div className="text-blue-100">Successful Projects</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Technical Excellence</h4>
            <p className="text-gray-600">
              Mastering cutting-edge technologies and programming languages through 
              hands-on projects and collaborative learning.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation Hub</h4>
            <p className="text-gray-600">
              Fostering creative thinking and breakthrough solutions to real-world 
              problems through AI, machine learning, and emerging technologies.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Community Building</h4>
            <p className="text-gray-600">
              Creating lasting connections and mentorship opportunities that extend 
              beyond college, building a strong professional network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
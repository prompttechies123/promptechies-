import React from 'react';
import { Crown, Shield, Code, Users, Palette, FileText, MessageSquare, Image, Megaphone, Settings, Sparkles, Brain } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Shaik Saahil Zameer",
      role: "Founder President",
      icon: Crown,
      category: "Leadership",
      color: "from-purple-600 to-purple-800"
    },
    {
      name: "Varshitha Reddy",
      role: "Founder Vice President",
      icon: Shield,
      category: "Leadership",
      color: "from-indigo-600 to-indigo-800"
    },
    {
      name: "Maheswar",
      role: "Code Crew",
      icon: Code,
      category: "Development",
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Mohan Gopi",
      role: "HR",
      icon: Users,
      category: "Operations",
      color: "from-green-600 to-green-800"
    },
    {
      name: "Lakshmi Prasanna",
      role: "Digital Maven",
      icon: Sparkles,
      category: "Digital",
      color: "from-pink-600 to-pink-800"
    },
    {
      name: "Jyothi Swaroop",
      role: "Digital Maven",
      icon: Sparkles,
      category: "Digital",
      color: "from-pink-600 to-pink-800"
    },
    {
      name: "Muhammad Zaid",
      role: "Digital Maven",
      icon: Sparkles,
      category: "Digital",
      color: "from-pink-600 to-pink-800"
    },
    {
      name: "Kiran Thalari",
      role: "Documentation Head",
      icon: FileText,
      category: "Operations",
      color: "from-orange-600 to-orange-800"
    },
    {
      name: "Ravi Kiran Kandregula",
      role: "Chat GPT Lead",
      icon: MessageSquare,
      category: "AI",
      color: "from-teal-600 to-teal-800"
    },
    {
      name: "Harsha Vardhan",
      role: "Pixel Pals",
      icon: Image,
      category: "Design",
      color: "from-red-600 to-red-800"
    },
    {
      name: "Nara Sai Deepak",
      role: "Pixel Pals",
      icon: Image,
      category: "Design",
      color: "from-red-600 to-red-800"
    },
    {
      name: "Yashwanth Kumar",
      role: "PR and Logistics Head",
      icon: Megaphone,
      category: "Operations",
      color: "from-yellow-600 to-yellow-800"
    },
    {
      name: "Polisetty Navya Sree",
      role: "Steering Committee",
      icon: Settings,
      category: "Management",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Sheetal",
      role: "Steering Committee",
      icon: Settings,
      category: "Management",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Vyshali",
      role: "Steering Committee",
      icon: Settings,
      category: "Management",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Chandu",
      role: "Graphic Designer",
      icon: Palette,
      category: "Design",
      color: "from-purple-600 to-purple-800"
    },
    {
      name: "Durga Prasad",
      role: "Creative Division Committee",
      icon: Palette,
      category: "Creative",
      color: "from-indigo-600 to-indigo-800"
    },
    {
      name: "Vamshi",
      role: "Creative Division Committee",
      icon: Palette,
      category: "Creative",
      color: "from-indigo-600 to-indigo-800"
    },
    {
      name: "Neeli Vaishnavi",
      role: "AI Lead",
      icon: Brain,
      category: "AI",
      color: "from-cyan-600 to-cyan-800"
    },
    {
      name: "Sriya Kandukuri",
      role: "Tech Lead",
      icon: Brain,
      category: "AI specialist",
      color: "from-cyan-600 to-cyan-800"
    },
    {
      name: "Manaswini Reddy",
      role: "Public Relations lead ",
      icon: Palette,
      category: "Creative",
      color: "from-indigo-600 to-indigo-800"
    }
  ];

  const categories = [
    { name: "Leadership", color: "bg-purple-100 text-purple-800" },
    { name: "Development", color: "bg-blue-100 text-blue-800" },
    { name: "Operations", color: "bg-green-100 text-green-800" },
    { name: "Digital", color: "bg-pink-100 text-pink-800" },
    { name: "AI", color: "bg-teal-100 text-teal-800" },
    { name: "Design", color: "bg-red-100 text-red-800" },
    { name: "Management", color: "bg-gray-100 text-gray-800" },
    { name: "Creative", color: "bg-indigo-100 text-indigo-800" }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Amazing Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate individuals driving innovation and excellence in technology
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <span
              key={category.name}
              className={`px-4 py-2 rounded-full text-sm font-medium ${category.color}`}
            >
              {category.name}
            </span>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <member.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  categories.find(cat => cat.name === member.category)?.color || 'bg-gray-100 text-gray-800'
                }`}>
                  {member.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Join Our Team?</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for passionate students to join our growing community of tech enthusiasts.
            </p>
            <a
              href="#join"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Prompt Techies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
import React from 'react';
import { Calendar, Users, Trophy, Code, Lightbulb, Zap, Palette, Music, Cpu, Sparkles, Bot, Wrench } from 'lucide-react';

const Events = () => {
  const pastEvents = [
    {
      title: "Cybersphere",
      date: "29-Feb-2024",
      description: "An AI art event where students explored and generated AI-based visual designs.",
      type: "AI Art",
      icon: Palette,
      color: "from-purple-600 to-purple-800",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Spectrum Sparks",
      date: "18-Mar-2024",
      description: "Students created AI-generated music, stories, and visuals. Explored advanced creative AI tools.",
      type: "Creative AI",
      icon: Music,
      color: "from-pink-600 to-pink-800",
      image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "JNTU Tech Fest 2K24",
      date: "23-Apr-2024",
      description: "A collaboration with JNTUH. Workshops and networking sessions focused on AI, IoT, and software development.",
      type: "Tech Fest",
      icon: Cpu,
      color: "from-blue-600 to-blue-800",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "AI Ganesha",
      date: "06-Sep-2024",
      description: "A festival-themed AI event blending tradition with tech. AI-generated devotional art and creative expressions.",
      type: "Festival AI",
      icon: Sparkles,
      color: "from-orange-600 to-orange-800",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Sreevision 2024 (SNIST)",
      date: "26-Oct-2024",
      description: "CMRIT Prompt Techies represented the college in coding, robotics, and AI workshops.",
      type: "Competition",
      icon: Trophy,
      color: "from-green-600 to-green-800",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const upcomingEvents = [
    {
      title: "Swait AI",
      date: "18-Feb-2025",
      description: "A speed-based AI hack featuring real-time prompt generation using LLMs and custom tools.",
      type: "AI Hackathon",
      icon: Zap,
      color: "from-red-600 to-red-800",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "JNTU Tech Fest 2K25",
      date: "23-Apr-2025",
      description: "A collaboration with JNTUH. Workshops and networking sessions focused on AI, IoT, and software development.",
      type: "Tech Fest",
      icon: Cpu,
      color: "from-blue-600 to-blue-800",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "NoCode AI Workshop",
      date: "30-Apr-2025",
      description: "Workshop focused on building AI models using no-code platforms like Boalt.AI, Peltarion, and Bubble.",
      type: "Workshop",
      icon: Wrench,
      color: "from-teal-600 to-teal-800",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const EventCard = ({ event, isPast = true }) => (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Event Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${event.color} shadow-lg`}>
            <event.icon className="w-3 h-3 mr-1" />
            {event.type}
          </span>
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3 text-blue-600" />
            <span className="text-xs font-medium text-gray-900">{event.date}</span>
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {event.title}
          </h3>
          <div className={`w-10 h-10 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center flex-shrink-0 ml-3`}>
            <event.icon className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Status Indicator */}
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            isPast 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {isPast ? 'Completed' : 'Upcoming'}
          </span>
          
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Events & Activities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students through innovative AI experiences, creative workshops, and collaborative tech events
          </p>
        </div>

        {/* Past Events */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Past Events Highlights</h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} event={event} isPast={true} />
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Don't miss out on our exciting upcoming activities! Mark your calendars and join us for innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
                
                <h4 className="font-bold text-xl mb-3 text-white">{event.title}</h4>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">{event.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-blue-200">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <button className="text-white hover:text-blue-200 text-sm font-medium transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Event Updates
              <Calendar className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Event Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">5+</div>
            <div className="text-gray-600 text-sm">AI Art Events</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8+</div>
            <div className="text-gray-600 text-sm">Total Events</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-gray-600 text-sm">Participants</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3+</div>
            <div className="text-gray-600 text-sm">Upcoming Events</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
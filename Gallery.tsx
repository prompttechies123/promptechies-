import React from 'react';
import { Camera, Users, Award, Code } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Hackathon Winners",
      category: "Competitions",
      url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Celebrating our hackathon champions"
    },
    {
      id: 2,
      title: "Workshop Session",
      category: "Learning",
      url: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Interactive coding workshop in progress"
    },
    {
      id: 3,
      title: "Team Collaboration",
      category: "Teamwork",
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Members working together on projects"
    },
    {
      id: 4,
      title: "Tech Talk",
      category: "Events",
      url: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Expert speaker sharing industry insights"
    },
    {
      id: 5,
      title: "Project Demo",
      category: "Innovation",
      url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Students showcasing their innovations"
    },
    {
      id: 6,
      title: "Networking Event",
      category: "Community",
      url: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Building connections in the tech community"
    },
    {
      id: 7,
      title: "Awards Ceremony",
      category: "Recognition",
      url: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Recognizing outstanding contributions"
    },
    {
      id: 8,
      title: "Behind the Scenes",
      category: "Culture",
      url: "https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Fun moments during event preparation"
    }
  ];

  const categories = [
    { name: "All", icon: Camera },
    { name: "Competitions", icon: Award },
    { name: "Learning", icon: Code },
    { name: "Events", icon: Users }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of innovation, learning, and community building
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block bg-blue-600 text-xs font-medium px-2 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <h4 className="text-lg font-bold mb-1">{image.title}</h4>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <Camera className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Be Part of Our Story</h3>
            <p className="text-gray-600 mb-6">
              Join us in creating memorable experiences and innovative solutions. Your journey starts here!
            </p>
            <a
              href="#join"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
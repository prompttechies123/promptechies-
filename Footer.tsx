import React from 'react';
import { Heart, ExternalLink, Instagram, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" }
  ];

  const resources = [
    { name: "Join Us", href: "#join" },
    { name: "Contact", href: "#contact" },
    { name: "Recruitment Form", href: "https://forms.gle/FCvFaMWWVcoztz9J7", external: true },
    { name: "CMRIT Website", href: "https://cmrithyderabad.edu.in", external: true }
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      link: "https://www.linkedin.com/in/cmrit-prompt-techies-9a705a370/?originalSubdomain=in", 
      color: "hover:text-blue-500",
      label: "Follow us on LinkedIn"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      link: "https://www.instagram.com/cmrit_prompt_techies/", 
      color: "hover:text-pink-400",
      label: "Follow us on Instagram"
    },
    { 
      name: "GitHub", 
      icon: Github, 
      link: "https://github.com/prompttechies123", 
      color: "hover:text-gray-300",
      label: "View our projects on GitHub"
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      link: "https://x.com/promptechies", 
      color: "hover:text-blue-400",
      label: "Follow us on X (Twitter)"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/CMRIT PROMPT _TECHIES.png" 
                alt="Prompt Techies Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">Prompt Techies</h3>
                <p className="text-blue-300 text-sm">CMRIT Hyderabad</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-medium">
              Deploy. Develop. Dream.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A student-led technical club fostering innovation, coding excellence, 
              AI exploration, and creative development at CMR Institute of Technology, Hyderabad.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>prompt_techies@cmrithyderabad.edu.in</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>CMR Institute of Technology, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="ml-1 w-4 h-4" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Connect With Us Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-white mb-4">Connect With Us</h4>
            <p className="text-gray-400 mb-6">Stay connected and follow our journey</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center space-y-2 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1`}
                  title={social.label}
                >
                  <social.icon className={`w-8 h-8 text-gray-400 ${social.color} transition-colors duration-300`} />
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* WhatsApp Group Link */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 max-w-md mx-auto">
              <h5 className="text-white font-bold mb-2">Join Our WhatsApp Group</h5>
              <p className="text-green-100 text-sm mb-4">Get real-time updates and connect with fellow members</p>
              <a
                href="https://chat.whatsapp.com/D9akvV5WlvN8bJW78GIG9Y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
                Join WhatsApp
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Prompt Techies
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © 2024 Prompt Techies, CMRIT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
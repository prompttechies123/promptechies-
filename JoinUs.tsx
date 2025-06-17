import React from 'react';
import { UserPlus, CheckCircle, ExternalLink, Users, Code, Lightbulb, Trophy } from 'lucide-react';

const JoinUs = () => {
  const benefits = [
    {
      icon: Code,
      title: "Skill Development",
      description: "Learn cutting-edge technologies and programming languages"
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with like-minded peers and industry professionals"
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Participate in hackathons, coding contests, and tech challenges"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Work on real-world projects and innovative solutions"
    }
  ];

  const requirements = [
    "Currently enrolled at CMR Institute of Technology",
    "Passion for technology and innovation",
    "Willingness to learn and collaborate",
    "Commitment to club activities and values"
  ];

  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join <span className="text-blue-600">Prompt Techies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to embark on an exciting journey of learning, innovation, and growth? 
            Become part of our thriving tech community!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Join Us?</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Requirements</h3>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
              <div className="flex items-start">
                <UserPlus className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Application Process</h4>
                  <p className="text-yellow-700 text-sm">
                    Fill out our recruitment form, attend an informal interview, 
                    and join our orientation session to get started!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <UserPlus className="w-20 h-20 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Apply Now to Join Prompt Techies</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards joining our amazing community of tech enthusiasts. 
            Fill out our recruitment form and we'll get back to you soon!
          </p>

          <div className="flex flex-col items-center space-y-6">
            <a
              href="https://forms.gle/FCvFaMWWVcoztz9J7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Fill the Form
              <ExternalLink className="ml-3 w-6 h-6" />
            </a>
            
            <div className="flex items-center space-x-2 text-blue-200 text-sm">
              <span>✨ Opens in a new tab</span>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-200 mb-2">50+</div>
              <div className="text-blue-100">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-200 mb-2">20+</div>
              <div className="text-blue-100">Events Per Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-200 mb-2">100%</div>
              <div className="text-blue-100">Growth Opportunities</div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h4>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Submit Form</h5>
                  <p className="text-gray-600 text-sm">Complete the recruitment form with your details</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Interview</h5>
                  <p className="text-gray-600 text-sm">Attend a casual interview with our team</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Welcome!</h5>
                  <p className="text-gray-600 text-sm">Join our orientation and start your journey</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                Have questions? <a href="#contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact us</a> anytime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
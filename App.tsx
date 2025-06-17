import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Events from './components/Events';
import Gallery from './components/Gallery';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Team />
      <Events />
      <Gallery />
      <JoinUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
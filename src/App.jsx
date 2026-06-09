import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <section id="contact" className="min-h-screen bg-gray-800 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Contact Section</h2>
      </section>
    </div>
  )
}

export default App

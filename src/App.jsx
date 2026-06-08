import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <section id="skills" className="min-h-screen bg-gray-900 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Skills Section</h2>
      </section>
      <section id="projects" className="min-h-screen bg-gray-800 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Projects Section</h2>
      </section>
      <section id="experience" className="min-h-screen bg-gray-900 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Experience Section</h2>
      </section>
      <section id="contact" className="min-h-screen bg-gray-800 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Contact Section</h2>
      </section>
    </div>
  )
}

export default App

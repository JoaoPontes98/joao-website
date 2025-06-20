import React, { useState } from 'react';
import { Home, User, FolderDot, Mail, Github, Linkedin, ExternalLink } from 'lucide-react'; // Using lucide-react for icons

// Main App Component
const App = () => {
  // State to manage which section is currently active for navigation
  const [activeSection, setActiveSection] = useState('home');

  // Function to scroll to a specific section smoothly
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-inter">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-400">YourName</div>
          <div className="flex space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-300
                ${activeSection === 'home' ? 'bg-indigo-700 text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
            >
              <Home size={18} />
              <span className="hidden sm:inline">Home</span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-300
                ${activeSection === 'about' ? 'bg-indigo-700 text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
            >
              <User size={18} />
              <span className="hidden sm:inline">About</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-300
                ${activeSection === 'projects' ? 'bg-indigo-700 text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
            >
              <FolderDot size={18} />
              <span className="hidden sm:inline">Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-300
                ${activeSection === 'contact' ? 'bg-indigo-700 text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
            >
              <Mail size={18} />
              <span className="hidden sm:inline">Contact</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 pt-20 pb-8">
        {/* Home Section */}
        <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center p-8 bg-gray-800 bg-opacity-50 rounded-xl shadow-2xl mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Hello, I'm <span className="text-indigo-400">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            A passionate Full-Stack Software Engineer building robust and scalable applications.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              onClick={() => scrollToSection('projects')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-indigo-600 text-indigo-300 hover:text-white hover:bg-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 p-8 bg-gray-800 bg-opacity-50 rounded-xl shadow-2xl mb-12">
          <h2 className="text-4xl font-bold text-center text-white mb-10">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
            <p>
              Hi there! I'm <span className="text-indigo-400">Your Name</span>, a dedicated Full-Stack Software Engineer with a passion for creating impactful and efficient software solutions. My journey in technology began with a fascination for how things work, evolving into a drive to build them.
            </p>
            <p>
              I specialize in both front-end and back-end development, comfortable with various technologies and frameworks. On the front-end, I enjoy crafting intuitive user interfaces using **React, HTML5, and CSS3 (Tailwind CSS)**. For the back-end, I leverage **Node.js, Python (Django/Flask), and various database systems like PostgreSQL and MongoDB** to build robust and scalable APIs and services.
            </p>
            <p>
              My goal is to develop clean, maintainable, and high-performance code that solves real-world problems. I'm always eager to learn new technologies and improve my skills, believing that continuous learning is key in the ever-evolving tech landscape.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails, delving into a good book, or experimenting with new recipes in the kitchen. I'm excited to connect and collaborate on innovative projects!
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 p-8 bg-gray-800 bg-opacity-50 rounded-xl shadow-2xl mb-12">
          <h2 className="text-4xl font-bold text-center text-white mb-10">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project Card 1 */}
            <div className="bg-gray-700 rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-indigo-500/50">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Project Alpha</h3>
              <p className="text-gray-300 mb-4">
                A full-stack web application designed to manage personal finance, offering features like transaction tracking, budget planning, and spending analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">React</span>
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">Express</span>
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">MongoDB</span>
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername/project-alpha" // Replace with actual GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-300 hover:text-white transition-colors duration-200"
                >
                  <Github size={20} className="mr-1" /> GitHub
                </a>
                <a
                  href="https://project-alpha-demo.netlify.app" // Replace with actual live demo link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-300 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-1" /> Live Demo
                </a>
              </div>
            </div>

            {/* Example Project Card 2 (Duplicate for layout demonstration) */}
            <div className="bg-gray-700 rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-indigo-500/50">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Project Beta</h3>
              <p className="text-gray-300 mb-4">
                A machine learning model deployed as a web service for real-time sentiment analysis of text data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">Python</span>
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">Flask</span>
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">TensorFlow</span>
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">React</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername/project-beta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-300 hover:text-white transition-colors duration-200"
                >
                  <Github size={20} className="mr-1" /> GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-300 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-1" /> Live Demo
                </a>
              </div>
            </div>

            {/* Example Project Card 3 (Duplicate for layout demonstration) */}
            <div className="bg-gray-700 rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-indigo-500/50">
              <h3 className="2xl font-semibold text-indigo-400 mb-3">Project Gamma</h3>
              <p className="text-gray-300 mb-4">
                A mobile-first responsive landing page for a fictional tech startup, focusing on modern UI/UX principles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">HTML5</span>
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">CSS3</span>
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full">Responsive Design</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername/project-gamma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-300 hover:text-white transition-colors duration-200"
                >
                  <Github size={20} className="mr-1" /> GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-300 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-1" /> Live Demo
                </a>
              </div>
            </div>

            {/* Add more project cards here following the same structure */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 p-8 bg-gray-800 bg-opacity-50 rounded-xl shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-white mb-10">Get In Touch</h2>
          <div className="max-w-xl mx-auto text-center text-lg text-gray-300 space-y-6">
            <p>
              I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a
                href="mailto:your.email@example.com" // Replace with your email
                className="flex items-center space-x-3 text-indigo-300 hover:text-white transition-colors duration-300 text-xl"
              >
                <Mail size={24} /> <span>your.email@example.com</span>
              </a>
              <div className="flex space-x-6 pt-4">
                <a
                  href="https://github.com/yourusername" // Replace with your GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <Github size={30} />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin size={30} />
                </a>
              </div>
            </div>
            <p className="pt-8 text-sm text-gray-400">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;


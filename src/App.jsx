import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import CosmicBackground from './components/CosmicBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import portfolioData from './data/portfolio.json';

function App() {
  const [data, setData] = useState(portfolioData);

  useEffect(() => {
    setData(portfolioData);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col relative">
          <CosmicBackground />
          <Navbar personalData={data.personal} />
          <main className="flex-1 relative z-10">
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="/about" element={<About data={data} />} />
              <Route path="/work" element={<Work data={data} />} />
              <Route path="/education" element={<Education data={data} />} />
              <Route path="/skills" element={<Skills data={data} />} />
              <Route path="/projects" element={<Projects data={data} />} />
              <Route path="/resume" element={<Resume data={data} />} />
            </Routes>
          </main>
          <Footer personalData={data.personal} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

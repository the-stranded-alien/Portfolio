import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import EducationPage from './pages/EducationPage';
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';
import CertificationPage from './pages/CertificationPage';
import CoursePage from './pages/CoursePage';
import ResumePage from './pages/ResumePage';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/skill" element={<SkillPage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/certification" element={<CertificationPage />} />
                <Route path="/course" element={<CoursePage />} />
                <Route path="/resume" element={<ResumePage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

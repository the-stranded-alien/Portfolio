import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import CoursesPage from './pages/CoursesPage';
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
                <Route path="/skill" element={<SkillsPage />} />
                <Route path="/project" element={<ProjectsPage />} />
                <Route path="/certification" element={<CertificationsPage />} />
                <Route path="/course" element={<CoursesPage />} />
                <Route path="/resume" element={<ResumePage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

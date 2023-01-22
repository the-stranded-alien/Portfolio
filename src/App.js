import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import CertificationsPage from "./pages/CertificationsPage";
import CoursesPage from "./pages/CoursesPage";
import EducationPage from "./pages/EducationPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import SkillsPage from "./pages/SkillsPage";
import WorkPage from "./pages/WorkPage";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/work" element={<WorkPage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/education" element={<EducationPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/certifications" element={<CertificationsPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
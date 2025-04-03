import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AppRoutes = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="contact" element={<Contact/>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
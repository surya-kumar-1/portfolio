import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import LandingPage from './components/HomePage/LandingPage.jsx';
import Lama from "./components/HomePage/Lama.jsx";
import Enchroma from "./components/HomePage/Enchroma.jsx";
import ContactForm from "./components/HomePage/ContactForm.jsx";
import MainAbout from "./components/AboutPage/MainAbout.jsx";
import Enchromaai from "./components/WorksPage/Enchromaai.jsx";
import LamaAi from "./components/WorksPage/LamaAi.jsx";
import SocialMedia from "./components/WorksPage/SocialMedia.jsx";
import SmCardOne from '../src/components/WorksPage/SmCard-1.jsx';
import SmCardTwo from '../src/components/WorksPage/SmCard-2.jsx';
import './App.css';
import MainIllustration from '../src/components/WorksPage/MainIllustration.jsx';
import About from '../src/components/HomePage/About.jsx';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Route for Home */}
                <Route path="/portfolio" element={
                    <>
                        <LandingPage />
                        <Lama
                            title="Brand Identity"
                            description="A brand identity is a set of tools or elements used by a company to create a brand image. A brand image is a customers' perception of the brand consisting of various associations related to it and memories about interacting with it."
                            buttonText="Read Process"
                            imageSrc="assets/img-1.png"
                            dappa1='assets/SATIONARY.png'
                            navigateTo="/portfolio/enchroma"
                        />
                        <Enchroma
                            title="Logofolio"
                            description="A logo is a symbol or design used to identify a company or organization, as well as its products, services, employees, etc"
                            buttonText="Get Started"
                            imageSrc="assets/img-2.png"
                            dappa1='assets/logofolio-22.png'
                            navigateTo="/portfolio/LamaAi"
                        />
                        <Lama
                            title="Social Media Graphics"
                            description="Social design is the application of design methodologies in order to tackle complex human issues, placing the social issues as the priority"
                            buttonText="Read Process"
                            imageSrc="assets/img-1.png"
                            dappa1='assets/smg-22.png'
                            navigateTo="/portfolio/SocialMedia"
                        />
                        <Enchroma
                            title="Illustration and Custom Art"
                            description="CUSTOM ARTS are made for me according to My wishes."
                            buttonText="Read Process"
                            imageSrc="assets/img-2.png"
                            dappa1='assets/healthy-food-amico.png'
                            navigateTo="/portfolio/MainIllustration"
                        />
                        <ContactForm />
                        <About />
                    </>
                } />

                {/* Route for About Page */}
                <Route path="/portfolio/about" element={<MainAbout />} />
                <Route path="/portfolio/enchroma" element={<Enchromaai />} />
                <Route path="/portfolio/LamaAi" element={<LamaAi />} />
                <Route path="/portfolio/SocialMedia" element={<SocialMedia />} />
                <Route path="/portfolio/MainIllustration" element={<MainIllustration />} />
                <Route path="/portfolio/contact" element={<ContactForm />} />

                {/* Routes for Cards */}
                <Route path="/portfolio/SocialMedia/first-card" element={<SmCardOne />} />
                <Route path="/portfolio/SocialMedia/second-card" element={<SmCardTwo />} />
            </Routes>
        </Router>
    );
}

export default App;

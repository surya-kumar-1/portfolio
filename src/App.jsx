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
import About from '../src/components/HomePage/About.jsx'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Route for Home */}
                <Route path="/" element={
                    <>
                        <LandingPage />
                        <Lama
                            title="Brand Identity"
                            description="A brand identity is a set of tools or elements used by a company to create a brand image. A brand image is a customers' perception of the brand consisting of various associations related to it and memories about interacting with it."
                            buttonText="Read Process"
                            imageSrc="../src/assets/img-1.png"
                            dappa1='../src/assets/SATIONARY.png'
                            navigateTo="/enchroma"
                        />
                        <Enchroma
                            title="Logofolio"
                            description="A logo is a symbol or design used to identify a company or organization, as well as its products, services, employees, etc"
                            buttonText="Get Started"
                            imageSrc="../src/assets/img-2.png"
                            dappa1='../src/assets/logofolio-22.png'
                            navigateTo="/LamaAi"
                        />
                        <Lama
                            title="Social Media Graphics"
                            description="Social design is the application of design methodologies in order to tackle complex human issues, placing the social issues as the priority"
                            buttonText="Read Process"
                            imageSrc="../src/assets/img-1.png"
                            dappa1='../src/assets/smg-22.png'
                            navigateTo="/SocialMedia"
                        />
                        <Enchroma
                            title="Illustration and Custom Art"
                            description="CUSTOM ARTS are made for me according to My wishes."
                            buttonText="Read Process"
                            imageSrc="../src/assets/img-2.png"
                            dappa1='../src/assets/healthy-food-amico.png'
                            navigateTo="/MainIllustration"
                        />
                        <ContactForm />
                        <About />
                    </>
                } />

                {/* Route for About Page */}
                <Route path="/about" element={<MainAbout />} />
                <Route path="/enchroma" element={<Enchromaai />} />
                <Route path="/LamaAi" element={<LamaAi />} />
                <Route path="/SocialMedia" element={<SocialMedia />} />
                <Route path="/MainIllustration" element={<MainIllustration />} />
                <Route path="/contact" element={<ContactForm />} />

                {/* Routes for Cards */}
                <Route path="/first-card" element={<SmCardOne />} />
                <Route path="/second-card" element={<SmCardTwo />} />
            </Routes>
        </Router>
    );
}

export default App;

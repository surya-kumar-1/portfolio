import React from "react";
import NavAbout from "./NavAbout.jsx";
import AboutMee from "./AboutMee.jsx";
import Role from "./Role.jsx";
import LittleMore from "./LittleMore.jsx";
import Marque from "./Marque.jsx";
import ContactForm from "../HomePage/ContactForm.jsx";
import ScrollToTop from "../../ScrollToTop.jsx";

function MainAbout() {
    return (
        <>
        <ScrollToTop/>
            <NavAbout />
            <AboutMee />
            <Role />
            <LittleMore />
            <Marque />
            <ContactForm />
        </>
    );
}

export default MainAbout;

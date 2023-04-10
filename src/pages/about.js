import React from "react";

import NavTop from "../components/common/NavTop";
import Footer from "../components/common/Footer";
import Title from "../components/common/Title";
import AboutHero from "../components/about/AboutHero";
import AboutTeam from "../components/about/AboutTeam";
import Statistics from "../components/home/Statistics";

const About = () => {
    return (
        <div>
            <NavTop />
            <Title />
            <AboutHero />
            <Statistics />
            <AboutTeam />
            <Footer />
        </div>
    );
};

export default About;

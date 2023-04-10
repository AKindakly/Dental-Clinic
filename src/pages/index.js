import React from "react";

import NavTop from "../components/common/NavTop";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Welcome from "../components/home/Welcome";
import Statistics from "../components/home/Statistics";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";
import Location from "../components/home/Location";
import Footer from "../components/common/Footer";

const Home = () => {
    return (
        <div>
            <NavTop />
            <Hero />
            <Features />
            <Welcome />
            <Statistics />
            <Services />
            <Testimonial />
            <Location />
            <Footer />
        </div>
    );
};

export default Home;

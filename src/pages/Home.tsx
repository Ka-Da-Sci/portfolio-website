import { FC } from "react";
import About from "../page-sections/homepage-sections/About";
import Contact from "../page-sections/homepage-sections/Contact";
import Testimonials from "../page-sections/homepage-sections/Testimonials";
import classes from './Home.module.css';
import Hero from "../page-sections/homepage-sections/Hero";
import Skills from "../page-sections/homepage-sections/Skills";
import Portfolios from "../page-sections/homepage-sections/Portfolios";

const Home: FC = () => {

    return (
        <main className={classes.home}>
            <Hero />
            <Skills />
            <About />
            <Portfolios />
            <Testimonials />
            <Contact />
        </main>
    )
}

export default Home;
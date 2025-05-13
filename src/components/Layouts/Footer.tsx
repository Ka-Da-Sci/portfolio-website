import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-trans.svg";
import classes from "./Footer.module.css";
import Logo from "./Logo";
import githubLogo from "../../assets/images/github.jpg";
import xLogo from "../../assets/images/twitter.svg";
import linkedInLogo from "../../assets/images/linkedIn.svg";
import instagramLogo from "../../assets/images/instagram.svg";
import whatsappLogo from "../../assets/images/whatsapp.jpg";
import ImageWrapper from "../UI/ImageWrapper";
import SectionDirectDiv from "../UI/SectionDirectDiv";

const Footer: FC = () => {
  return (
    <section id="footer" className={classes['footer-section']}>
      <SectionDirectDiv>
        <div className={classes['footer-top']}>
          <Link to="/">
            <Logo imageUrl={logo} />
          </Link>
          <nav className={classes.nav}>
            <Link to="/">
              <h1>Home</h1>
            </Link>

            <Link to="/skills">
              <h1>Skills</h1>
            </Link>

            <Link to="/portfolios">
              <h1>Portfolio</h1>
            </Link>

            <Link to="/about-me">
              <h1>About Me</h1>
            </Link>

            <Link to="/testimonials">
              <h1>Testimonials</h1>
            </Link>
          </nav>

          <div className={classes.social}>
            <a target="_blank" href="https://github.com/Ka-Da-Sci">
              <ImageWrapper
                sourceUrl={githubLogo}
                alternativeText="github-icon"
              />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/elem-prosper-kachi-2662b4122">
              <ImageWrapper
                sourceUrl={linkedInLogo}
                alternativeText="linkedin-icon"
              />
            </a>
            <a target="_blank" href="https://x.com/DevKatchie">
              <ImageWrapper sourceUrl={xLogo} alternativeText="x-icon" />
            </a>
            <a target="_blank" href="https://www.instagram.com/kattchiie">
              <ImageWrapper
                sourceUrl={instagramLogo}
                alternativeText="instagram-logo"
              />
            </a>
            <a target="_blank" href="https://wa.me/2348146063632">
              <ImageWrapper
                sourceUrl={whatsappLogo}
                alternativeText="whatsapp-logo"
              />
            </a>
          </div>
        </div>

        <div className={classes['footer-bottom']}>
          <nav className={classes.legalities}>
            <Link to="/error404">
              <h1>Privacy Policy</h1>
            </Link>

            <Link to="/error404">
              <h1>Terms of Service</h1>
            </Link>

            <Link to="/error404">
              <h1>Cookies Settings</h1>
            </Link>
          </nav>
        </div>
      </SectionDirectDiv>
    </section>
  );
};

export default Footer;

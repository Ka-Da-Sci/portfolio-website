import { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-trans.svg";
import classes from "./Header.module.css";
import Logo from "./Logo";
import MobileToggle from "./MobileToggle";

// interface HeaderProps {
//     toggle?: boolean;
// }

const Header: FC = () => {
  const [toggleMobile, setToggleMobile] = useState(false);
  //   const [resizeToggleMobile, setResizeToggleMobile] = useState(false);

  useEffect(() => {
    const updateToggleMobile = () => {
      const width = window.innerWidth;
      const navBar = document.getElementById("header");
      console.log(navBar);

      if (width <= 640) {
        setToggleMobile(false);
      } else {
        setToggleMobile(true);
      }
    };

    updateToggleMobile();
    window.addEventListener("resize", updateToggleMobile);
    return () => window.removeEventListener("resize", updateToggleMobile);
  }, []);

  const handleToggle = (toggle: boolean) => {
    setToggleMobile(!toggle);
  };

  return (
    <div id="header" className={classes.header}>
      <NavLink to="/">
        <Logo imageUrl={logo} />
      </NavLink>
      <nav
        className={`${classes.nav} ${
          toggleMobile ? classes["nav-active"] : classes["nav-inactive"]
        }`}
      >
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to="/"
        >
          <h1>Home</h1>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to="/portfolios"
        >
          <h1>Portfolio</h1>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to="/about-me"
        >
          <h1>About Me</h1>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to="/testimonials"
        >
          <h1>Testimonials</h1>
        </NavLink>
      </nav>

      <a
        className={classes["download-cv"]}
        target="-blank"
        rel="noopener noreferrer"
        href="/Elem Prosper Kachi CV.pdf"
      >
        Download CV
      </a>
      <MobileToggle onToggle={handleToggle} />
    </div>
  );
};

export default Header;

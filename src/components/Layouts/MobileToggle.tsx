import classes from "./MobileToggle.module.css";
import ImageWrapper from "../UI/ImageWrapper";
import menuClose from '../../assets/images/icon-close-menu.svg';
import menuOpen from '../../assets/images/icon-menu.png';
import { FC, useState, useEffect } from "react";

interface MobileToggleProps {
    onToggle: (toggleState: boolean) => void;
  }

const MobileToggle: FC<MobileToggleProps> = (props) => {
  const [toggleState, setToggleState] = useState(false);

    useEffect(() => {
      const updateToggleState = () => {
        const width = window.innerWidth;
        const navBarElements = document.querySelector("nav")?.querySelectorAll("a");

  
        if (width <= 640) {
          setToggleState(false);
          setToggleState(false);
          navBarElements?.forEach((element) => {
              element.addEventListener("click", () => {
                  setToggleState(false);
              });
          });
        } else {
          setToggleState(true);
        }
      };
  
      updateToggleState();
      window.addEventListener("resize", updateToggleState);
      return () => window.removeEventListener("resize", updateToggleState);
    }, []);

  const handleToggleState = () => {
    setToggleState(prevToggle => !prevToggle);

    props.onToggle(toggleState);
  }

  return (
    <div onClick={handleToggleState} className={classes["mobile-toggle"]}>
      <div className={`${classes["icon-menu"]} ${toggleState ? classes.inactive : classes.active}`}>
        <ImageWrapper
          sourceUrl={menuOpen}
          alternativeText="menu-toggle-icon"
        />
      </div>
      <div className={`${classes["icon-close-menu"]} ${toggleState ? classes.active : classes.inactive}`}>
        <ImageWrapper
          sourceUrl={menuClose}
          alternativeText="menu-toggle-icon"
        />
      </div>
    </div>
  );
};

export default MobileToggle;
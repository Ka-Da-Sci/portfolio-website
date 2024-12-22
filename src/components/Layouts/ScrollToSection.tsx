import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      const element = document.getElementById(pathname.replace("/", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          window.scrollBy({
            top: -50,
            behavior: "smooth",
          }),
            5;
        }, 700);
      } else {
        if (/^\/$/.test(pathname)) {
          const defaultElement = document.querySelector("#hero");
          if (defaultElement) {
            defaultElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
  });

  return null;
};

export default ScrollToSection;

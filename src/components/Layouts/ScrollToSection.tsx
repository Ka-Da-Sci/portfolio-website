import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection: FC = () => {
  const { pathname } = useLocation();
  const l = useLocation();
  // console.log(l);
  console.log(pathname);

  useEffect(() => {
    if (pathname) {
      const element = document.getElementById(pathname.replace("/", ""));
      console.log(element);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        if (pathname === "/") {
          const defaultElement = document.querySelector("#hero");
          console.log(l);
          console.log(defaultElement);
          if (defaultElement) {
            defaultElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    } else{
      console.log('Rubbish');
    }
  });

  return null;
};

export default ScrollToSection;

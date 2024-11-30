import classes from "./Portfolios.module.css";
import SectionDirectDiv from "../../components/UI/SectionDirectDiv";
import Portfolio from "../../components/Layouts/Portfolio";
import portfolioImageOne from "../../assets/images/portfolio-1.png";
import portfolioImageTwo from "../../assets/images/portfolio-2.png";
import portfolioImageThree from "../../assets/images/portfolio-3.png";
import ImageWrapper from "../../components/UI/ImageWrapper";
import carouselDirectionImage from "../../assets/images/carousel-direction.png";
import {useEffect, useRef, useState } from "react";

const dummyPortfoliosData = [
  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "Ahuse",
    imgSrc: portfolioImageOne,
    altText: "portfolio 1",
  },

  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "App Dashboard",
    imgSrc: portfolioImageTwo,
    altText: "portfolio 2",
  },

  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "Easy Rent",
    imgSrc: portfolioImageThree,
    altText: "portfolio 3",
  },
  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "OTO Website",
    imgSrc: portfolioImageOne,
    altText: "portfolio 1",
  },

  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "Sales Dashboard",
    imgSrc: portfolioImageTwo,
    altText: "portfolio 2",
  },

  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "Rentals Services",
    imgSrc: portfolioImageThree,
    altText: "portfolio 3",
  },
  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "Social Media Website",
    imgSrc: portfolioImageOne,
    altText: "portfolio 1",
  },

  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "Banking & Finance",
    imgSrc: portfolioImageTwo,
    altText: "portfolio 2",
  },

  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "Blind Dating App",
    imgSrc: portfolioImageThree,
    altText: "portfolio 3",
  },
  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "Educational Infrastructure",
    imgSrc: portfolioImageOne,
    altText: "portfolio 1",
  },

  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "CyberSecurity",
    imgSrc: portfolioImageTwo,
    altText: "portfolio 2",
  },

  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    h1Text: "Web3",
    imgSrc: portfolioImageThree,
    altText: "portfolio 3",
  },
];

const Portfolios = () => {
  const [portfoliosData, setportfoliosData] = useState(dummyPortfoliosData)
  const [count, setCount] = useState(0);
  const carouselLeftBtn = useRef<HTMLSpanElement | null>(null);
  const carouselRightBtn = useRef<HTMLSpanElement | null>(null);

  const handleLeftCarouselBtnClick = () => {
    carouselCtrl(carouselLeftBtn.current!.id);
    // return (Event) => {
    //   Event.preventDefault();
    // }
  }
  const handleRightCarouselBtnClick = () => {
    carouselCtrl(carouselRightBtn.current!.id);
    // return (Event) => {
    //   Event.preventDefault();
    // }
  }
  const carouselCtrl = (btnId: string) => {
    console.log(btnId);
    setportfoliosData((prevState) => {
      if (prevState.length === 0) return prevState; // Return unchanged state if empty
  
      if (btnId === 'leftCarouselBtn') {
        // Move the last project to the start
        const lastProject = prevState[prevState.length - 1];
        const restProjects = prevState.slice(0, -1);
        return [lastProject, ...restProjects];
      } else if (btnId === 'rightCarouselBtn') {
        // Move the first project to the end
        const firstProject = prevState[0];
        const restProjects = prevState.slice(1);
        return [...restProjects, firstProject];
      }
  
      return prevState; // Fallback in case of no matching id
    });
  };  
  // carouselCtrl();
  

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;

      if (width <= 640) setCount(1);
      else if (width <=768) setCount(2);
      else setCount(3);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <section id="portfolios" className={classes["portfolios-section"]}>
      <SectionDirectDiv>
        <div className={classes["portfolios-top"]}>
          <h1>My Portfolio</h1>
        </div>
        <ul className={classes["portfolios-middle"]}>
          {portfoliosData.slice(0, count).map((portfolio) => (
            <Portfolio key={Math.random()} {...portfolio} />
          ))}
        </ul>
        <div className={classes["portfolios-bottom"]}>
            <span ref={carouselLeftBtn} onClick={handleLeftCarouselBtnClick} id="leftCarouselBtn">
              <ImageWrapper
                
                sourceUrl={carouselDirectionImage}
                alternativeText={"left direction"}
              />
            </span>
            <span ref={carouselRightBtn} onClick={handleRightCarouselBtnClick} id="rightCarouselBtn">
              <ImageWrapper
                sourceUrl={carouselDirectionImage}
                alternativeText={"right direction"}
              />
            </span>
          </div>
      </SectionDirectDiv>
    </section>
  );
};

export default Portfolios;

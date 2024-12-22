import classes from "./Portfolios.module.css";
import SectionDirectDiv from "../../components/UI/SectionDirectDiv";
import Portfolio from "../../components/Layouts/Portfolio";
import portfolioImageOne from "../../assets/images/portfolio-1.png";
import portfolioImageTwo from "../../assets/images/portfolio-2.png";
import portfolioImageThree from "../../assets/images/portfolio-3.png";
import ImageWrapper from "../../components/UI/ImageWrapper";
import carouselDirectionImage from "../../assets/images/carousel-direction.png";
import useCarouselContentsAdjuster from "../../custom-hooks/useCarouselContentsAdjuster";
import { useRef } from "react";

interface PortfolioData {
  pText: string;
  h1Text: string;
  imgSrc: string;
  altText: string;
}

const dummyPortfoliosData: PortfolioData[] = [
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
  const initialData = dummyPortfoliosData;
  const initialCount = 3;
  const { data, count, carouselCtrl } = useCarouselContentsAdjuster(
    initialData,
    initialCount
  );

  const carouselLeftBtn = useRef<HTMLSpanElement | null>(null);
  const carouselRightBtn = useRef<HTMLSpanElement | null>(null);

  const handleLeftCarouselBtnClick = () => {
    carouselCtrl(carouselLeftBtn.current!.id);
  };
  const handleRightCarouselBtnClick = () => {
    carouselCtrl(carouselRightBtn.current!.id);
  };

  return (
    <section id="portfolios" className={classes["portfolios-section"]}>
      <SectionDirectDiv>
        <div className={classes["portfolios-top"]}>
          <h1>My Portfolio</h1>
        </div>
        <ul className={classes["portfolios-middle"]}>
          {data.slice(0, count).map((portfolio) => (
            <Portfolio key={Math.random()} {...portfolio} />
          ))}
        </ul>
        <div className={classes["portfolios-bottom"]}>
          <span
            ref={carouselLeftBtn}
            onClick={handleLeftCarouselBtnClick}
            id="leftCarouselBtn"
          >
            <ImageWrapper
              sourceUrl={carouselDirectionImage}
              alternativeText={"left direction"}
            />
          </span>
          <span
            ref={carouselRightBtn}
            onClick={handleRightCarouselBtnClick}
            id="rightCarouselBtn"
          >
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

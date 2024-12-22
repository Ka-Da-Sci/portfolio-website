import useCarouselContentsAdjuster from "../../custom-hooks/useCarouselContentsAdjuster";
import { useRef, FC } from "react";
import SectionDirectDiv from "../../components/UI/SectionDirectDiv";
import classes from "./Testimonials.module.css";
import Testimonial from "../../components/Layouts/Testimonial";
import clientPhoto1 from "../../assets/images/client-1.png";
import ImageWrapper from "../../components/UI/ImageWrapper";
import carouselDirectionImage from "../../assets/images/carousel-direction.png";

const DUMMYTESTIMONIALS = [
  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    clientPhoto: clientPhoto1,
    clientName: "Goodluck Efe",
    clientCName: "Wivali AI",
  },
  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    clientPhoto: clientPhoto1,
    clientName: "Donard Smith",
    clientCName: "Xalphabet",
  },
  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    clientPhoto: clientPhoto1,
    clientName: "Dianne Russell",
    clientCName: "Starbucks",
  },
];

const Testimonials: FC = () => {
  const initialData = DUMMYTESTIMONIALS;
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
    <section className={classes['testimonials-section']} id="testimonials">
      <SectionDirectDiv>
        <h1>Clients Feedback</h1>
        <div>
          {data.slice(0, count).map((testimonial) => (<Testimonial clientReviewTXT={testimonial.pText} clientPhotoUrl={testimonial.clientPhoto} clientName={testimonial.clientName} clientCompanyName={testimonial.clientCName} key={Math.random()} />))}
        </div>
        <div className={classes["testimonials-bottom"]}>
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

export default Testimonials;

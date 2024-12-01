import { FC, useEffect, useState } from "react";
import SectionDirectDiv from "../../components/UI/SectionDirectDiv";
import classes from "./Testimonials.module.css";
import Testimonial from "../../components/Layouts/Testimonial";
import clientPhoto1 from "../../assets/images/client-1.png";

const DUMMYTESTIMONIALS = [
  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    clientPhoto: clientPhoto1,
    clientName: "Dianne Russell",
    clientCName: "Starbucks",
  },
  {
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    clientPhoto: clientPhoto1,
    clientName: "Dianne Russell",
    clientCName: "Starbucks",
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
  // const [testimonialsData, setTestimonialsData] = useState(DUMMYTESTIMONIALS);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;

      if (width <= 640) setCount(1);
      else if (width <=1024) setCount(2);
      else setCount(3);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <section className={classes['testimonials-section']} id="testimonials">
      <SectionDirectDiv>
        <h1>Clients Feedback</h1>
        <div>
          {DUMMYTESTIMONIALS.slice(0, count).map((testimonial) => (<Testimonial clientReviewTXT={testimonial.pText} clientPhotoUrl={testimonial.clientPhoto} clientName={testimonial.clientName} clientCompanyName={testimonial.clientCName} key={Math.random()} />))}
        </div>
      </SectionDirectDiv>
    </section>
  );
};

export default Testimonials;

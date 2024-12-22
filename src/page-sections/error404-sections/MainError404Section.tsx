import { FC } from "react";
import SectionDirectDiv from "../../components/UI/SectionDirectDiv";
import ImageWrapper from "../../components/UI/ImageWrapper";
import error404Photo from "../../assets/images/error404-photo.png";
import error404ReturnHome from "../../assets/images/return-home.png";
import classes from "./MainError404Section.module.css";
import { Link } from "react-router-dom";

const MainError404Section: FC = () => {
  return (
    <section id="error404" className={classes[`main-error-404-section`]}>
      <SectionDirectDiv>
        <div className={classes["error404-img-div"]}>
          <ImageWrapper sourceUrl={error404Photo} alternativeText={"error404"} />
        </div>
        <div className={classes["return-home"]}>
          <Link to="/"> <img src={error404ReturnHome} alt="return-home" /> Return to home</Link>
        </div>
      </SectionDirectDiv>
    </section>
  );
};

export default MainError404Section;

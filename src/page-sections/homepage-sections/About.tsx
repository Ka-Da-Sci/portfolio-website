import { FC } from "react";
import SectionDirectDiv from "../../components/UI/SectionDirectDiv";
import ImageWrapper from "../../components/UI/ImageWrapper";
import photo from "../../assets/images/masked-photo.png";
import classes from "./About.module.css";

const About: FC = () => {
  return (
    <section id="about-me" className={classes[`about-section`]}>
      <SectionDirectDiv>
        <div className={classes["img-div"]}>
          <ImageWrapper sourceUrl={photo} alternativeText={"photo"} />
        </div>
        <div className={classes["text-div"]}>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque
          </p>
          <p>
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis
            consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
            mi a, euismod risus r.
          </p>
        </div>
      </SectionDirectDiv>
    </section>
  );
};

export default About;

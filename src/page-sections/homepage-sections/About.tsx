import { FC } from "react";
import SectionDirectDiv from "../../components/UI/SectionDirectDiv";
import ImageWrapper from "../../components/UI/ImageWrapper";
import photo from "../../assets/images/elem-prosper-kachi-passport-photo3.png";
import classes from "./About.module.css";

const About: FC = () => {
  return (
    <section id="about-me" className={classes[`about-section`]}>
      <SectionDirectDiv>
        <div className={classes["main-img-div-wrapper"]}>
          <div className={classes["img-div"]}>
            <ImageWrapper sourceUrl={photo} alternativeText={"photo"} />
          </div>
        </div>
        <div className={classes["text-div"]}>
          <h1>About Me</h1>
          <p>
            I'm Katchie, a passionate web developer with a keen eye for design
            and detail. My journey into web development was fueled by a
            fascination with how designs and codes come together to create
            seamless user experiences.
          </p>

          <p>
            I thrive on crafting websites that not only look fantastic but also
            function impeccably, ensuring that every user interaction is
            intuitive and engaging. My expertise spans across the latest web
            technologies, from responsive design principles to advanced
            JavaScript frameworks, allowing me to build dynamic, interactive web
            applications that stand out in today's digital landscape.
          </p>

          <p>
            Beyond coding, I'm always exploring new trends in web design,
            accessibility standards, and SEO strategies to stay ahead in this
            ever-evolving field. My goal is not just to meet expectations but to
            exceed them, delivering projects that are not only successful but
            also memorable.
          </p>

          <p>
            I believe that every website has a story to tell: let's collaborate
            and bring your vision to life with a website that not only performs
            but also tells your story effectively.
          </p>
        </div>
      </SectionDirectDiv>
    </section>
  );
};

export default About;

import { FC} from "react";
import { Link } from "react-router-dom";
import SectionDirectDiv from "../../components/UI/SectionDirectDiv";
import ImageWrapper from "../../components/UI/ImageWrapper";
import photo from '../../assets/images/profile-photo.png';
import classes from './Hero.module.css';

const Hero: FC = () => {
    return (
        <section id="hero" className={classes[`hero-section`]}>
          <SectionDirectDiv>
            <div className={classes['text-div']}>
              <p>Hey, I am Katchie!</p>
              <h1>I weave <span>seamless</span> websites with <span>dynamic</span> user experiences.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <Link to='/contact'>Get In Touch</Link>
            </div>
            <div className={classes['img-div']}>
              <ImageWrapper sourceUrl={photo} alternativeText={'photo'} />
            </div>
          </SectionDirectDiv>
        </section>
      );
}

export default Hero;
import { FC} from "react";
import { Link } from "react-router-dom";
import SectionDirectDiv from "../../components/UI/SectionDirectDiv";
import ImageWrapper from "../../components/UI/ImageWrapper";
import photo from '../../assets/images/elem-prosper-kachi-passport-photo.png';
import classes from './Hero.module.css';

const Hero: FC = () => {
    return (
        <section id="hero" className={classes[`hero-section`]}>
          <SectionDirectDiv>
            <div className={classes['text-div']}>
              <p>Hey, I am Katchie!</p>
              <h1>Crafting web masterpieces for <span>seamless</span> <span>interactive </span> and <span>dynamic</span> user experiences.</h1>
              <p>Let's transform your visions and ideas into vibrant, user-focused digital landscapes.</p>
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
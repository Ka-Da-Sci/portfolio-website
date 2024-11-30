import classes from './Skills.module.css';
import SectionDirectDiv from '../../components/UI/SectionDirectDiv';
import Skill from '../../components/Layouts/Skill';
import skillImageOne from '../../assets/images/skill-1-img.png'
import skillImageTwo from '../../assets/images/skill-2-img.png'
import skillImageThree from '../../assets/images/skill-3-img.png'

const Skills = () => {
    const skillsData = [
        {
            pText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
            h1Text: "Strategy & Direction",
            imgSrc: skillImageOne,
            altText: "Skill 1",
            
        },

        {
            pText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
            h1Text: "Branding & Logo",
            imgSrc: skillImageTwo,
            altText: "Skill 2",
        },

        {
            pText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
            h1Text: "UI & UX Design",
            imgSrc: skillImageThree,
            altText: "Skill 3",
        }
    ]; 
    return (
        <section className={classes['skills-section']}>
            <SectionDirectDiv>
                <div className={classes['skills-top']}>
                    <h1>My Expertise</h1>
                </div>
                <ul className={classes['skills-bottom']}>
                    {skillsData.map((skill) => (
                        <Skill key={Math.random()} {...skill} />
                    ))}
                </ul>
            </SectionDirectDiv>
        </section>
    );
}

export default Skills;
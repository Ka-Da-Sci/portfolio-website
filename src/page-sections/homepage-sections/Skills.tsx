import classes from './Skills.module.css';
import SectionDirectDiv from '../../components/UI/SectionDirectDiv';
import Skill from '../../components/Layouts/Skill';
import responsiveDesign from '../../assets/images/responsive-websites.jpg';
import jsFrameworks from '../../assets/images/frameworks.jpg';
import apiIntegration from '../../assets/images/api-integration.jpg';
import seoOptimization from '../../assets/images/seo.jpg';
import webAnimation from '../../assets/images/animation.jpg';
import versionControl from '../../assets/images/git-version-control.jpg';


const Skills = () => {
    const skillsData = [
        {
            pText: 'Implementing websites that adapt seamlessly to any device size, ensuring optimal user experience across platforms.',
            h1Text: "Responsive Design Implementation",
            imgSrc: responsiveDesign,
            altText: "responsive-design",
            
        },

        {
            pText: 'Proficient in frameworks like React and Angular for building dynamic, interactive web applications.',
            h1Text: "JavaScript Frameworks",
            imgSrc: jsFrameworks,
            altText: "js-frameworks",
        },

        {
            pText: 'Seamlessly integrating third-party services or backend data through APIs, enhancing functionality and data-driven user experiences.',
            h1Text: "API Integration",
            imgSrc: apiIntegration,
            altText: "api-integration",
        },

        {
            pText: 'Implementing frontend strategies that boost search engine visibility, like optimized meta tags, schema markup, and site structure.',
            h1Text: "SEO Best Practices",
            imgSrc: seoOptimization,
            altText: "seo-optimization",
        },
        
        {
            pText: 'Creating engaging user experiences with animations using CSS transitions, keyframes, or libraries like GreenSock.',
            h1Text: "Web Animations",
            imgSrc: webAnimation,
            altText: "web-animation",

        },

        {
            pText: 'Managing code changes and collaboration through Git, ensuring smooth development workflows.',
            h1Text: "Version Control with Git",
            imgSrc: versionControl,
            altText: "version-control",
        },

    ]; 
    return (
        <section id='skills' className={classes['skills-section']}>
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
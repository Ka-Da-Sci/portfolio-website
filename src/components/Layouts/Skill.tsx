import { FC } from 'react';
import classes from './Skill.module.css';
import ImageWrapper from '../UI/ImageWrapper';


const Skill: FC<{pText: string; h1Text: string; imgSrc: string; altText: string}> = (props) => {
    return (
        <li className={classes.skill}>
            <div className={classes['image-container']}>
                <ImageWrapper sourceUrl={props.imgSrc} alternativeText={props.altText}/>
            </div>
            <h1>{props.h1Text}</h1>
            <p>{props.pText}</p>
        </li>
    )
}

export default Skill;
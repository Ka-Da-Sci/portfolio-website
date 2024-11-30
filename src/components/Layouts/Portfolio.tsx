import { FC } from 'react';
import classes from './Portfolio.module.css';
import ImageWrapper from '../UI/ImageWrapper';
import viewIcon from '../../assets/images/view-link-icon.svg';


const Portfolio: FC<{pText: string; h1Text: string; imgSrc: string; altText: string}> = (props) => {
    return (
        <li className={classes.portfolio}>
            <div className={classes['image-container']}>
                <ImageWrapper sourceUrl={props.imgSrc} alternativeText={props.altText}/>
            </div>
            <span> 
                <h1>{props.h1Text}</h1>
                <p>{props.pText}</p>
                <a href="#">
                    <p>View</p>
                    <ImageWrapper sourceUrl={viewIcon} alternativeText="View Link" />
                </a>
            </span>
        </li>
    )
}

export default Portfolio;
import { FC } from 'react';
import classes from './ImageWrapper.module.css';


const ImageWrapper: FC<{sourceUrl: string; alternativeText: string}> = (props) => {
    return <img className={classes['image-img']} src={props.sourceUrl} alt={props.alternativeText}/>
}

export default ImageWrapper;
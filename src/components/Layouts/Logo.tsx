import { FC } from 'react';
import classes from './Logo.module.css';



const ImageCard: FC <{imageUrl: string}> = (props) => {
    return (
        <div className={classes.logo}>
            <img src={props.imageUrl}></img>
        </div>
    );
}

export default ImageCard;
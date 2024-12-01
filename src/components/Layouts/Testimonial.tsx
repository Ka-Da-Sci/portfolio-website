import { FC } from "react";
import RatingStars from '../UI/RatingStars';
import ImageWrapper from "../UI/ImageWrapper";
import classes from './Testimonial.module.css';

const Testimonial: FC<{clientReviewTXT:string, clientPhotoUrl: string, clientName: string, clientCompanyName: string}> = (props) => {
    return (
        <div className={classes.testimonial}>
            <RatingStars />
            <p>{props.clientReviewTXT}</p>
            <div className={classes.reviewer}>
                <div>
                    <ImageWrapper sourceUrl={props.clientPhotoUrl} alternativeText={'client photo'}/>
                </div>
                <div>
                    <p>{props.clientName}</p>
                    <p>{props.clientCompanyName}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;
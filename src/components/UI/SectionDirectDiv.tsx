import { FC, PropsWithChildren } from 'react';
import classes from './SectionDirectDiv.module.css';

const SectionDirectDiv: FC<PropsWithChildren<{}>> = (props) => {
    
    return <div className={classes.inner}>
        {props.children}
    </div>
}

export default SectionDirectDiv;
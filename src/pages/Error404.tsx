import { FC } from "react";
import MainError404Section from "../page-sections/error404-sections/MainError404Section";
import classes from './Home.module.css';
const Home: FC = () => {

    return (
        <main className={classes['error-404']}>
            <MainError404Section />
        </main>
    )
}

export default Home;
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import classes from './Header.module.css';
import ImageCard from './Logo';

const Header: FC = () => {

    return (
        <div id='header' className={classes.header}>
            <NavLink to='/'>
                <ImageCard imageUrl={logo}/>
            </NavLink>
            <nav className={classes.nav}>

                <NavLink className={({isActive}) => (isActive ? classes.active: '')} to='/'>
                    <h1>Home</h1>
                </NavLink>

                <NavLink className={({isActive}) => (isActive ? classes.active : '')} to='/portfolios'>
                    <h1>Portfolio</h1>
                </NavLink>

                <NavLink className={({isActive}) => (isActive ? classes.active: '')} to='/about-me'>
                    <h1>About Me</h1>
                </NavLink>

                <NavLink className={({isActive}) => (isActive ? classes.active : '')} to='/testimonials'>
                    <h1>Testimonials</h1>
                </NavLink>
            </nav>

            <a className={classes['download-cv']} target='-blank' rel='noopener noreferrer' href="/Elem Prosper Kachi CV.pdf">Download CV</a>
        </div>
    );

}

export default Header;
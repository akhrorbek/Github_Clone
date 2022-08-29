import React from 'react';
import './Hero.scss';
import { NavLink } from 'react-router-dom';
import Overview from '../../assets/Images/Overview.svg';
import Repost from '../../assets/Images/Repost.svg';
import Project from '../../assets/Images/layout.svg';
import Package from '../../assets/Images/package.svg';
const Hero = ({repost}) => {
    return (
        <div className='hero p-2 pb-3'>
            <div className='container'>
                <nav className='hero__nav d-flex justify-content-evenly'>
                    <ul className='hero__navList d-flex'>
                        <li className='hero__navItem'>
                            <NavLink to='/overview' className={({isActive})=> isActive ? "hero__active":"hero__navLink"}>
                                <img className='hero__navimg' src={Overview} alt="" width='20' height='20' />
                                Overview
                            </NavLink>
                        </li>
                        <li className='hero__navItem'>
                            <NavLink to='/repostories'  className={({isActive})=> isActive ? "hero__active":"hero__navLink"}>
                                <img className='hero__navimg' src={Repost} alt="" width='20' height='20' />
                                Repostories <span className='hero__reposNumber'>{repost.public_repos}</span>
                            </NavLink>
                        </li>
                        <li className='hero__navItem'>
                            <NavLink to='/projects' className={({isActive})=> isActive ? "hero__active":"hero__navLink"}>
                                <img className='hero__navimg' src={Project} alt="" width='20' height='20' />
                                Projects
                            </NavLink>
                        </li>
                        <li className='hero__navItem'>
                            <NavLink to='/packages'className={({isActive})=> isActive ? "hero__active":"hero__navLink"} >
                                <img className='hero__navimg' src={Package} alt="" width='20' height='20' />
                                Packages
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Hero;
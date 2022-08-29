import React from 'react';
import '../Header/Header.scss';
import { useNavigate } from 'react-router';
import GitLogo from '../../assets/Images/logo.svg'
import Alarm from '../../assets/Images/bell.svg';
import Me from '../../assets/Images/me.jpg';

const Header = ({ img}) => {

    const out = useNavigate();

    return (
        <div className='header pt-3 mb-5 pb-3'>
            <div className='container d-flex justify-content-between'>
                <div className='hrader__left d-flex align-items-center'>
                    <img className='header__logo rounded-circle' src={GitLogo} alt="Git Logo" width='30' height='30' />
                    <input className='header__input form-control' type="text" placeholder='Search or jump to...' />
                    <nav className='header__nav'>
                        <ul className='header__navList d-flex'>
                            <li className='header__navItem'>
                                <a className='header__navItemLink' href="#">Pull requests</a>
                            </li>
                            <li className='header__navItem'>
                                <a className='header__navItemLink' href="#">Issues</a>
                            </li>
                            <li className='header__navItem'>
                                <a className='header__navItemLink' href="#">Marketplace</a>
                            </li>
                            <li className='header__navItem'>
                                <a className='header__navItemLink' href="#">Explore</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header__right d-flex'>
                    <a className='header__alarmIconLink' href="#">
                        <img className='header__alarmIcon' src={Alarm} alt="Bell" width='20' height='25' />
                    </a>
                    <div className='dropdown mx-3'>
                        <a className="header__dropdownLink dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            +
                        </a>
                        <ul className="dropdown-menu p-2">
                            <li><a className="header__dropdownItem" href="#">New repository</a></li>
                            <li><a className="header__dropdownItem" href="#">Import repository</a></li>
                            <li><a className="header__dropdownItem" href="#">New gist</a></li>
                            <li><a className="header__dropdownItem" href="#">New organization</a></li>
                            <li><a className="header__dropdownItem" href="#">New project</a></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <a className="header__dropdownLink dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className='rounded-circle' src={img.avatar_url} alt="" width='25' height='25' />
                        </a>
                        <ul className="dropdown-menu p-2">
                            <li><a className="header__dropdownItem" href="#">Your profile</a></li>
                            <li><a className="header__dropdownItem" href="#">Your repostories</a></li>
                            <li><a className="header__dropdownItem" href="#">Your projects</a></li>
                            <li><a className="header__dropdownItem" href="#">Settings</a></li>
                            <li><a className="header__dropdownItem" href="#" onClick={() => {
                                return (
                                    out('/login')
                                )
                            }}>Log out</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Header;
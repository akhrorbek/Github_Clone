import React from 'react';
import './Footer.scss';
import Logo from '../../assets/Images/footerLogo.svg';
const Footer = () => {
    return (
        <div className='footer pb-5'>
            <div className='container footer__wrap d-flex justify-content-between align-items-center'>
                <a className='footer__logoWrap d-flex align-items-center' href="#">
                    <img className='footer__logo' src={Logo} alt="" width="25" height="25" />
                    <p className='footer__logoText mx-2'>2002 GitHub, Inc.</p>
                </a>
                <ul className='footer__list d-flex justify-content-between'>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">Terms</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">Privacy</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">Security</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">Status</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">Docs</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">Contact GitHub</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">Pricing</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">API</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">Training</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">Blog</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__itemLink' href="#">About</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
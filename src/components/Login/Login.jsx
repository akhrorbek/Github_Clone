import React from 'react';
import Logo from '../../assets/Images/github.gif';
import './Login.scss';

const Login = () => {
    return (
        <>
            <div className='login'>
                <img src={Logo} alt="" width='120' height='120'/>
            </div>
        </>
    );
};

export default Login;
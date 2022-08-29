import React,{useState} from 'react';
import Logo from '../../assets/Images/github.gif';
import './Login.scss';

const Login = ({islogin, login}) => {

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const params = {
        username:userName,
        password:password
    };


    return (
        <>
            <div className='login'>
                <div className='d-flex flex-column align-items-center w-100'>
                    <img src={Logo} alt="" width='120' height='120' />
                    <p>Sign in to GitHub</p>
                    <div className='login__wrap mb-3'>
                        <p className='login__usernameText'>Username or email address</p>
                        <input className='form-control w-100 mb-3' type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} />
                        <p className='login__passwordText'>Password</p>
                        <input className='form-control w-100 mb-3' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <button className="login__button btn btn-success" onClick={()=>login(params)}>Sign in</button>
                    </div>
                    <div className='login__register text-center mb-5'>
                        <p className='login__registerText'>New to GitHub? <a className='login__createLink' href="#">Create an account</a></p>
                    </div>
                    <ul className='login__registerList d-flex mt-5'>
                        <li className='login__registerItem'>
                            <a className='login__registerItemLink' href="#">Terms</a>
                        </li>
                        <li className='login__registerItem'>
                            <a className='login__registerItemLink' href="#">Privacy</a>
                        </li>
                        <li className='login__registerItem'>
                            <a className='login__registerItemLink' href="#">Security</a>
                        </li>
                        <li className='login__registerItem'>
                            <a className='login__registerItemLink' href="#"><span className='login__spanContact'>Contact GitHub</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Login;
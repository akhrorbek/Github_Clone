import React from 'react';
import GithubGift from '../../assets/Images/github.gif';
import Docker from '../../assets/Images/docker.svg';
import Apache from '../../assets/Images/apache.svg';
import Nuget from '../../assets/Images/nuget.svg';
import Rubygems from '../../assets/Images/rubygems.svg';
import Npm from '../../assets/Images/npm.svg';
import Cargo from '../../assets/Images/cargo.svg';
import './Packages.scss';

const Packages = () => {
    return (
        <div className='packages w-100'>
            <div className='container'>
                <div className='package__packageWrap d-flex flex-column align-items-center'>
                    <img src={GithubGift} alt="" width="195" height="195" />
                    <h2 className='packages__header'>Get started with GitHub Packages</h2>
                    <p className='packages__text mb-5'>Safely publish packages, store your packages alongside your code, and share your packages privately with your team.</p>
                    <p className='packages__heading'>Choose a registry</p>
                </div>
                <ul className='package__list d-flex flex-wrap justify-content-between'>
                    <li className='packages__item p-3 mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src={Docker} alt="" width='20' height='20' />
                            <h5 className='packages__itemHeader'>Docker</h5>
                        </div>
                        <p className='packages__itemText mt-2'>A software platform used for building applications based on containers — small and lightweight execution environments.
                        </p>
                        <button className="btn btn-secondary">Learn more</button>
                    </li>
                    <li className='packages__item  p-3 mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src={Apache} alt="" width='20' height='20' />
                            <h5 className='packages__itemHeader'>Apache Maven</h5>
                        </div>
                        <p className='packages__itemText mt-2'>A default package manager used for the Java programming language and the Java runtime environment.</p>
                        <button className="btn btn-secondary">Learn more</button>
                    </li>
                    <li className='packages__item  p-3 mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src={Nuget} alt="" width='20' height='20' />
                            <h5 className='packages__itemHeader'>NuGet</h5>
                        </div>
                        <p className='packages__itemText mt-2'>A free and open source package manager used for the Microsoft development platforms including .NET.</p>
                        <button className="btn btn-secondary">Learn more</button>
                    </li>
                    <li className='packages__item  p-3 mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src={Rubygems} alt="" width='20' height='20' />
                            <h5 className='packages__itemHeader'> RubyGems</h5>
                        </div>
                        <p className='packages__itemText mt-2'>A standard format for distributing Ruby programs and libraries used for the Ruby programming language.</p>
                        <button className="btn btn-secondary">Learn more</button>
                    </li>
                    <li className='packages__item  p-3 mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src={Npm} alt="" width='20' height='20' />
                            <h5 className='packages__itemHeader'>npm</h5>
                        </div>
                        <p className='packages__itemText mt-2'>A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.</p>
                        <button className="btn btn-secondary">Learn more</button>
                    </li>
                    <li className='packages__item p-3 mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src={Cargo} alt="" width='20' height='20' />
                            <h5 className='packages__itemHeader'>Containers</h5>
                        </div>
                        <p className='packages__itemText mt-2'>A single place for your team to manage Docker images and decide who can see and access your images.</p>
                        <button className="btn btn-secondary">Learn more</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Packages;
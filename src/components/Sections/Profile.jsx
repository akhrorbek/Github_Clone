import React from 'react';
import './Profile.scss';
import {NavLink} from 'react-router-dom';
import Akhror from '../../assets/Images/me.jpg';
import Follower from '../../assets/Images/follower.svg';
import Building from '../../assets/Images/building.svg';
import Location from '../../assets/Images/location.svg';
import Email from '../../assets/Images/email.svg';
import Link from '../../assets/Images/link.svg';
import Twitter from '../../assets/Images/twitter.svg';
const Profile = ({data}) => {

    return (
        <div className='profile container'>
            <div className='contanier pb-5'>
                <img className='rounded-circle' src={data.avatar_url} alt="" width='260' height='260' />
                <h4 className='profile__heading mb-1'>{data.name}</h4>
                <h6 className='profile__subHeading mb-3'>Software Developer</h6>
                <button className="profile__button btn btn-secondary mb-4">Follow</button>
                <p className='profile__textEmail'>{data.bio}</p>
                <div className='profile__followerWrap d-flex align-items-center mb-3'>
                    <NavLink to="/followers" className='profile__followerLink d-flex align-items-center' href="#">
                        <img src={Follower} alt="" width='30' height='30' />
                        <p className='profile__follower mx-2'> <span className='profile__followerNum'>{data.followers}</span> follower</p>
                    </NavLink>
                    <NavLink to="/following" className='profile__followingLink' href="#">
                        <p className='profile__following'>- <span className='profile__followerNum'>{data.following}</span> following</p>
                    </NavLink>
                </div>
                <ul className='profile__addressList mb-3'>
                    <li>
                        <img className='profile__addressItemImg' src={Building} alt="" width="20" height="20" />
                        <span>{data.company}</span>
                    </li>
                    <li>
                        <img className='profile__addressItemImg' src={Location} alt="" width='20' height='20' />
                        <span>{data.location}</span>
                    </li>
                    <li>
                        <img className='profile__addressItemImg' src={Email} alt="" width="20" height="20" />
                        <a className='profile__addressItemLink' href='#'>{data.email}</a>
                    </li>
                    <li>
                        <img className='profile__addressItemImg' src={Link} alt="" width="20" height="20" />
                        <a className='profile__addressItemLink' href='#'>{data.blog}</a>
                    </li>
                    <li>
                        <img className='profile__addressItemImg' src={Twitter} alt="" width="20" height="20" />
                        <a className='profile__addressItemLink' href='#'>{data.twitter_username}</a>
                    </li>
                </ul>
                <a className='profile__reportLink' href="#">Block or Report</a>
            </div>
        </div>
    );
};

export default Profile;
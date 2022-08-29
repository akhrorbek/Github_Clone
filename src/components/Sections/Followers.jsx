import React, { useState, useEffect } from 'react';
import './Followers.scss';
import axios from 'axios';
const Followers = () => {

    const name = "mukhriddin-dev"
    const followers_url = `https://api.github.com/users/${name}/followers`;
    const [followerData, setFollowerData] = useState([]);

    const getFollowwers = async () => {
        const result = await axios.get(`${followers_url}`);
        setFollowerData(result.data);
    }
    useEffect(() => {
        getFollowwers()
    }, [])

    return (
        <div className='follower w-100'>
            <div className='container'>
                <ul className='follower__list'>
                    {followerData.map(item => {
                        return <li className='follower__listItem p-3 d-flex justify-content-between align-items-center'>
                            <div className='follower__imgWrap'>
                                <img className='rounded-circle mx-4' src={item.avatar_url} alt="Follower Img" width="60" height="60" />
                                <a className='follower__followerName' target="/blank" href={item.html_url}>{item.login}</a>
                            </div>
                            <div className='follower__btnWrap'>
                                <button className="btn btn-secondary">Follow</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Followers;
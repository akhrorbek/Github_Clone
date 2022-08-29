import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Overview.scss';

const Overview = () => {
    return (
        <div className='overview w-100'>
            <div className='container'>
                <h2 className='overview__heading mt-3'>Popular repostories</h2>
                <ul className='overview__list'>
                    <li className='overview__item'>
                    </li>
                    <li className='overview__item'>

                    </li>
                    <li className='overview__item'>

                    </li>
                    <li className='overview__item'>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Overview;
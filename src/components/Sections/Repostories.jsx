import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Repostories.scss';

const Repostories = () => {

    const name = "mukhriddin-dev";
    const [repostory, setRepostory] = useState([]);
    const URL = `https://api.github.com/users/${name}/repos`;

    const getRepost = async () => {
        const response = await axios.get(`${URL}`);
        setRepostory(response.data)
    }

    useEffect(() => {
        getRepost()
    }, [])



    return (
        < div className='repostories w-100'>
            <div className='container'>
                <ul className='repostories__list'>
                    {repostory.map(rep => {
                        return <li className='repostories__item p-4 d-flex justify-content-between align-items-center'>
                            <div className='repostories__linkWrap'>
                                <div className='d-flex'>
                                    <a href={rep.html_url} target="/blank" className='repostories__itemLinkHeading'>{rep.name}</a>
                                    <p className="repostories__itemLinkButton">{rep.visibility}</p>
                                </div>
                                <p>{rep.language}</p>
                                <span>Updated at {rep.updated_at}</span>
                            </div>

                        </li>
                    })}
                </ul>
                    <ul className="pagination d-flex justify-content-center mb-5">
                        <li className="page-item disabled">
                            <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
            </div>

        </div >
    );
};

export default Repostories;
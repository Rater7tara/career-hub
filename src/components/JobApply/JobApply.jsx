import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Feature from '../Feature/Feature';



const JobApply = () => {
    const jobs = useLoaderData();
    console.log(jobs);

    return (
        <div>
            <div className='banner-div'>
                <img className='det-banner
                ' src={'https://img.freepik.com/free-photo/flat-lay-architectural-project-with-different-tools-assortment-with-copy-space_23-2148540130.jpg?size=626&ext=jpg&ga=GA1.1.205563488.1680186315&semt=ais'} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle m-auto centered'>
                    <h1>Applied jobs</h1>
                </div>
                
            </div>

            <div className='job-container'>
            </div>
        </div>
    );
};

export default JobApply;
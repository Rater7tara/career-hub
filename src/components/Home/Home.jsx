import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div className='home-container'>
            <div className=' d-flex pt-3 pb-3 mb-4'>
            <div className='card bg-light text-start'>
                <h1>One Step <br />Closer To <br /> <span className='color'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                <Button className='btn-primary' variant="primary">Get started</Button>
            </div>
            <div className='card bg-light w-50'>
                <img className='banner' src={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="" />
            </div>
            </div>
            <div className='cate-container'>

            </div>
        </div>
    );
};

export default Home;
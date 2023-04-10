import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div className='container d-flex mt-5'>
            <div className='w-50 text-start'>
                <h1>One Step <br />Closer To <br /> <span className='color'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                <Button variant="primary">Get started</Button>
            </div>
            <div className='w-50'>
                <img src={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="" />
            </div>
        </div>
    );
};

export default Home;
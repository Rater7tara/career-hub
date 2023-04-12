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
                <img className='banner' src={'https://img.freepik.com/premium-photo/join-our-team-text-lightbox-composition-white-table-background-business-concept_34933-305.jpg?size=626&ext=jpg&ga=GA1.1.205563488.1680186315&semt=ais'} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Home;
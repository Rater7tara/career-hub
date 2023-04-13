import React from 'react';
import './Details.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Details = () => {

    return (
        <div className='detail-container'>
            <div className='banner-div'>
                <img className='det-banner
                ' src={'https://img.freepik.com/free-photo/flat-lay-arrangement-with-tablet-plans-copy-space_23-2148269419.jpg?size=626&ext=jpg&ga=GA1.1.205563488.1680186315&semt=ais'} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle m-auto centered'>
                    <h1>Job Details</h1>
                </div>
            </div>

            <div className='sec-part d-flex mt-5'>
                <div className='job-desc'>
                    <ul className="mt-4 g-4 text-start">
                        <li>
                            <h5 className='fw-bold'>Job Description: <span className='fw-normal'> { }</span></h5>
                        </li>
                        <li>
                            <h5 className='fw-bold'>Job Responsibility: <span className='fw-normal'> { }</span></h5>
                        </li>
                        <li>
                            <h5 className='fw-bold'>Educational Requirements: <br /> <span className='fw-normal'> { }</span></h5>
                        </li>
                        <li>
                            <h5 className='fw-bold'>Experiences: <br /> <span className='fw-normal'> { }</span></h5>
                        </li>

                    </ul>
                </div>
                <div className='card-del '>
                    <Card className="text-start shadow p-1 mb-3 mt-1 bg-body-tertiary rounded">
                        <Card.Header className='fw-bold h3'>Job Details</Card.Header>
                        <Card.Body>

                            <Card.Text>
                                <h5 className='mt-3' ><span className='fw-bold'>Salary:</span>
                                    <span className='text-muted'> { } (Per Month)</span></h5>

                                <h5 className='mt-3'><span className='fw-bold'>Job Title:</span>
                                    <span className='text-muted'> { }</span></h5>

                            </Card.Text>
                            <h4 className='fw-bold'>Contact Information</h4>
                            <hr />
                            <h5 className='mt-3'>
                                <span className='fw-bold'>Phone:</span>
                                <span className='text-muted'>01750-00 00 00</span>
                            </h5>
                            <h5 className='mt-3'>
                                <span className='fw-bold'>Email:</span>
                                <span className='text-muted'> info@gmail.com</span>
                            </h5>
                            <h5 className='mt-3'>
                                <span className='fw-bold'>Address:</span>
                                <span className='text-muted'> Dhanmondi 32, Sukrabad
                                    Dhaka, Bangladesh</span>
                            </h5>
                        </Card.Body>
                    </Card>
                    <button className='btn btn-primary w-100'>Apply now</button>
                </div>
            </div>

        </div>
    );
};

export default Details;
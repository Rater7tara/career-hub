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
                            <h5 className='fw-bold'>Job Description: <span className='fw-normal'> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</span></h5>
                        </li>
                        <li>
                            <h5 className='fw-bold'>Job Responsibility: <span className='fw-normal'> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</span></h5>
                        </li>
                        <li>
                            <h5 className='fw-bold'>Educational Requirements: <br /> <span className='fw-normal'> Bachelor degree to complete any reputational university</span></h5>
                        </li>
                        <li>
                            <h5 className='fw-bold'>Experiences: <br /> <span className='fw-normal'> 2-3 Years in this field</span></h5>
                        </li>

                    </ul>
                </div>
                <div className='card-del '>
                    <Card className="text-start shadow p-1 mb-3 mt-1 bg-body-tertiary rounded">
                        <Card.Header className='fw-bold h3'>Job Details</Card.Header>
                        <Card.Body>

                            <Card.Text>
                                <h5 className='mt-3' ><span className='fw-bold'>Salary:</span>
                                    <span className='text-muted'> 100k-150k (Per Month)</span></h5>

                                <h5 className='mt-3'><span className='fw-bold'>Job Title:</span>
                                    <span className='text-muted'> Product Designer</span></h5>

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
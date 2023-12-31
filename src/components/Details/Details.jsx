import React, { useEffect, useState } from "react";
import './Details.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';


const Details = () => {
    const jobs = useLoaderData();
    const { id } = jobs;

    console.log(jobs)

    const [applied, setApplied] = useState(false)

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("jobs"));
        if (storedData) {
            const exist = storedData.find(item => item.id == id);
            if (exist) {
                setApplied(true)
            }

        }
    }, [jobs])

    const handleApply = () => {
        const storedData = JSON.parse(localStorage.getItem("jobs"));


        if (storedData) {
            localStorage.setItem("jobs", JSON.stringify([...storedData, jobs]))

        } else {
            localStorage.setItem("jobs", JSON.stringify([jobs]))
        }
        setApplied(true)

    }

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
                            <h5 className='fw-bold'>Job Description: <span className='fw-normal'> {jobs.jobDescription}</span></h5>
                        </li>
                        <li>
                            <h5 className='fw-bold'>Job Responsibility: <span className='fw-normal'> {jobs.jobResponsibility}</span></h5>
                        </li>
                        <li>
                            <h5 className='fw-bold'>Educational Requirements: <br /> <span className='fw-normal'> {jobs.education}</span></h5>
                        </li>
                        <li>
                            <h5 className='fw-bold'>Experiences: <br /> <span className='fw-normal'> {jobs.experience}</span></h5>
                        </li>

                    </ul>
                </div>
                <div className='card-del '>
                    <Card className="text-start shadow p-1 mb-3 mt-1 bg-body-tertiary rounded">
                        <Card.Header className='fw-bold h3'>Job Details</Card.Header>
                        <Card.Body>

                            <Card.Text>
                                <h5 className='mt-3' ><span className='fw-bold'>Salary:</span>
                                    <span className='text-muted'> {jobs.salary} (Per Month)</span></h5>

                                <h5 className='mt-3'><span className='fw-bold'>Job Title:</span>
                                    <span className='text-muted'> {jobs.title}</span></h5>

                            </Card.Text>
                            <h4 className='fw-bold'>Contact Information</h4>
                            <hr />
                            <h5 className='mt-3'>
                                <span className='fw-bold'>Phone:</span>
                                <span className='text-muted'>{jobs.phone}</span>
                            </h5>
                            <h5 className='mt-3'>
                                <span className='fw-bold'>Email:</span>
                                <span className='text-muted'> {jobs.email}</span>
                            </h5>
                            <h5 className='mt-3'>
                                <span className='fw-bold'>Address:</span>
                                <span className='text-muted'> {jobs.location}</span>
                            </h5>
                        </Card.Body>
                    </Card>
                    <button disabled={applied} onClick={handleApply} className="btn btn-primary">
                        {
                            applied ?
                                "Already Applied"
                                :
                                "Apply This job"
                        }

                    </button>
                </div>
            </div>

        </div>
    );
};

export default Details;
import React from 'react';
import './FeaCard.css'

const FeaCard = (props) => {
    const { logo, title, logoName, location, salary, btn1, btn2} = props.feature;
    return (
        <div className='feature-con shadow p-3 mb-3 mt-1 bg-body-tertiary rounded text-start'>
            <img className='fea-img' src={logo} alt="" />
            <div className='card-body ms-3'>
                <h2 className=''>{title}</h2>
                <h5>{logoName}</h5>
                <div className='btn-div d-flex'>
                    <button>{btn1}</button>
                    <button>{btn2}</button>
                </div>
                <div className='p-div d-flex'>
                    <p><img className='loc-img' src={"https://img.icons8.com/ios-filled/256/where.png"} alt="" /> {location}</p>
                    <p><img className='loc-img' src={"https://img.icons8.com/ios-filled/256/us-dollar-circled--v2.png"} alt="" /> Salary: {salary}</p>
                </div>
                <button className='btn btn-primary'>View Details</button>
            </div>
        </div>
    );
};

export default FeaCard;
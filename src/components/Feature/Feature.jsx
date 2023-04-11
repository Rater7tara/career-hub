import React, { useState } from 'react';
import { useEffect } from 'react';
import FeaCard from '../FeaCard/FeaCard';
import './Feature.css'

const Feature = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('data2-fea.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, []);


    return (
        <div className='main row mt-5'>
            <h1>Feature Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='feature-container'>
                {
                    features.map(feature => 
                        <FeaCard 
                        key={feature.id}
                        feature={feature}
                         ></FeaCard>)
                }
            </div>
            <button className='btn btn-primary mx-auto'>See All Jobs</button>
        </div>
    );
};

export default Feature;
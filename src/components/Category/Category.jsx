import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CateCard from '../CateCard/CateCard';
import './Category.css'

const Category = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('data1-cat.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
    }, []);
    return (
        <div className='main row mt-5'>
            <h1>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='card-container'>
            {
                categorys.map(category => <CateCard 
                key={category.id}
                category={category}
                
                ></CateCard>)
            }
            </div>
        </div>
    );
};

export default Category;
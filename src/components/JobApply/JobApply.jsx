import React from 'react';
import { useEffect, useState } from "react";
import FeaCard from '../FeaCard/FeaCard';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './JobApply.css'



const JobApply = () => {
    
    const [items, setItems] = useState([]);
    const [filterJob, setFilterJob] = useState([]);

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('jobs'));
      if (items) {
       setItems(items);
       setFilterJob(items);
      }
    }, []);
    console.log(items);

    const handleFilter = (event) => {
        const value = event.target.value;
        const filterData = jobs.filter((items) => items.btn1 == value );
        setFilterJob(filterData)
      }
    
    return (
        <div>
            <div className='banner-div'>
                <img className='det-banner
                ' src={'https://img.freepik.com/free-photo/flat-lay-architectural-project-with-different-tools-assortment-with-copy-space_23-2148540130.jpg?size=626&ext=jpg&ga=GA1.1.205563488.1680186315&semt=ais'} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle m-auto centered'>
                    <h1>Applied jobs</h1>
                </div>
                
            </div>
            <div className='btn-grp'>
            <DropdownButton
            className='mt-5'
        as={ButtonGroup}
        title="Job_Type"
        id="bg-vertical-dropdown-1"
        onChange={handleFilter}
      >
        <Dropdown.Item value="Onsite">Onsite</Dropdown.Item>
        <Dropdown.Item value="Remote">Remote</Dropdown.Item>
      </DropdownButton>
            </div>

           <div className='job-cart'>
           {filterJob.length > 0 ? (
        filterJob?.map((items) => (
          <div className="fea-d my-4 ">
            <FeaCard feature={items} />
          </div>
        ))
      ) : (
        <h1 className="text-xl text-center text-red-500">No jobs Found</h1>
      )}
           </div>
        </div>
    );
};

export default JobApply;
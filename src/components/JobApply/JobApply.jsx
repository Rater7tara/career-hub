import React from 'react';
import { useEffect, useState } from "react";
import FeaCard from '../FeaCard/FeaCard';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const JobApply = () => {
    
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('jobs'));
      if (items) {
       setItems(items);
      }
    }, []);
    console.log(items);
    
    return (
        <div>
            <div className='banner-div'>
                <img className='det-banner
                ' src={'https://img.freepik.com/free-photo/flat-lay-architectural-project-with-different-tools-assortment-with-copy-space_23-2148540130.jpg?size=626&ext=jpg&ga=GA1.1.205563488.1680186315&semt=ais'} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle m-auto centered'>
                    <h1>Applied jobs</h1>
                </div>
                
            </div>
            <div>
            <DropdownButton
        as={ButtonGroup}
        title="Job_Type"
        id="bg-vertical-dropdown-1"
      >
        <Dropdown.Item value="Onsite">Dropdown link</Dropdown.Item>
        <Dropdown.Item value="Remote">Dropdown link</Dropdown.Item>
      </DropdownButton>
            </div>

            <div className='job-container'>
            {
                    items.map(item =>
                        <FeaCard
                            key={item.id}
                            feature={item}
                        ></FeaCard>)
                }
            </div>
        </div>
    );
};

export default JobApply;
import React, { useState } from 'react';
import { useEffect } from 'react';
import FeaCard from '../FeaCard/FeaCard';

const Jobs = () => {
const [jobs, setJobs] = useState([]);
const [filterJobs, setFilterJobs] = useState([]);

useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("jobs"));
    if (storedData) {
      setJobs(storedData);
      setFilterJobs(storedData);
    }
}, []);

const handleFilter = (event) => {
    const value = event.target.value;
    const filterData = jobs.filter((item) => item.btn1 == value );
    setFilterJobs(filterData)
  }
    return (
        <div>
           <div className="my-3">
        <label htmlFor="">Filter job: </label>
        <select onChange={handleFilter} className="select select-bordered w-full max-w-xs ml-2">
          <option disabled selected>
            Choose Here
          </option>
          <option value="">Veg Orders</option>
          <option value="">Non-Veg Orders</option>
        </select>
      </div>

      {filterJob.length > 0 ? (
        filterJob?.map((jobs) => (
          <div className="my-4">
            <FeaCard
            jobs={jobs}
            ></FeaCard>
          </div>
        ))
      ) : (
        <h1 className="text-xl text-center text-red-500">No Order Found</h1>
      )} 
        </div>
    );
};

export default Jobs;
import React from 'react';
import './Statistics.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const marksArray = [
        {
            "id": 1,
            "name": "A1",
            "marks": 60
        },
        {
            "id": 2,
            "name": "A2",
            "marks": 60
        },
        {
            "id": 3,
            "name": "A3",
            "marks": 58
        },
        {
            "id": 4,
            "name": "A4",
            "marks": 48
        },
        {
            "id": 5,
            "name": "A5",
            "marks": 46
        },
        {
            "id": 6,
            "name": "A6",
            "marks": 55
        },
        {
            "id": 7,
            "name": "A7",
            "marks": 60
        }
    ];
    return (
        <div>
            <h1 className='text-center'>Assignment</h1>
            <div className='sta-div text-center'>

                <img className='sta-banner
                ' src={'https://img.freepik.com/free-vector/completed-concept-illustration_114360-3891.jpg?size=626&ext=jpg&ga=GA1.1.205563488.1680186315&semt=sph'} alt="" />
                <AreaChart className='chart'
                    width={500}
                    height={400}
                    data={marksArray}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="marks"
                        stroke="#8884d8" fill="#8884d8"
                    ></Area>
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;
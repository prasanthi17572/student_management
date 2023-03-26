import React from 'react';
import Studentdata from './Studentdata';
import './Dashboard.css';
const Dashboard = () => {
    return (
        <div className='d'>
            <div className='d1'>
                <h2>No. of students:{Studentdata.length}</h2>
                {
                Studentdata.map((Studentdata)=>(
                    <>
                    <li key="Studentdata.id" className='Stuname'>{Studentdata.regno} : {Studentdata.name}</li>
                    </>
                ))
                }
            </div>
            <div className='d2'>
                <h2>Courses</h2>
                {
                Studentdata.map((Studentdata)=>(
                    <>
                    <li key="Studentdata.id" className='Stuname'>{Studentdata.name} : {Studentdata.course}</li>
                    </>
                ))
                }
            </div>
            <div className='d3'>
                <h3>Grades</h3>
                {
                Studentdata.map((Studentdata)=>(
                    <>
                    <li key="Studentdata.id" className='Stuname'>{Studentdata.name} : {Studentdata.grade}</li>
                    </>
                ))
                }
            </div>
        </div>
    );
};

export default Dashboard;
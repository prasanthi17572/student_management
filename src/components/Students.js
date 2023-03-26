import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import Studentdata from './Studentdata';
import './Studentdetails.css';
const Students = () => {
    return (
        <div className='all'>
        <div >
            <h1>Students</h1>
            {
                Studentdata.map((Studentdata)=>(
                    <>
                    <div className='studentnames'>
                    <NavLink className='studentname' to={`/students/${Studentdata.id}`} key={Studentdata.id}><li key="Studentdata.id" className='Stuname'>{Studentdata.name}</li></NavLink>
                    </div>
                    </>
                ))
            }

        </div>
        <div ><Outlet/></div>
         </div>
       
    );
};

export default Students;

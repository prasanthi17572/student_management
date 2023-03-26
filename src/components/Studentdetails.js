import React from 'react';
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Studentdata from './Studentdata';
const Studentdetails = () => {
    let studetails=useParams();
    const navigate=useNavigate();
    return (
        <>
        <div className='students'>
       <h1>details of the student</h1>
       <div className='student'>
       <h2>ID of the Student: {studetails.Studentdetails}</h2>
       {
        Studentdata.filter((item)=>studetails.Studentdetails==item.id).map((item)=>
        {
            return(
            <div>
            <h3>Regdno:{item.regno}</h3>
            <h3>Name:{item.name}</h3>
            <h3>Marks:{item.marks}</h3>
            <h3>Grades:{item.grade}</h3>
            <h3>Course:{item.course}</h3>

            </div>)
        }
        )}
       </div>
       <button onClick={()=>navigate(-1)} className="btn">Back</button>
        </div>
    
        
        </>
    );
};

export default Studentdetails;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    const activepage=({isActive})=>{
        return{
        color:isActive ? "salmon":'black'
        }
    }
    return (
        <div>
             <div className='navbar'>
            <NavLink to="dash" className='link' style={activepage}>Dashboard</NavLink>
            <NavLink to="Students" className='link' style={activepage}>Students</NavLink>
            <NavLink to="Courses" className='link' style={activepage}>Courses</NavLink>
            <NavLink to="Grades" className='link' style={activepage}>Grades</NavLink>
            <NavLink to="/" className='link' style={activepage}>Login</NavLink>
        </div>
        </div>
    );
};

export default Nav;
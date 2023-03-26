import React from 'react';
import './Grades.css';
const Grades = () => {
    return (
        <>
        <h1>Grades</h1>
        <div className='grades'>
            
            <table BORDER={1} className="grade">
                <th>MARKS</th>
                <th>GRADE</th>
                <tr>
                    <td>90-100</td>
                    <td>A+</td>
                    </tr>
                    <tr>
                    <td>80-90</td>
                    <td>A</td>
                    </tr>
                    <tr>
                    <td>70-80</td>
                    <td>B+</td>
                    </tr>
                    <tr>
                    <td>60-70</td>
                    <td>B</td>
                    </tr>
                    <tr>
                    <td>50-60</td>
                    <td>C+</td>
                    </tr>
                    <tr>
                    <td>40-50</td>
                    <td>D</td>
                    </tr>
                    <tr>
                    <td>0-40</td>
                    <td>FAIL</td>
                </tr>
            </table>
        </div>
        </>
    );
};

export default Grades;
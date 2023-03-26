import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Courses from './components/Courses';
import Grades from './components/Grades';
import Login from './components/Login';
import Nav from './components/Nav';
import Pnf from './components/PageNotFound';
import Studentdetails from './components/Studentdetails';
import SecureRoute from './components/SecureRoute';
const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='Dash' element={
        // <SecureRoute>
          <Dashboard/>
          // </SecureRoute>
        }/>
        <Route path='Students' element={<Students/>}>
          <Route path='/Students/:Studentdetails' element={<Studentdetails/>}/>
        </Route>
        <Route path='Courses' element={<Courses/>}/>
        <Route path='Grades' element={<Grades/>}/>

        <Route path='/' element={<Login/>}/>
        <Route path='*' element={<Pnf/>}/>
      </Routes>
    </div>
  );
};
export default App;
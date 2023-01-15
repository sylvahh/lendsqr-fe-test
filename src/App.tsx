import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './views/login/Login';
import UserDashboard from './views/userDashboard/UserDashboard';
import Sidebar from './components/sidebar/Sidebar';
import UserDetails from './views/userDashboard/UserDetails';
import { DataProps, IUser } from './components/utilities';

   




function App() {


  useEffect(() => {
   
  }, [])
  

  return (

    <div className="app">
      <Router>

        <Sidebar/>
        <Routes>
        <Route
          path='/'
          element={<Navigate to={'/login'} />}
        />
          <Route path='/login' element={<Login />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
          <Route path='/user-details' element={<UserDetails/>} />
          
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;

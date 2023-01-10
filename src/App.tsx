import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Login from './views/login/Login';
import UserDashboard from './views/userDashboard/UserDashboard';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (

    <div className="">
      <Router>

        <Sidebar/>
        <Routes>
        <Route
          path='/'
          element={<Navigate to={'/login'} />}
        />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<UserDashboard/>} />
        </Routes>
      </Router>

      
      {/* <Login/>  */}
    </div>
  );
}

export default App;

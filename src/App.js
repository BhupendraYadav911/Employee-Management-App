import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import EmpListing from './Components/EmpListing/EmpListing';
import EmpCreate from './Components/EmpCreate/EmpCreate';
import EmpDetail from './Components/EmpDetail/EmpDetail';
import EmpEdit from './Components/EmpEdit/EmpEdit';
import EmpDelete from './Components/EmpDelete/EmpDelete';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      
      <Router>
        <Routes>
          <Route path="/" element={<EmpListing />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empid" element={<EmpDetail />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
          <Route path="/employee/delete/:empid" element={<EmpDelete />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;

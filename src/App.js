import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LoginTemp';
import Dashboard from './Dashboard';
import Hogwarts from './Hogwarts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hogwarts" element={<Hogwarts />} />
      </Routes>
    </Router>
  );
};

export default App;

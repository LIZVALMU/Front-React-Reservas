import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
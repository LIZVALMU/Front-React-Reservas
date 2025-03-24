import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import HomeStudent from './pages/student/home/Home';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/student/home" element={<HomeStudent />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import HomeStudent from './pages/student/home/Home';
import MyBookings from './pages/my-bookings/MyBookings';
import CreateBooking from './pages/create-booking/CreateBooking';

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/student/home" element={<HomeStudent />} />
                <Route path="/mis-reservas" element={<MyBookings />} />
                <Route path="/crear-reserva" element={<CreateBooking />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/login/RegisterPage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import HomeStudent from './pages/student/home/Home';
import MyBookings from './pages/my-bookings/MyBookings';
import CreateBooking from './pages/create-booking/CreateBooking';
import LabReservation from './pages/labReservation/LabReservation';

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/student/home" element={<HomeStudent />} />
                <Route path="/mis-reservas" element={<MyBookings />} />
                <Route path="/crear-reserva" element={<LabReservation />} />
                <Route path="/crear-reserva/:id" element={<CreateBooking />} />

                
          </Routes>
      </BrowserRouter>
  );
}

export default App;
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import LandingPage from './Pages/Landing_Page';
import Login from './Pages/Login';
import Signup from "./Pages/Signup";
import OTPVerification from './Pages/OTP_verification_screen';
import Dashboard from './Pages/Dashboard';
import AccountVerification from './Pages/Account_verification';
import AboutUs from './Pages/About_Us';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/otpVerification' element={<OTPVerification />} />
        <Route path='/accountVerification' element={<AccountVerification />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/home/*' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

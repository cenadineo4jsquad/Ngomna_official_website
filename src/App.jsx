import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PayslipsPage from './pages/PayslipsPage';
import InformationPage from './pages/InformationPage';
import NotificationsPage from './pages/NotificationsPage';
import CensusPage from './pages/CensusPage';
import MessagingPage from './pages/MessagingPage';
import ChildrenPage from './pages/ChildrenPage';
import SecurityPage from './pages/SecurityPage';
import OTPPage from './pages/OTPPage';
import DGIPage from './pages/DGIPage';
import GovAIPage from './pages/GovAIPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payslips" element={<PayslipsPage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/census" element={<CensusPage />} />
          <Route path="/messaging" element={<MessagingPage />} />
          <Route path="/children" element={<ChildrenPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/otp" element={<OTPPage />} />
          <Route path="/dgi" element={<DGIPage />} />
          <Route path="/gov-ai" element={<GovAIPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import AuthorityPanel from './pages/AuthorityPanel';
import UserBalance from './pages/UserBalance';
import UploadProject from './pages/UploadProject';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/authority" element={<AuthorityPanel />} />
            <Route path="/balance" element={<UserBalance />} />
            <Route path="/upload" element={<UploadProject />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
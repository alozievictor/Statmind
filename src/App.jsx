import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Legal from './components/Legal';
import DeleteAccount from './components/DeleteAccount';
import TermsConditions from './components/TermsConditions';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/privacy-policy" element={<Legal />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

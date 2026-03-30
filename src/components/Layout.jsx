import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-white selection:bg-brand-accent/30 selection:text-brand-accent">
      <Navbar />
      <main className="flex-grow pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="py-20 px-4 min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6">Let's <span className="text-gradient">Talk.</span></h1>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Have questions about Statmind? Whether it's support, feature requests, or partnership inquiries, our team is ready to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                  <Mail className="text-brand-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Us</p>
                  <p className="text-lg font-medium">support@statmind.app</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                  <MessageSquare className="text-brand-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Follow Us</p>
                  <p className="text-lg font-medium">@statmind on Twitter</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden"
        >
          {formState === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center"
            >
              <CheckCircle className="w-20 h-20 text-brand-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
              <p className="text-gray-400 mb-8">We'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="bg-brand-accent px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>
              <button 
                disabled={formState === 'loading'}
                className="w-full bg-brand-accent disabled:opacity-50 text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-brand-accent/20 flex items-center justify-center gap-3"
              >
                {formState === 'loading' ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, KeyRound, Trash2, ShieldAlert, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const DeleteAccount = () => {
  const [step, setStep] = useState(1); // 1: Credentials, 2: OTP, 3: Success
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const API_ENDPOINTS = {
    SEND_OTP: 'https://ai-betting-tips-api-node-mern.onrender.com/auth/operation/delete_account/sendotp',
    VERIFY_DELETE: 'https://ai-betting-tips-api-node-mern.onrender.com/auth/operation/delete_account/verify'
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }

    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(API_ENDPOINTS.SEND_OTP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send verification code');
      }
      
      setStep(2);
      setMessage({ type: 'success', text: 'Verification code sent to your email' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Failed to send verification code. Please check your credentials.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    if (!otp) {
      setMessage({ type: 'error', text: 'Please enter the verification code' });
      return;
    }

    const confirmDelete = window.confirm("Are you absolutely sure you want to delete your account? This action is permanent and cannot be undone.");
    if (!confirmDelete) return;

    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(API_ENDPOINTS.VERIFY_DELETE, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid verification code');
      }
      
      setStep(3); // Success step
      setMessage({ type: 'success', text: 'Your account has been successfully deleted.' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Invalid verification code. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-20 px-4 min-h-[calc(100vh-80px)] flex items-center justify-center bg-brand-bg relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl overflow-hidden shadow-2xl relative"
      >
        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center justify-center mb-6 transition-transform hover:scale-110 duration-500">
              <Trash2 className="text-red-500 w-10 h-10" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Delete Account</h1>
            <p className="text-gray-400 text-center mt-3 text-sm leading-relaxed max-w-[280px]">
              {step === 1 && "Security check: Please verify your credentials to continue."}
              {step === 2 && "A 6-digit code has been sent to your email address."}
              {step === 3 && "We're sorry to see you go. Your data has been removed."}
            </p>
          </div>

          {/* Messages */}
          <AnimatePresence mode="wait">
            {message.text && (
              <motion.div 
                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                className={`p-4 rounded-2xl mb-6 flex items-start gap-3 text-sm border ${
                  message.type === 'error' ? "bg-red-500/10 text-red-400 border-red-500/20" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                }`}
              >
                {message.type === 'error' ? <ShieldAlert className="shrink-0 w-5 h-5" /> : <CheckCircle2 className="shrink-0 w-5 h-5" />}
                <p className="font-medium">{message.text}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 1: Credentials */}
          {step === 1 && (
            <form onSubmit={handleSendOtp} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Account Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-accent transition-colors" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-white placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-accent transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-14 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all text-white placeholder:text-gray-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-[60px] flex items-center justify-center gap-2 bg-brand-accent text-white rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-brand-accent/20 mt-8"
              >
                {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Request Deletion Code"}
              </button>
            </form>
          )}

          {/* Step 2: OTP Entry */}
          {step === 2 && (
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleDeleteAccount} 
              className="space-y-5"
            >
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 text-center block">Enter 6-Digit Code</label>
                <div className="relative group">
                  <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-red-500 transition-colors" />
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    placeholder="000 000"
                    className="w-full pl-12 pr-4 py-6 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-white text-center text-3xl tracking-[0.3em] font-black placeholder:text-gray-800"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[60px] flex items-center justify-center bg-red-600 text-white rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 shadow-xl shadow-red-600/20"
                >
                  {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Delete Account Permanently"}
                </button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full flex items-center justify-center gap-2 py-2 text-gray-500 hover:text-white transition-colors text-sm font-semibold"
                >
                  <ArrowLeft size={16} />
                  Use a different email
                </button>
              </div>
            </motion.form>
          )}

          {/* Step 3: Success Screen */}
          {step === 3 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                <CheckCircle2 className="text-emerald-500 w-12 h-12" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">Goodbye!</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Your account and all associated data have been permanently removed. It may take up to 24 hours for all cached data to disappear.
              </p>
              <Link
                to="/"
                className="inline-block px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Back to Homepage
              </Link>
            </motion.div>
          )}

          {/* Footer Info */}
          {step !== 3 && (
            <div className="mt-10 pt-8 border-t border-white/5 text-center">
              <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-black mb-4">Statmind Security Terminal</p>
              <div className="flex justify-center gap-6">
                <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-white transition-colors font-bold">Privacy Policy</Link>
                <Link to="/terms-conditions" className="text-xs text-gray-500 hover:text-white transition-colors font-bold">Terms of Service</Link>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteAccount;

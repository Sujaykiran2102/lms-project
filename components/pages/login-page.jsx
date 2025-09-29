"use client";
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Navbar from '../layout/navbar';
import InputField from '../global/input-field';
import Button from '../global/button';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error('Email and password are required.');
      return;
    }
    setIsLoading(true);
    const loadingToast = toast.loading('Signing you in...');
    
    try {
      const res = await signIn("credentials", { 
        redirect: false, 
        email: form.email,
        password: form.password
      });
      
      toast.dismiss(loadingToast);

      if (res?.error) {
        toast.error("Invalid credentials. Please check your email and password.");
        return;
      }
      
      if (res?.ok) {
        toast.success('Login successful! Redirecting...');
        // We need to get the session to know the user's role for redirection
        const sessionRes = await fetch('/api/auth/session');
        const session = await sessionRes.json();
        const role = session?.user?.role;
        
        if (role === 'admin') {
          router.push('/admin-dashboard');
        } else {
          router.push('/student-dashboard');
        }
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-16 bg-white">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl text-black font-bold mb-6 text-center">Sign In</h2>
          <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" disabled={isLoading} required />
          <InputField label="Password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter your password" disabled={isLoading} required />
          <div className="mt-6">
            <Button type="submit" disabled={isLoading} className="w-full">{isLoading ? 'Signing in...' : 'Sign In'}</Button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <button type="button" onClick={() => router.push('/signup')} className="text-blue-600 hover:text-blue-800 underline">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
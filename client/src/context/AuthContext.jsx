import React, { createContext, useState, useEffect } from 'react';
import api from '../utils/api';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkUserLoggedIn = async () => {
      const token = localStorage.getItem('token');
      const userInfo = localStorage.getItem('userInfo');
      
      if (token && userInfo) {
        try {
          setUser(JSON.parse(userInfo));
        } catch (error) {
          console.error('Error parsing user info', error);
          localStorage.removeItem('token');
          localStorage.removeItem('userInfo');
        }
      }
      setLoading(false);
    };

    checkUserLoggedIn();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post('/users/login', { email, password });
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);
      toast.success('Logged in successfully!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Invalid credentials';
      toast.error(message);
      return { success: false, message };
    }
  };

  const register = async (name, email, password) => {
    try {
      const { data } = await api.post('/users/register', { name, email, password });
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);
      toast.success('Registration successful!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed';
      toast.error(message);
      return { success: false, message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setUser(null);
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

import { useState, useEffect } from 'react';
import Router from 'next/router';
import { userInfo } from '../api/api';

const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await userInfo()
        if(data) {
          setAuthenticated(true);
        }
      } catch (error) {
        console.error('Failed to check authentication status:', error);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setAuthenticated(true);
        Router.push('/dashboard');
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Failed to login:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      if (response.ok) {
        setAuthenticated(false);
        Router.push('/');
      } else {
        throw new Error('Failed to logout');
      }
    } catch (error) {
      console.error('Failed to logout:', error);
      throw error;
    }
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
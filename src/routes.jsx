import React from 'react';
import AuthLayout from './pages/auth/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AccountLayout from './pages/account/AccountLayout';
import Contacts from './pages/account/Contacts';
import Calendar from './pages/account/Calendar';
import ReportProject from './pages/account/ProjectReport';
import { Navigate } from 'react-router-dom';

const routes = () => [
  {
    path: '/',
    element: <AccountLayout />,
    children: [
      { path: 'contacts', element: <Contacts /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'projectReport', element: <ReportProject /> }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'signIn', element: <Login /> },
      { path: 'signUp', element: <Register /> }
    ]
  },

  {
    path: '*',
    element: <Navigate to='/' />
  }
];

export default routes;

import React from 'react';
import HomePage from '../pages/HomePage/HomePage';


const routes = [
  {
    id: 1,
    path: '/',
    private: false,
    component: () => <HomePage />
  }
];

export default routes;

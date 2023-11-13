import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import routes from './constants/routes';

const RouterOutlet = () => {

  const isAuthenticated = true; 

  return (
    <BrowserRouter>
       <Routes>
        {routes.map(({ id, path, component, private: isPrivate }) => (
          <Route
            key={id}
            path={path}
            element={
              isPrivate && !isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                component()
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterOutlet;

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouter = ({ component: Component, path }) => {
  return (
    <Route
      path={path}
      component={(props) => {
        const token = window.localStorage.getItem('userInfo');
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={'/login'} />;
        }
      }}
    />
  );
};

export default PrivateRouter;

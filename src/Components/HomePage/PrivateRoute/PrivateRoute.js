import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';

const PrivateRoute = ({children, ...rest}) => {

  const [loggedInUser] = useContext(UserContext);

  const userId = sessionStorage.getItem('token')
  const isLoggedIn = userId || loggedInUser.email

  return (
      <Route
    {...rest}
    render={({ location }) =>
      isLoggedIn ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
  );
};
export default PrivateRoute;
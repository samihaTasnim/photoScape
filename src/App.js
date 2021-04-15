import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createContext, useState } from 'react';
import Nomatch from './Components/HomePage/Nomatch/Nomatch';
import HomePage from './Components/HomePage/HomePage/HomePage';
import Login from './Components/HomePage/Login/Login';
import PrivateRoute from './Components/HomePage/PrivateRoute/PrivateRoute';
import UserPage from './Components/UsersPage/UserPage';
import AdminPage from './Components/AdminPage/AdminPage';
import Orderlist from './Components/AdminPage/Orderlist/Orderlist'
import Addservice from './Components/AdminPage/Addservice/Addservice';
import Review from './Components/UsersPage/Review/Review';

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/book">
            <UserPage></UserPage>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute exact path="/admin">
            <Orderlist/>
          </PrivateRoute>
          <PrivateRoute path="/admin/addservice">
            <Addservice></Addservice>
          </PrivateRoute>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from 'react';
import Nomatch from './Components/HomePage/Nomatch/Nomatch';
import HomePage from './Components/HomePage/HomePage/HomePage';
import Login from './Components/HomePage/Login/Login';
import PrivateRoute from './Components/HomePage/PrivateRoute/PrivateRoute';
import UserPage from './Components/UsersPage/UserPage';
import Orderlist from './Components/AdminPage/Orderlist/Orderlist'
import Addservice from './Components/AdminPage/Addservice/Addservice';
import Review from './Components/UsersPage/Review/Review';
import BookingList from './Components/UsersPage/BookingsList/BookingsList'
import Makeadmin from './Components/AdminPage/Makeadmin/Makeadmin';
import ManageService from './Components/AdminPage/ManageService/ManageService';
import ServiceDetail from './Components/HomePage/Services/ServiceDetail';

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
          <Route path="/service/:id">
            <ServiceDetail></ServiceDetail>
          </Route>
          <PrivateRoute path="/book/:id">
            <UserPage></UserPage>
          </PrivateRoute>
          <PrivateRoute path="/bookinglist">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute exact path="/admin">
            <Orderlist/>
          </PrivateRoute>
          <PrivateRoute exact path="/manage">
            <ManageService/>
          </PrivateRoute>
          <PrivateRoute exact path="/makeadmin">
            <Makeadmin/>
          </PrivateRoute>
          <PrivateRoute path="/admin/addservice">
            <Addservice></Addservice>
          </PrivateRoute>
          <PrivateRoute path="/admin/orders">
            <Orderlist></Orderlist>
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

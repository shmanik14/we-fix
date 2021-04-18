import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Book from './component/Book/Book';
import AddTestimonial from './component/AddTestimonial/AddTestimonial';
import AddService from './component/AddService/AddService';
import BookingList from './component/BookingList/BookingList';
import OrderList from './component/OrderList/OrderList';
import MangeService from './component/ManageService/MangeService';
import Admin from './component/Admin/Admin';
import MakeAdmin from './component/MakeAdmin/MakeAdmin';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/book/:id">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/addTestimonial">
              <AddTestimonial></AddTestimonial>
            </PrivateRoute>            
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>                       
            <PrivateRoute path="/bookingList">
              <BookingList></BookingList>
            </PrivateRoute>                                
            <PrivateRoute path="/orderList">
              <OrderList></OrderList>
            </PrivateRoute>                                            
            <PrivateRoute path="/manageService">
              <MangeService></MangeService>
            </PrivateRoute>
                                                       
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;

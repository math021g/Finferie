import './App.css';
import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './components/common/protectedRoute';
import Apartments from './components/apartments';
import Home from './components/home';
import Login from './components/login';
import Navbar from './components/navbar';
import NotFound from './components/not-found';
import Booking from './components/bookingForm';
import Apartment from './components/apartment';
import Logout from './components/logout';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from './services/authService';
import AdminPanel from './components/adminPanel';
import Reservations from './components/reservationer';


class App extends Component {

  state= {
    
  }

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({user});
    
  }

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user}/>
        <ToastContainer/>
          <Switch>
            <Route path="/apartments" component={Apartments}/>
            <Route path="/apartment/:id" component={Apartment}/>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/booking/:apartment/:dateFrom/:dateTo" component={Booking}/>
            <Route path="/not-found" component={NotFound}/>
            <Route path="/admin" component={AdminPanel}/>
            <Route path="/reservation/:id" component={Reservations}/>
            <ProtectedRoute path="/logout" component={Logout}/>
            <Redirect to="not-found"/>
          </Switch>
      </React.Fragment>
    );
  }
  
}

export default App;

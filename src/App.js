import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About/About';
import Contact from './Pages/Contact/Contact/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Test from './Test/Test';
import Profile from './Pages/Dashboard/Profile/Profile';
import AuthProvider from './context/AuthProvider';
import AllCars from './Pages/AllCars/AllCars';
import Buycar from './Pages/Buycar/Buycar';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import useAuth from './hook/useAuth';

function App() {
  return (
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/"> 
            <Home></Home>
          </Route>
          <Route exact path="/home"> 
            <Home></Home>
          </Route>
          <Route exact path="/about"> 
            <About></About>
          </Route>
          <Route exact path="/contact"> 
            <Contact></Contact>
          </Route>
          <Route exact path="/login"> 
            <Login></Login>
          </Route>
          <Route exact path="/register"> 
            <Register></Register>
          </Route>
          <Route path="/dashboard"> 
            <Dashboard></Dashboard>
          </Route>
          <PrivetRoute exact path="/profile"> 
           <Profile></Profile>
          </PrivetRoute>
          <Route exact path="/allcars"> 
           <AllCars></AllCars>
          </Route>
          <PrivetRoute exact path="/allcars/:carID"> 
           <Buycar></Buycar>
          </PrivetRoute>
        </Switch>
      </Router>
      </AuthProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import Employeelist from './Pages/Employeelist/Employeelist';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'><Home></Home></Route>
          <Route path='/login'><Login></Login></Route>
          <Route path='/employeelist'><Employeelist></Employeelist></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

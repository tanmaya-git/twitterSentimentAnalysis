import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';
import {Navbar, Form, Table} from 'react-bootstrap';
import { Route,Switch } from 'react-router';
import { Redirect, BrowserRouter } from 'react-router-dom';
import input from './input';
import PieChartNew from './PieChartNew';
import DatafromSql from './DatafromSql';
import KendoUILayout from './KendoUILayout.js';

class App extends Component {
  render() {
    return (
      <div className="App"  >
      <div style={{fontSize: '20px', fontWeight : 'bold', marginTop: '10px', marginBottom: '0px'}}>
        <Navbar bg="success" variant="dark">
           <Navbar.Brand href="#home">
              Twitter API Search
           </Navbar.Brand>
        </Navbar>
        <div style={{marginTop : '5px'}}>
        
<BrowserRouter>
        <Switch> 
        <Route exact path="/" component={Search} />
        <Route exact path="/input" component={input} />
        <Route exact path="/chart" component={PieChartNew} />
        <Route exact path="/sql" component={DatafromSql} />
        <Route exact path="/kendoui" component={KendoUILayout} />
        </Switch>
        </BrowserRouter>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

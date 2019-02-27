import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';
import {Navbar, Nav,Form, Table} from 'react-bootstrap';
import { Route,Switch } from 'react-router';
import { Redirect, BrowserRouter } from 'react-router-dom';
import input from './input';
import PieChartNew from './PieChartNew';
import DatafromSql from './DatafromSql';
import KendoUILayout from './KendoUILayout.js';
import twitter from './twitter.png'
class App extends Component {
  render() {
    return (
      <div className="App"  style={{}} >
      <div style={{fontSize: '20px', fontWeight : 'bold', marginBottom: '0px'}}>
      <Navbar   variant="dark" style= {{ height:'50px', backgroundColor: '#8E44AD    '}}>
    <Navbar.Brand href="#home" style={{marginLeft: '5px', marginRight: '20px'}}>
      <img
        alt=""
        src= {twitter}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
   
   <Nav className="mr-auto" style={{color: 'white'}}>
      <Nav.Item style ={{marginRight: '10px', fontSize: '15px'}} href="#home">Twitter Sentiment analysis</Nav.Item>
      <Nav.Item style ={{marginLeft:'50px',marginRight: '10px', fontSize: '15px'}} href="#home">Home</Nav.Item>
      <Nav.Item style ={{marginRight: '10px', fontSize: '15px'}} href="#features">Features</Nav.Item>
      <Nav.Item style ={{marginRight: '10px', fontSize: '15px'}} href="#pricing">Pricing</Nav.Item>
    </Nav>
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

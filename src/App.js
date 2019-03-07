import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';
import {Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap';
import { Route,Switch } from 'react-router';
import { Redirect, BrowserRouter } from 'react-router-dom';
import input from './input';
import PieChartNew from './PieChartNew';
import DatafromSql from './DatafromSql';
import KendoUILayout from './KendoUILayout.js';
import twitter from './twitter.png';
import WorldMap from './WorldMap';
import Linechart from './Linechart';
import Barchart from './Barchart';

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
      <Nav.Item style ={{marginRight: '10px', fontSize: '15px'}} href="/">Twitter Sentiment analysis</Nav.Item>
      <Nav.Link style ={{marginLeft:'50px',marginRight: '10px', fontSize: '15px'}} href="/">Home</Nav.Link>
      <Nav.Link style ={{marginRight: '10px', fontSize: '15px'}} href = '/sql'>SQL Data</Nav.Link>
      <Nav.Link style ={{marginRight: '10px', fontSize: '15px'}} href="/">Keyword</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl style = {{height: '30px'}} type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant= ' outline' style={{color: 'white'}}>Search</Button>
    </Form>
  </Navbar>
        <div style={{marginTop : '5px'}}>
        
<BrowserRouter>
        <Switch> 
        <Route exact path="/" component={KendoUILayout} />
        <Route exact path="/input" component={input} />
        <Route exact path="/chart" component={PieChartNew} />
        <Route exact path="/sql" component={DatafromSql} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/map" component={WorldMap} />
        <Route exact path="/line" component={Linechart} />
        <Route exact path="/bar" component={Barchart} />
        </Switch>
        </BrowserRouter>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

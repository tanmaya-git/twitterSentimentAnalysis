import React, { Component } from 'react';
import {Button, Form, Table, Col} from 'react-bootstrap';
import axios from 'axios';
import PieChartNew from './PieChartNew';


export default class input extends Component{
    constructor(props){
        super(props);
        this.state = {
            location: '',
            keyword : '',
            todate:'',
            fromdate:'',
            token: '',
            

        }
    }

    handleLocation = (e) =>{
        console.log(e.target.name, e.target.value);
        this.setState({ location: e.target.value });
    }
    handleEmail = (e) =>{
        console.log(e.target.name, e.target.value);
        this.setState({ keyword: e.target.value });
    }
    handleToken = (e) =>{
        console.log(e.target.name, e.target.value);
        this.setState({ token: e.target.value });
        // console.log(this.state.token)
    }
    handleTodate = (e) =>{
        console.log(e.target.name, e.target.value);
        this.setState({ todate: e.target.value });
    }
    handleFromDate = (e) =>{
        console.log(e.target.name, e.target.value);
        this.setState({ fromdate: e.target.value });
    }


    handleSubmit =(e) =>{
        const { location, keyword, token, todate, fromdate } = this.state;
        const formValues={
            location:this.state.location,
            keyword: this.state.keyword,
            token:this.state.token,
            todate:this.state.todate,
            fromdate:this.state.fromdate
          }
      
        axios.post(`http://localhost:3002/newPython`, { location, keyword, token, todate, fromdate  })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    }

    render(){
        return(
            <div>
        <Form >
        <Form.Row >
            <Form.Group controlId="formBasicEmail" pullLeft style={{marginLeft : '100px',width : '40%'}}>
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Label style={{fontSize: '12px', marginRight: '89%'}}>Keyword</Form.Label>
                <Form.Control type="email" value={this.state.value}
          name = "email"  
          onChange = {this.handleEmail}
          placeholder="Enter the keyword search"  />
          </Form.Group>
          <Form.Group style={{width : '40%', marginLeft : '20px'}}>
          <Form.Label style={{fontSize: '12px', marginRight: '89%'}}>Location</Form.Label>
                <Form.Control type="text" 
                value={this.state.value}
                name = "location"
                onChange = {this.handleLocation}
                placeholder="Location" pullRight/>
            </Form.Group>
            </Form.Row>
         < Form.Row>
            <Form.Group controlId="formBasicText" style={{marginLeft: '99px', marginRight: '20px', width : '81.6%'}} >
            <Form.Label style={{fontSize: '12px', marginRight: '92%'}}>Bearer token</Form.Label>
                <Form.Control type="password" 
                value={this.state.value}
                name = "token"
                onChange = {this.handleToken}
                placeholder="Bearer Token" />
           </Form.Group>
           </Form.Row>
            <Form.Row>
            <Form.Group controlId="formBasicText" pullLeft style={{marginLeft : '100px',width : '40%'}}>
            <Form.Label style={{fontSize: '12px', marginRight: '90%'}}>To Date</Form.Label>
                <Form.Control 
          name = "todate"
          onChange = {this.handleTodate}
          placeholder="To Date" />
        </Form.Group>
        <Form.Group style={{width : '40%', marginLeft : '20px'}} >
        <Form.Label style={{fontSize: '12px', marginRight: '87%'}}>From Date</Form.Label>
                <Form.Control type="text" 
                value={this.state.value}
                name = "fromdate"
                onChange = {this.handleFromDate}
                placeholder="From Date" pullright />
            </Form.Group>
            </Form.Row>
            </Form>
            <Button variant="info"  size = 'sm ' block style ={{marginBottom: '20px', width: '20%', marginLeft: '39%'}} type="submit" onClick= {this.handleSubmit}>
                Submit
            </Button>

            <PieChartNew/>
            
            </div>
        )
    }
}
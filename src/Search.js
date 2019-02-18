import React, { Component } from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import axios from 'axios';



export default class Search extends Component {
   constructor(props){
       super(props);
       this.state ={
           show : false,
           results :[],

       }
   }

   componentDidMount(){
        axios.get('http://localhost:3001/pythonscript')
        .then(res => {
            const results = res.data;
            this.setState({ results });
        })
        console.log(this.state.results);
   }

handleSubmit = () => {
    if(this.state.show === false){
        this.setState({show: true});
    }
    else {
        this.setState({show: false}); 
    }
}

    render() {
      return (
        <div >
            <div>
        <Form>
            <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" placeholder="Enter the keyword search" />
            </Form.Group>
            </Form>
            <Button variant="info"  style ={{padding: '10px', marginBottom: '20px'}} type="submit" onClick= {this.handleSubmit}>
                Submit
            </Button>
            </div>
            {this.state.show === true ?
            <React.Fragment>
                 <Table striped bordered hover>
                 <thead style= {{fontSize: '14px'}}>
                   <tr>
                     <th>Tweets</th>
                     <th>Name</th>
                     <th>Screen Name</th>
                     <th>Location</th>
                     <th>Place</th>
                     <th>len</th>
                     <th>ID</th>
                     <th>Date</th>
                     <th>Source</th>
                     <th>Likes</th>
                     <th>RTs</th>
                     <th>SA</th>

                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                   </tr>
                   <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                   </tr>
                   <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                   </tr>
                 </tbody>
               </Table>
               <ul>
                    { this.state.results}
               </ul>
               </React.Fragment>
               : ''}
        
</div>
      );
    }
  }
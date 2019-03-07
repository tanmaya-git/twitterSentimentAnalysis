import React, {Component} from 'react';
import {Table, Form, Button, Modal,Container, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import {PieChart, BarChart, LineChart} from 'react-easy-chart';
import PieChartNew from './PieChartNew';
import KendoUILayout from './KendoUILayout';
import { Window } from '@progress/kendo-react-dialogs';

export default class TopTweets extends Component {
    constructor(props){
        super(props);
        this.state ={
            sqlData :[],
            keyword : '',
            selectedFile : [],
            visibleWindow: true,
 
        }
    }
 
    componentDidMount(){
         axios.get('http://localhost:3001/mysql')
         .then(res => {
             const sqlData = res.data;
             this.setState({ sqlData });
         })
         
    }

    toggleWindow= () => {
        this.setState({
            visibleWindow: !this.state.visibleWindow
        });
    }
    render(){
        const {sqlData} = this.state;
       
      let piedata = sqlData.map( d => {
            return{
               
            x : d.ScreenName,
           y : d.len,
           
            }
        });
        // const topT = sqlData.map((sqlD) => 
        // <tr>
        // <td key = {sqlD.ID}> { sqlD.Tweets } </td>
        // </tr>)
    //   console.log(topT);
  return (
 <div>

{/* //           { this.state.visibleWindow && <Window title={"Top Tweets"} onClose={this.toggleWindow}>
// { topT }  
// </Window>} */}

    <Table   hover style={{height: '100%'}} >
  <thead style= {{fontSize: '12px', color: 'grey'}}>
    <tr>
      <th>Top 3 Tweets based on Retweet</th>
    </tr>
  </thead>
  <tbody style= {{fontSize: '10px'}}> {this.state.sqlData.map( function (sqlD, key) {
        return(
          <tr key={ sqlD.ID}>            
            <td>{ sqlD.Tweets} </td> 
          </tr>
              )
      })}
    </tbody>
</Table>

    </div> 

  );
}}
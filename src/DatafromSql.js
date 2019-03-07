import React, {Component} from 'react';
import {Table, Form, Button, Modal,Container, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import {PieChart, BarChart, LineChart} from 'react-easy-chart';
import PieChartNew from './PieChartNew';
import KendoUILayout from './KendoUILayout';

export default class DatafromSql extends Component {
    constructor(props){
        super(props);
        this.state ={
            sqlData :[],
            keyword : '',
            selectedFile : [],
 
        }
    }
 
    componentDidMount(){
         axios.get('http://localhost:3001/mysql')
         .then(res => {
             const sqlData = res.data;
             this.setState({ sqlData });
         })
         
    }

    // handleChange = (e) =>{
    //     const keyword = e.target.value;
    //     this.setState({keyword});
    //     console.log(this.state.keyword);
    // }


//     handleselectedFile = (e) => {
//       // console.log(e.target.files[0]);
//       let abc = e.target.files[0];

//       this.setState({ selectedFile: abc });
//       console.log(this.state.selectedFile);
//     }

//     handleSubmit =(e) =>{
//       e.preventDefault();
     
//       console.log("handle Submit state",this.state.selectedFile);
//       const formData = new FormData();

//     // let file =[0]
//     //   this.state.selectedFile.map(function (item, i) {
//     //     console.log('item_if', item);
//     //     formData.append(file[0], item);
//     // })
// // console.log(formData);

//       formData.append('file', this.state.selectedFile);
//       console.log(formData.get('file'));
//       for (const entry of formData.entries())
//       {
//           console.log(entry);
//       }
//         const { keyword, selectedFile} = this.state;

//       // console.log(keyword);
//       const config = {
//         headers: {
//           'content-type': 'multipart/form-data'
//         }
//       }
  
    
//       axios.post('http://localhost:3001/file', formData, config )
//       .then((response) => {
//         console.log(response);
//     }).catch((error) => {
// })
// }

    render(){
        const {sqlData} = this.state;
       
      let piedata = sqlData.map( d => {
            return{
               
            x : d.ScreenName,
           y : d.len,
           
            }
        });
        // console.log(piedata);
  return (
      <div>
      {/* <div> */}

       
      {/*} <Form method = "POST" encType = "multipart/form-data">
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Choose File to Upload</Form.Label>
    <Form.Control name = "fileupload" type="file" accept='.csv' placeholder="" style={{marginLeft: '45%', marginRigh: '45%'}}  onChange={this.handleselectedFile}/>
  </Form.Group>
  <Button onClick= {this.handleSubmit} variant="primary" type="submit">
    Submit
  </Button>
  </Form> */}


      {/* </div> */}

{/* <BarChart
    colorBars
    axisLabels={{x: 'Screen Name', y: 'Length'}}
    height={350}
    width={1050}
    data={piedata}
    axes
    /> */}
            <div style={{marginTop: '10px', marginLeft: '36%'}}>
                <PieChartNew />
                </div>
                <div>
                <Container style={{marginTop: '20px'}}>
                    <Row>
                    <Col sm>
    <Table striped bordered hover style={{height: '100%'}} >
  <thead style= {{fontSize: '12px', color: 'blue'}}>
    <tr>
      <th>Top 3 Tweets based on Retweet</th>
      {/* <th>Name</th>
      <th>Screen Name</th>
      <th>Location</th>
      <th>Place</th>
      <th>Len</th>
      <th>ID</th>
      <th>Date</th>
      <th>Source</th>
      <th>Likes</th>
      <th>RTs</th>
      <th>SA</th> */}

    </tr>
  </thead>
  <tbody style= {{fontSize: '10px'}}> {this.state.sqlData.map( function (sqlD, key) {
        return(
          <tr key={ sqlD.ID}>            
            <td>{ sqlD.Tweets} </td> 
            {/* <td>{ sqlD.Name} </td> 
            <td>{ sqlD.ScreenName} </td> 
            <td>{ sqlD.Location} </td> 
            <td>{ sqlD.Place} </td> 
            <td>{ sqlD.len} </td> 
             <td>{ sqlD.ID} </td> 
              <td>{ sqlD.Date} </td> 
               <td>{ sqlD.Source} </td> 
               <td>{ sqlD.Likes} </td> 
               <td>{ sqlD.RTs} </td> 
               <td>{ sqlD.SA} </td>  */}
          </tr>
              )
      })}
    </tbody>
</Table>
</Col>
<Col sm>
    <div >
    <KendoUILayout />
    </div>
    </Col>
    </Row>
    </Container>
    </div> 
</div>
  );
}}
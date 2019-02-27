import React from 'react';
import ReactDOM from 'react-dom';
import { Chat } from '@progress/kendo-react-conversational-ui';
import { Upload } from '@progress/kendo-react-upload';
import {Form,Container, Col, Row} from 'react-bootstrap';
import { Button} from '@progress/kendo-react-buttons';
import axios from 'axios';
import PieChartNew from './PieChartNew';
import { Dialog, Window } from '@progress/kendo-react-dialogs';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';
import {
  
    ChartTitle,
    ChartLegend,
    ChartArea,
    ChartTooltip,
    ChartSeriesLabels
  } from '@progress/kendo-react-charts';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.user = {
            id: 1,
            avatarUrl: "https://avatars.dicebear.com/v2/identicon/34db886bcee2a1e7796c34128b1dee32.svg"
        };
        this.bot = { id: 0 ,
        avatarUrl: 'https://avatars.dicebear.com/v2/identicon/1b52dbaf5fae39f76932a127379ab8b7.svg'
                    };
        this.state = {
            files: [],
            area : false,
            bar: false,
            upload: false,
            barData: [],
            visibleWindow: false,
            keyword : '',
            messages: [
                {
                    author: this.bot,
                    suggestedActions: [
                        {
                            type: 'reply',
                            value: 'Oh, really?'
                        }, {
                            type: 'reply',
                            value: 'Thanks, but this is borring.'
                        }
                    ],
                    timestamp: new Date(),
                    text: 'Hola! This is Geenie.',
                   
                },
                {
                    author: this.bot,
                    timestamp: new Date(),
                    text: 'Welcome to Twitter Sentiment Analysis!',
                   
                      
                },
                {
                    author: this.bot,
                    timestamp: new Date(),
                    text: 'Type in a keyword to get the Sentiment  or choose a CSV file.',
                   
                      
                },
                {
                    author: this.bot,
                    timestamp: new Date(),
                //     text:  <Upload
                //     batch={false}
                //     restrictions={{
                //         allowedExtensions: [ '.csv']
                //     }}
                //     autoUpload = {false}
                //     onAdd = {this.handleAdd.bind(this)}
                //     multiple={false}
                //     defaultFiles={[]}
                //     files = {this.files}
                //     withCredentials={false}
                //     saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
                //     removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
                // />
                // text: <Form method = "POST" encType = "multipart/form-data" >
                text: <Form >
                <Form.Group controlId="formBasicEmail">
                  <Form.Control name = "fileupload" type="file" accept='.csv' placeholder="" style = {{color: 'green'}} onChange={this.handleselectedFile} />
                </Form.Group>
                <Button onClick= {this.handleSubmit} primary={true}>Upload</Button>
              </Form> 
              
                   
                      
                }
            ]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:3001/areachart')
        .then(res => {
            const barData = res.data;
            console.log(res.data);
            this.setState({ barData });
            
        })

    }

    toggleWindow= () => {
        this.setState({
            visibleWindow: !this.state.visibleWindow
        });
    }
    
    addNewMessage = (event) => {
console.log(this.state.upload)
      if(this.state.upload === true){
         let  messageFile = {
            author: this.bot,
            timestamp: new Date(),
            text: '',
            suggestedActions: [
                {
                    type: 'alert',
                    value: 'Area chart'
                }, {
                    type: 'alert',
                    value: 'Bar Chart'
                },
                {
                    type: 'alert',
                    value: 'Box Chart'
                }
            ],   
        };
        let botResponce = Object.assign({}, messageFile);
        botResponce.text = this.countReplayLengthFile('');
        botResponce.author = this.bot;
        this.setState((prevState) => ({
            messages: [
                ...prevState.messages,
                messageFile
            ]
        }));
        setTimeout(() => {
            this.setState(prevState => ({
                messages: [
                    ...prevState.messages,
                    botResponce
                ]
            }));
        }, 1000);

        this.setState({ upload: false});

      }
 else {


        let botResponce = Object.assign({}, event.message);
        console.log(event.message.text);
        // this.setState({ keyword : event.message.text});
        // console.log(this.state.keyword);
       
        botResponce.text = this.countReplayLength(event.message.text);
        botResponce.author = this.bot;
        this.setState((prevState) => ({
            messages: [
                ...prevState.messages,
                event.message
            ]
        }));
        setTimeout(() => {
            this.setState(prevState => ({
                messages: [
                    ...prevState.messages,
                    botResponce,
                     {
                        author: this.bot,
                        timestamp: new Date(),
                        text: '',
                        suggestedActions: [
                            {
                                type: 'alert',
                                value: 'Area chart'
                            }, {
                                type: 'alert',
                                value: 'Bar Chart'
                            },
                            {
                                type: 'alert',
                                value: 'Box Chart'
                            }
                        ],   
                    }
                ]
            }));
        }, 1000);
    }
    };

    onAction = (event) => {
        if (event.action.type === 'alert') {
            
            this.setState((prevState) => {
                return { messages: [ ...prevState.messages, { author: this.user, text: 'Oh you chose ' + event.action.value + ' . \n Great choice! You can see the results on left hand side.'}, {
                    author: this.bot,
            timestamp: new Date(),
            text: '',
            suggestedActions: [
                {
                    type: 'alert',
                    value: 'Area chart'
                }, {
                    type: 'alert',
                    value: 'Bar Chart'
                },
                {
                    type: 'alert',
                    value: 'Box Chart'
                },]
                 } ] };
            });
            if(event.action.value === 'Area chart'){
                this.setState ( { area: true,
                                  bar : false});
            }
            else if (event.action.value === 'Bar Chart'){
                this.setState ({ bar : true, 
                                 area : false});
            }
            else {
                this.setState ({ bar : true, 
                    area : false,
                    visibleWindow: true,
                });

                axios.get('http://localhost:3001/sql')
                .then(res => {
                    const barData = res.data;
                    console.log(res.data);
                    this.setState({ barData });
                    
                })

            }
        }
    }

    handleChange = (e) =>{
        const keyword = e.target.value;
        this.setState({keyword});
        console.log(this.state.keyword);
    }


    handleselectedFile = (e) => {
      // console.log(e.target.files[0]);
      let abc = e.target.files[0];

      this.setState({ selectedFile: abc });
      console.log(this.state.selectedFile);
    }

    handleSubmit =(e) =>{
      e.preventDefault();
      this.setState({ upload : true}, () => { 
        this.addNewMessage('file');
    });
    
    //   this.setState({ upload : true});
     
      console.log("handle Submit state",this.state.selectedFile);
      const formData = new FormData();

      formData.append('file', this.state.selectedFile);
      console.log(formData.get('file'));
      for (const entry of formData.entries())
      {
          console.log(entry);
      }
        const { keyword, selectedFile} = this.state;

      // console.log(keyword);
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
  
    
      axios.post('http://localhost:3001/file', formData, config )
      .then((response) => {
        console.log(response);
    }).catch((error) => {
})
}

countReplayLengthFile =(question) =>{
    console.log("question",question);
    let answer =  " Please refresh the page to see the piechart results for uploaded file. ";
return answer;
  }


    countReplayLength =(question) =>{
        console.log("question",question);
    //   this.setState({keyword : question});
        // const {keyword} = this.state;
        // console.log(this.state.keyword);
  
          axios.post(`http://localhost:3001/argsPython`, {question}  )
        .then(res => {
          console.log(res);
          console.log(res.data);
        });

        let answer =  " Please refresh the page to see piechart the results for " + question ;
  return answer;
      }

    render() {
        const {barData} = this.state;
        let nameArray = barData.map((object) => {
            return object.Name
        })
        console.log(nameArray);
        let RtsArray = barData.map((obj) => {
            return obj.RTs;
                })
                console.log(RtsArray);
                let likesArray = barData.map((obj) => {
                    return obj.Likes;
                        })
                        console.log(likesArray);
                        let saArray = barData.map((obj) => {
                            return obj.SA;
                                })
                                console.log(saArray);
        return (
            <div>
          <div>
<div style={{marginTop: '10px', marginLeft: '36%'}}>
    <PieChartNew />
    </div>
    <div>
      <Container style={{marginTop: '20px'}}>
        <Row>
          <Col sm>
          {this.state.area === true ?
          <div>
          <Chart>
              <ChartCategoryAxis>
                  <ChartCategoryAxisItem categories={nameArray} />
              </ChartCategoryAxis>
              <ChartSeries>
                  <ChartSeriesItem type="verticalArea" data={RtsArray} />
                  <ChartSeriesItem type="verticalArea" data={likesArray} />
              </ChartSeries>
              </Chart> 
              </div> : '' }
 
          { this.state.bar === true ?
          <div>
         <Chart>
        <ChartSeries>
            <ChartSeriesItem type="column" data={RtsArray} />
            <ChartSeriesItem type="column" data={saArray} />
        </ChartSeries>
    </Chart> 
    </div> : '' }

    <div>
{this.state.visibleWindow && <Window title={"Top Tweets"} onClose={this.toggleWindow}>
Additional info
</Window>}
</div>
         </Col> 
<Col sm>
    <div >
    <Chat user={this.user}
                    messages={this.state.messages}
                    onMessageSend={this.addNewMessage}
                    placeholder={"Type a keyword..."}
                    width={400}
                    onActionExecute={this.onAction}
                   >
                   
                </Chat>
    </div>
    </Col>
    </Row>
    </Container>
    </div> 
</div>
                
            </div>
        );
    }
}



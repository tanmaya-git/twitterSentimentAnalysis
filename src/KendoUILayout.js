import React from 'react';
import ReactDOM from 'react-dom';
import { Chat } from '@progress/kendo-react-conversational-ui';
import { Upload } from '@progress/kendo-react-upload';
import {Form} from 'react-bootstrap';
import { Button} from '@progress/kendo-react-buttons';
import axios from 'axios';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.user = {
            id: 1,
            avatarUrl: "https://via.placeholder.com/24/008000/008000.png"
        };
        this.bot = { id: 0 };
        this.state = {
            files: [],
            sqlData: [],
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
                <Form.Group controlId="formBasicEmail" pullLeft >
                  <Form.Control name = "fileupload" type="file" accept='.csv' placeholder="" style = {{color: 'green'}} />
                </Form.Group>
                <Button primary={true}>Upload</Button>
              </Form> 
              
                   
                      
                }
            ]
        };
    }

    
    addNewMessage = (event) => {
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
                    botResponce
                ]
            }));
        }, 1000);
    };

    // countReplayLength = (question) => {
    //     let length = question.length;
    //     let answer = question + " contains exactly " + length + " symbols.";
    //     return answer;
    // }


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

        let answer =  " Voila! Please see charts for your keyword : " + question ;
  return answer;
      }

    render() {
        return (
            <div>
                <Chat user={this.user}
                    messages={this.state.messages}
                    onMessageSend={this.addNewMessage}
                    placeholder={"Type a keyword..."}
                    width={400}>
                   
                </Chat>
                
            </div>
        );
    }
}



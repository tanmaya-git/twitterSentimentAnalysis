import React from 'react';
import ReactDOM from 'react-dom';
import { Chat } from '@progress/kendo-react-conversational-ui';
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
                    text: 'Hi, this is Geeni...Please enter the keyword you want to search!',
                   
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



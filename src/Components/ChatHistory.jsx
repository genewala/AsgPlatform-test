import React, { Component } from 'react';

class ChatHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [
        {
          id: 1,
          sender: 'Gene',
          message: 'Hello',
          timestamp: '2022-05-03T10:00:00.000Z'
        },
        {
          id: 2,
          sender: 'Mish',
          message: 'Hi John',
          timestamp: '2022-05-03T10:01:00.000Z'
        },
        {
          id: 3,
          sender: 'Sam',
          message: 'How are you?',
          timestamp: '2022-05-03T10:02:00.000Z'
        },
      
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Chat History</h2>
        <ul>
          {this.state.chatHistory.map((chat, index) => (
            <li key={chat.id}>
              <p><strong>{chat.sender}: </strong>{chat.message}</p>
              <small>{new Date(chat.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChatHistory;

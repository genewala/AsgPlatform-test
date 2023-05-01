import React, { Component } from 'react';

class MessageComposer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ messageText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.messageText.trim()) {
      this.props.sendMessage(this.state.messageText);
      this.setState({ messageText: "" });
    }
  }

  render() {
    return (
      <form className="message-composer" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.messageText}
          onChange={this.handleChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default MessageComposer;

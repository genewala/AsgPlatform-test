import { Component } from 'react';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { name: 'Gene Chase', phone: '123-456-7890', email: 'johndoe@example.com' },
        { name: 'Sam Cass', phone: '555-555-5555', email: 'janedoe@example.com' },
        { name: 'Mish Ming', phone: '111-111-1111', email: 'bobsmith@example.com' },
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Contact List</h2>
        <ul>
          {this.state.contacts.map((contact, index) => (
            <li key={index}>
              <h3>{contact.name}</h3>
              <p>Phone: {contact.phone}</p>
              <p>Email: {contact.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;

import React from 'react';

const ContactHeader = () => {
  const contact = {
    name: 'Gene Chase',
    status: 'Online',
    avatar: 'https://via.placeholder.com/150',
  };

  return (
    <div>
      <div>
        <img src={contact.avatar} alt="Contact Avatar" />
      </div>
      <div>
        <h3>{contact.name}</h3>
        <p>{contact.status}</p>
      </div>
    </div>
  );
};

export default ContactHeader;



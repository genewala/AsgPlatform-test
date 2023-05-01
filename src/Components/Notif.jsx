import React, { useState } from 'react';


const Notif = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'You have a new message from Gene Chase', timestamp: '2022-05-12T11:52:00.000Z' },
    { id: 2, message: 'You have a new friend request from Sam Cass', timestamp: '2022-05-11T18:20:00.000Z' },
    { id: 3, message: 'Your subscription will expire in 3 days', timestamp: '2022-05-10T09:15:00.000Z' },
  ]);

  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <div className="notification" key={notification.id}>
          <p>{notification.message}</p>
          <span>{new Date(notification.timestamp).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default Notif;

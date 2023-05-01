import React from 'react'
import "./ControlPanel.css"
import { Link } from 'react-router-dom'


const ControlPanel = () => {
  return (
    <div>
      <div>
      </div>
      <div>
      <button><Link to="/"></Link>Welcome</button>
      <button><Link to="statistics">Contact List</Link></button>
      <button><Link to="support">Chat History</Link></button>
      <button><Link to="inbox">Contact Headers</Link></button>
      <button><Link to="goals">Composer</Link></button>
      <button><Link to="Notification">Notification</Link></button>
      </div>
      <div>
      <button>Log OUt</button>
      </div>
    </div>
  )
}

export default ControlPanel

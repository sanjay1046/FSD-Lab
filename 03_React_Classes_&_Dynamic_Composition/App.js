import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class HobbyList extends Component {
  render() {
    const { hobbies } = this.props;
    return (
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
    );
  }
}

class User extends Component {
  render() {
    const { name, email, hobbies } = this.props;
    return (
      <div>
        <h3>{name} ({email})</h3>
        <p>Hobbies:</p>
        <HobbyList hobbies={hobbies} />
      </div>
    );
  }
}

class UserList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, i) => (
          <User key={i} {...user} />
        ))}
      </div>
    );
  }
}

const users = [
  { name: 'John Doe', email: 'john.doe@example.com', hobbies: ['Reading', 'Traveling', 'Swimming'] },
  { name: 'Jane Smith', email: 'jane.smith@example.com', hobbies: ['Cooking', 'Painting'] }
];

class App extends Component {
  render() {
    return <UserList users={users} />;
  }
}

export default App;

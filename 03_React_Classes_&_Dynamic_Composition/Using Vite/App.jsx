import React, { Component } from 'react';

// HobbyList Component
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

// User Component
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

// UserList Component
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

// Sample Data
const users = [
  { name: 'John Doe', email: 'john.doe@example.com', hobbies: ['Reading', 'Traveling', 'Swimming'] },
  { name: 'Jane Smith', email: 'jane.smith@example.com', hobbies: ['Cooking', 'Painting'] }
];

// App Component
class App extends Component {
  render() {
    return <UserList users={users} />;
  }
}

export default App;

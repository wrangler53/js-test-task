import React, {Component} from 'react';

import {fetchUsers, deleteUser} from '../api/api';

import Table from './Table/Table';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetchUsers()
      .then(users => {
        this.setState({users});
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteUserHandler = (event, userId) => {
    event.preventDefault();

    deleteUser(userId)
      .then(() => {
        const newUsersList = [...this.state.users].filter(
          user => user.id !== userId,
        );
        this.setState({users: newUsersList});
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Table
          usersList={this.state.users}
          deleteUser={this.deleteUserHandler}
        />
      </div>
    );
  }
}

export default App;

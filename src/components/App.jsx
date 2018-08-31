import React, {Component} from 'react';

import {fetchUsers, deleteUser, addUser, updateUser} from '../api/api';

import Table from './Table/Table';
import Summary from './Summary/Summary';
import Form from './Form/Form';

const newUserObj = {
  first_name: '',
  last_name: '',
  dob: '',
  location: '',
};
class App extends Component {
  state = {
    users: [],
    newUser: {...newUserObj},
  };

  componentDidMount() {
    fetchUsers() // TODO: put it into another function
      .then(users => {
        this.setState({users});
      })
      .catch(err => {
        console.log(err);
      });
  }
  // Edit User
  editUserHandler = user => {
    console.log(user);
  };

  // Delete user
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

  // Add a new user
  addUserHandler = event => {
    event.preventDefault();

    addUser(this.state.newUser)
      .then(() => {
        this.setState({newUser: {...newUserObj}});

        fetchUsers()
          .then(users => {
            this.setState({users});
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Listen to changes in form fields
  inputChangeHandler = event => {
    const newUser = {...this.state.newUser};
    newUser[event.target.name] = event.target.value;
    this.setState({newUser});
  };

  render() {
    return (
      <div>
        <Table
          usersList={this.state.users}
          deleteUser={this.deleteUserHandler}
          editUser={this.editUserHandler}
        />
        <Form
          addUser={this.addUserHandler}
          newUser={this.state.newUser}
          inputChanged={this.inputChangeHandler}
        />
        <Summary usersList={this.state.users} />
      </div>
    );
  }
}

export default App;

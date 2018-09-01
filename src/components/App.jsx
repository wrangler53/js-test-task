import React, {Component} from 'react';

import {fetchUsers, deleteUser, addUser, updateUser} from '../api/api';

import Table from './Table/Table';
import Summary from './Summary/Summary';
import Form from './Form/Form';

const userObj = {
  first_name: '',
  last_name: '',
  dob: '',
  location: '',
};
class App extends Component {
  state = {
    users: [],
    user: {...userObj},
    isEditMode: false,
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    fetchUsers()
      .then(users => this.setState({users}))
      .catch(err => console.log(err));
  }

  // Edit User
  fillForm = user => {
    const updatedUser = {...this.state.user};
    Object.assign(updatedUser, {...user});
    this.setState({user: updatedUser, isEditMode: true});
  };

  editUserHandler = event => {
    event.preventDefault();

    updateUser(this.state.user)
      .then(() => {
        this.setState({user: {...userObj}, isEditMode: false});
        this.getAllUsers();
      })
      .catch(err => console.log(err));
  };

  // Delete user
  deleteUserHandler = (event, userId) => {
    event.preventDefault();

    deleteUser(userId)
      .then(() => {
        const newUsersList = [...this.state.users].filter(
          user => user.id !== userId,
        );

        if (this.state.isEditMode && userId === this.state.user.id)
          this.setState({
            user: {...userObj},
            isEditMode: false,
          });

        this.setState({users: newUsersList});
      })
      .catch(err => console.log(err));
  };

  // Add a new user
  addUserHandler = event => {
    event.preventDefault();

    addUser(this.state.user)
      .then(() => {
        this.setState({user: {...userObj}});
        this.getAllUsers();
      })
      .catch(err => console.log(err));
  };

  // Listen to changes in form fields
  inputChangeHandler = event => {
    const user = {...this.state.user};
    user[event.target.name] = event.target.value;
    this.setState({user});
  };

  render() {
    return (
      <div>
        <Table
          usersList={this.state.users}
          deleteUser={this.deleteUserHandler}
          fillForm={this.fillForm}
        />
        <Form
          addUser={this.addUserHandler}
          editUser={this.editUserHandler}
          isEditMode={this.state.isEditMode}
          user={this.state.user}
          inputChanged={this.inputChangeHandler}
        />
        <Summary usersList={this.state.users} />
      </div>
    );
  }
}

export default App;

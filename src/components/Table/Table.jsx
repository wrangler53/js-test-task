import React, {Component} from 'react';

import TableRow from '../TableRow/TableRow';

import {fetchUsers, deleteUser} from '../../api/api';

class Table extends Component {
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
      <div className="container">
        <h2>Table</h2>
        <form className="form">
          <thead className="form__header">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="form__body">
            {this.state.users.map(user => (
              <TableRow
                key={user.id}
                user={user}
                deleteUser={this.deleteUserHandler}
              />
            ))}
          </tbody>
        </form>
      </div>
    );
  }
}

export default Table;

import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';

const Table = ({usersList, deleteUser, fillForm}) => (
  <div className="container">
    <h2>Table</h2>
    <table className="table">
      <TableHeader />
      <tbody className="table__body">
        {usersList.map(user => (
          <TableRow
            key={user.id}
            user={user}
            deleteUser={event => deleteUser(event, user.id)}
            fillForm={() => fillForm(user)}
          />
        ))}
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      dob: PropTypes.string,
      location: PropTypes.string,
    }),
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
  fillForm: PropTypes.func.isRequired,
};

export default Table;

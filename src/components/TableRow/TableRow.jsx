import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../helpers/formatDate';

const TableRow = ({user, deleteUser, editUser}) => (
  <tr>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{formatDate(user.dob)}</td>
    <td>{user.location}</td>
    <td>
      <button onClick={editUser}>Edit</button>
      <button onClick={deleteUser}>Delete</button>
    </td>
  </tr>
);

TableRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    dob: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
};

export default TableRow;

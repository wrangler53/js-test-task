import React from 'react';
import PropTypes from 'prop-types';
import {formatDate} from '../../helpers/formatDate';

const TableRow = ({user, deleteUser, fillForm}) => (
  <tr>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{formatDate(user.dob)}</td>
    <td>{user.location}</td>
    <td>
      <button onClick={fillForm}>Edit</button>
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
  fillForm: PropTypes.func.isRequired,
};

export default TableRow;

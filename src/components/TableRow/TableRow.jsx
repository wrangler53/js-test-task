import React from 'react';

const TableRow = ({user, deleteUser}) => (
  <tr>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{user.dob}</td>
    <td>{user.location}</td>
    <td>
      <button onClick={deleteUser}>Delete</button>
    </td>
  </tr>
);

export default TableRow;

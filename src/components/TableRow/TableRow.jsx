import React from 'react';

const TableRow = ({user}) => (
  <tr>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{user.dob}</td>
    <td>{user.location}</td>
    <td>
      <button>Delete</button>
    </td>
  </tr>
);

export default TableRow;

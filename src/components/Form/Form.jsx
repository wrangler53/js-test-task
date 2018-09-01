import React from 'react';
import PropTypes from 'prop-types';

const Form = ({addUser, editUser, user, inputChanged, isEditMode}) => {
  const isDisabled = Object.values(user)
    .map(item => item.length)
    .some(item => item === 0);

  return (
    <div className="container">
      <h2>Form</h2>
      <form
        className="form"
        onSubmit={
          !isEditMode ? event => addUser(event) : event => editUser(event)
        }
      >
        <div className="form__item">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={user.first_name}
            onChange={event => inputChanged(event)}
          />
        </div>
        <div className="form__item">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={user.last_name}
            onChange={event => inputChanged(event)}
          />
        </div>
        <div className="form__item">
          <label htmlFor="dob">Date of birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={user.dob}
            onChange={event => inputChanged(event)}
          />
        </div>
        <div className="form__item">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={user.location}
            onChange={event => inputChanged(event)}
          />
        </div>
        <div className="form__item">
          <input
            type="submit"
            className="btn btn_submit"
            disabled={isDisabled}
            value={!isEditMode ? 'Add user' : 'Edit User'}
          />
        </div>
      </form>
    </div>
  );
};
Form.propTypes = {
  addUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    dob: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  inputChanged: PropTypes.func.isRequired,
};

export default Form;

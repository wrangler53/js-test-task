import React from 'react';

const Form = ({addUser, newUser, inputChanged}) => (
  <div className="container">
    <h2>Form</h2>
    <form className="form" onSubmit={event => addUser(event)}>
      <div className="form__item">
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          value={newUser.first_name}
          onChange={event => inputChanged(event)}
        />
      </div>
      <div className="form__item">
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          value={newUser.last_name}
          onChange={event => inputChanged(event)}
        />
      </div>
      <div className="form__item">
        <label htmlFor="dob">Date of birth</label>
        <input
          type="text"
          name="dob"
          id="dob"
          placeholder="mm/dd/yyyy"
          value={newUser.dob}
          onChange={event => inputChanged(event)}
        />
      </div>
      <div className="form__item">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={newUser.location}
          onChange={event => inputChanged(event)}
        />
      </div>
      <div className="form__item">
        <input
          type="submit"
          value="Submit"
          onChange={event => inputChanged(event)}
        />
      </div>
    </form>
  </div>
);

export default Form;

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Summary extends Component {
  // calculate count of users from city 'kiev' or 'Kiev
  usersCount = () =>
    this.props.usersList.filter(
      user => user.location === 'Kiev' || user.location === 'kiev',
    ).length;

  // calculate sum of three oldest users ages
  userAges = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    return this.props.usersList
      .map(user => {
        const userBirthDate = new Date(user.dob);
        const userBirthYear = userBirthDate.getFullYear();
        const userBirthMonth = userBirthDate.getMonth() + 1;
        const userBirthDay = userBirthDate.getDate();

        let userAge = currentYear - userBirthYear;

        if (currentMonth < userBirthMonth) {
          userAge -= 1;
        } else if (currentMonth === userBirthMonth) {
          if (currentDay < userBirthDay) userAge -= 1;
        }

        return userAge;
      })
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b, 0);
  };

  // find longest string of First Name + Last Name
  longestString = () => {};

  render() {
    return (
      <div className="container">
        <h2>Summary</h2>
        <div className="summary">
          <div className="users-count">
            Count user of Kiev or kiev: <br />
            {this.usersCount()}
          </div>
          <div className="ages-sum">
            Sum of three oldest user ages: <br />
            {this.userAges()}
          </div>
          <div className="longest-string">
            Longest string of first name + last name: <br />
            {this.longestString()}
          </div>
        </div>
      </div>
    );
  }
}

Summary.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      dob: PropTypes.string,
      location: PropTypes.string,
    }),
  ).isRequired,
};

export default Summary;

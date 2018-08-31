import React, {Component} from 'react';

class Summary extends Component {
  state = {};

  usersCount = () =>
    this.props.usersList.filter(
      user => user.location === 'Kiev' || user.location === 'kiev',
    ).length;

  userAges = () => {
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth() + 1;
    const todayDay = todayDate.getDay() + 1;

    return this.props.usersList
      .map(user => {
        const userBirthDate = new Date(user.dob);
        const userBirthYear = userBirthDate.getFullYear();
        const userBirthMonth = userBirthDate.getMonth() + 1;
        const userBirthDay = userBirthDate.getDay() + 1;

        let userAge = todayYear - userBirthYear;

        if (todayMonth < userBirthMonth) {
          userAge -= 1;
        } else if (todayMonth === userBirthMonth) {
          if (todayDay < userBirthDay) userAge -= 1;
        }

        return userAge;
      })
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b, 0);
  };

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
            {}
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;

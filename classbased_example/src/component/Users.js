import React from "react";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      showUser: true,
    };
  }
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("something happened");
    }
  }
  handleClick = () => {
    this.setState((prevState) => ({ showUser: !prevState.showUser }));
  };

  render() {
    const userList = (
      <ul>
        {this.props.users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    );
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.showUser ? "Hide USER" : "Show User"}
        </button>
        {this.state.showUser && userList}
      </div>
    );
  }
}

export default Users;

import React from "react";
import UsersContext from "../store/user-context";
import ErrorBoundary from "./ErrorBoundary";
import Users from "./Users";

class UserFinder extends React.Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      filteredUsers: [],
    };
  }
  componentDidMount() {
    this.setState({
      filteredUsers: this.context.users,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState((prevState) => {
        return {
          ...prevState,
          filteredUsers: this.context.users.filter((user) =>
            user.name.includes(this.state.searchTerm)
          ),
        };
      });
    }
  }
  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
    console.log(this.state.searchTerm);
  };
  render() {
    return (
      <>
        <input type="search" onChange={this.searchChangeHandler} />
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </>
    );
  }
}

export default UserFinder;

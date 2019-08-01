import React, { Component } from "react";
import { connect } from "react-redux";

import { setSearchField } from "../actions";

import CardList from "../components/cardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState({ robots: users });
  }

  render() {
    const { robots } = this.state;
    const { searchfield, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchfield: state.searchfield
  };
};
const mapDispatchToProps = dispatch => {
  return { onSearchChange: e => dispatch(setSearchField(e.target.value)) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

/* jshint esversion: 6 */
import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import Robots from './Robots';
import SeachBox from './SearchBox';
import Scroll from './Scroll';
import { connect } from 'react-redux';
import { setSearchTerm } from './action';

const mapStateToProps = state => {
  return {
  searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchTerm(event.target.value))
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      robots: [],
      isPending: true
    };
  }

  onSearchChange = (evt) => {
    this.setState({
      searchTerm: evt.target.value
    })
  }

  componentDidMount() {
    console.log(this.props.store)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({
          robots: data,
          isPending: false
        })
      })
  }


  render() {
    const { robots, isPending } = this.state;
    const { onSearchChange, searchTerm } = this.props;
    const filteredRobots = robots.filter(robot => (robot.name.toLowerCase().includes(searchTerm.toLowerCase())));
    return (
      <div className="tc ma2">
        <h1>RoboDex</h1>
        <SeachBox onSearchChange={onSearchChange}/>
        <Scroll>
          {(isPending)? <h2>Loading...</h2> : <Robots robots={filteredRobots}/>}
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import Robots from './Robots';
import SeachBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      robots: [],
      searchTerm: '',
      isPending: true
    };
  }

  onSearchChange = (evt) => {
    this.setState({
      searchTerm: evt.target.value
    })
  }

  componentDidMount() {
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
    const {robots, searchTerm, isPending} = this.state;
    const filteredRobots = robots.filter(robot => (robot.name.toLowerCase().includes(searchTerm.toLowerCase())));
    return (
      <div className="tc ma2">
        <h1>RoboDex</h1>
        <SeachBox onSearchChange={this.onSearchChange}/>
        <Scroll>
          {(isPending)? <h2>Loading...</h2> : <Robots robots={filteredRobots}/>}
        </Scroll>
      </div>
    );
  }
}

export default App;

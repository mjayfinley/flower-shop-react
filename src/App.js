import React, { Component } from 'react';
import './App.css';
import {FlowerList} from './components/FlowerList'

class App extends Component {

  constructor(props) {
    super(props)

    this.state={
      flowers : []
    }
  }

  componentDidMount() {
    this.populateFlowers()
  }

  populateFlowers () {
    fetch("https://flowers.vapor.cloud/flowers")
    .then((response) => response.json())
    .then((json) => {

      this.setState({
        flowers : json
      })
    })
  }

  render() {
    return (
      <FlowerList />
    );
  }
}

export default App;

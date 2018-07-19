import React, { Component } from 'react';
import './App.css';
import {FlowerList} from './components/FlowerList'
import './Styles.css'

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

      console.log(json)

      this.setState({
        flowers : json
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Flowers!</h1>

        <FlowerList flowerList={this.state.flowers}/>

      </div>

    );
  }
}

export default App;

import React, {Component} from 'react'



export class AddFlower extends Component {

  constructor(props) {
    super(props)

    this.state = {
      flower: '',
      description: '',
      image: '',
    }
  }

  handleAddFlowerClick = (() => {

    let flower = {name: this.state.flower, description: this.state.description, imageURL: this.state.image}


    this.addFlower(flower)

    //this.props.history.push('/')


  })

  addFlower(flower) {
    fetch('https://flowers.vapor.cloud/flower', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(flower)
    }).then((response) => response.json())
    .then((json) => {

       
      this.props.history.push('/')

    })
  }

  handleFlowerChange = ((e) => {

    this.setState({
      flower : e.target.value
    })
  })

  handleFlowerDescriptionChange = ((e) => {

    this.setState({
      description : e.target.value
  })
})

  handleFlowerImageChange = ((e) => {

    this.setState({
      image : e.target.value
  })
})

  render() {
    return(
      <div>
        <h2>Add your Flower!</h2>
        <div id="addFlower">
          <h4>Name of flower:</h4><input onChange={this.handleFlowerChange} type="text" placeholder="flower" />
          <h4>Description of flower:</h4><input onChange={this.handleFlowerDescriptionChange} type="text" placeholder="description"/>
          <h4>Image URL:</h4><input onChange={this.handleFlowerImageChange} type="text" placeholder="url"/>
          <button onClick={() => this.handleAddFlowerClick()}>Submit Flower</button>
        </div>
      </div>
    )
  }
}

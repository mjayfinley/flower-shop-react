import React, {Component} from 'react'

export class FlowerList extends Component {

  render() {

    let flowerItem = this.props.flowerList.map((flower, index) => {
      return (
        <li key={index}>
          <h2>{flower.name}</h2>
          <img id="flowerImage" src={flower.imageURL} alt={flower.name}/>
          <p>{flower.description}</p>

        </li>
      )
    })
    return(
      <ul> {flowerItem} </ul>
    )
  }
}

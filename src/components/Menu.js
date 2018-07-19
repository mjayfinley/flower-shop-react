import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export class Menu extends Component {
  render() {
    return(
      <div id="menu">
        <div><NavLink exact to = '/'>Home</NavLink></div>
        <div><NavLink to = '/addflower'>Add Flower</NavLink></div>
        <div><NavLink to = '/contact-us'>Contact</NavLink></div>
      </div>
    )
  }
}

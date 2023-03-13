// Write your code here
import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationItem} = this.props
    const {name, imgUrl} = destinationItem

    return (
      <li className="destination-container">
        <img src={imgUrl} alt={name} className="img-destination" />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationItem

// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {inputString: ''}

  searchResults = event => {
    const input = event.target.value

    this.setState({inputString: input})
  }

  render() {
    const {inputString} = this.state
    const {destinationsList} = this.props
    const results = destinationsList.filter(element =>
      element.name.toLowerCase().includes(inputString.toLowerCase()),
    )

    return (
      <div>
        <h1>Destination Search</h1>
        <div>
          <input
            type="search"
            placeholder="Search"
            onChange={this.searchResults}
            value={inputString}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
          />
        </div>

        <ul className="destinations-container">
          {results.map(element => (
            <DestinationItem destinationItem={element} key={element.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

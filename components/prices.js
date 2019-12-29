import React from 'react'
import '../styles/main.css'

class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {

    return (
      <div>
        <div className="flex mb-2">
          <select onChange={e => this.setState({currency: e.target.value})} className="w-1/2 h-10 bg-gray-200">
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div>
          <ul className="w-full">
            <li className="list-group-item">Bitcoin rate for {this.props.bpi[this.state.currency].description}:
              <span className="badge badge-primary mx-3">{this.props.bpi[this.state.currency].code}</span>
              <strong>{this.props.bpi[this.state.currency].rate}</strong>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Prices
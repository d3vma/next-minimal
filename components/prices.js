import React from 'react'

class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {

    return (
      <div>
        <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
        <br />
        <ul className="list-group">
          <li className="list-group-item">Bitcoin rate for {this.props.bpi[this.state.currency].description} : 
            <span className="badge badge-primary mx-3">{this.props.bpi[this.state.currency].code}</span> 
            <strong>{this.props.bpi[this.state.currency].rate}</strong>
          </li>
        </ul>
      </div>
    )
  }
}

export default Prices
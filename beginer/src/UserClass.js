import React, { Component } from 'react'

export default class UserClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Hung',
      age: 22
    }
  }
  handleChange = () => {
    this.setState({
      age: 24
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleChange}> Change</button>
        <p>Name : {this.state.name}</p>
        <p>Age : {this.state.age}</p>
      </div>
    )
  }
}

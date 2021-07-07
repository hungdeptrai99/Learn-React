import React, { Component } from 'react'
export default class Footer extends Component {
  constructor(props) {
    super(props) // ke thua`
    this.state = {
      title: 'this is a footer hung ',
      number: 0
    }
    // this.click = this.click.bind(this) C1 
  }
  click = value => () => {
     this.setState({ number: value }) // để nhấn biết this chỗ này cần 3 cách để làm
  }

  render() {
    return (
      <footer>
        <button onClick={this.click(2)}>Click {this.state.number}</button>
        {this.state.title}
      </footer>
    )
  }
}

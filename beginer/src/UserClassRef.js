import React, { Component, createRef } from 'react'

export default class UserClassRef extends Component {
  constructor(props) {
    super(props)
    this.pRef = createRef()
    this.count = 0
  }
  changeColor = () => {
    this.pRef.current.style.color = 'blue'
  }
  changeCount = () => {
    this.count = this.count + 1
    console.log(this.count)
    if (this.count === 3) {
      alert('Count = 3')
    }
  }
  render() {
    console.log('render')
    return (
      <div>
        <p ref={this.pRef}>Hello hung</p>
        <button onClick={this.changeColor}>Change Color Class</button>
        <button onClick={this.changeCount}>Change Count Class</button>
      </div>
    )
  }
}

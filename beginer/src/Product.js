import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      check: true,
      products: [
        {
          name: 'iphone'
        },
        {
          name: 'samsung'
        },
        {
          name: 'Airport'
        }
      ]
    }
  }
  renderProduct() {
    return this.state.products.map((product, index) => (
      <div key={index}>
        so thu tu: {index} , ten san pham :{product.name}
      </div>
    ))
  }

  render() {
    console.log(this.renderProduct())
    return (
      <React.Fragment>
        {!this.state.check ? <h1>'Hello'</h1> : null}
        {!this.state.check && <h1>'Hello'</h1>}
        {this.state.check && (
          <div>
            <h1>'1'</h1>
            <h1>'2'</h1>
          </div>
        )}
        {this.renderProduct()}
      </React.Fragment>
    )
  }
}

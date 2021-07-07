import React from 'react'
import logo from './logo.svg'
import { useState } from 'react'
export default function Header() {
  const [state, setState] = useState(0)
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit {state} <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setState(state + 1)}>Click</button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React by tran gia hung dep trai
        </a>
      </header>
    </div>
  )
}

import React, { useState } from 'react'
import styles from './App.module.css'
import Product from './Product.js'
import UserClassRef from './UserClassRef'
import UserFunc from './UserFunc'
import UserFunction from './UserFunction'
import UserRef from './UserRef'
import AppContextProvider from './AppContextProvider'
import styled from 'styled-components'

const H1 = styled.h1`
  text-align: center;
  background-color: green;
`

export const AppContext = React.createContext()
function App() {
  const user = {
    name: 'hung',
    age: 22
  }

  const [state, setState] = useState(true)
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    setTodos(todos => {
      return [
        ...todos,
        {
          value,
          id: new Date().toISOString()
        }
      ]
    })
    setValue('')
  }
  const handleDelete = id => {
    setTodos(todos => {
      return todos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      {/* <button onClick={() => setState(state => !state)}>Change</button>
      {state && <UserFunc></UserFunc>} */}
      <UserFunction></UserFunction>
      {/* 
      <AppContextProvider>
        <UserRef></UserRef>
      </AppContextProvider> */}

      {/* <UserClassRef></UserClassRef> */}
      <h1 className={styles.container}> Simple todo list</h1>
      <H1> Simple todo list</H1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange}></input>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.value}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App

import React, { useEffect, useRef, useState, forwardRef, useContext } from 'react'
import { AppContext } from './App'
import usePrevious from './usePrevious'
import { useUser } from './AppContextProvider'
const Input = forwardRef((props, ref) => <input {...props} ref={ref}></input>) // cái này được gọi là component khai báo ra khỏi function là component , muốn truyền ref qua các compoent thì sử dụng forwardRef

const useInputNumber = initialValue => {
  const [value, setValue] = useState(initialValue)

  const handleChange = event => {
    const val = event.target.value
    if (/^\d+$/.test(val) || val === '') {
      setValue(val)
      console.log(val)
    }
  }
  return [value, handleChange]
}
export default function UserRef() {
  const pRef = useRef(null)
  const count = useRef(0)
  const refInput = useRef()
  const [value, setValue] = useInputNumber('')
  const [valuetext, setValueText] = useInputNumber('')
  const preValueTextArea = usePrevious(valuetext)
  console.log(preValueTextArea)
  const changeColor = () => {
    pRef.current.style.color = 'red'
  }
  const changeCount = () => {
    count.current = count.current + 1
    console.log(count.current)
    if (count.current === 3) {
      alert('Count = 3')
    }
  }
  useEffect(() => {
    console.log(refInput)
  }, [])

  const changeBorder = () => {
    refInput.current.style.borderColor = 'blue'
  }
  console.log('render function')
  const use = useUser()
  return (
    <div>
      <div> User</div>
      <p ref={element => console.log(element)}>Hello world</p>
      <p ref={pRef}>Hello world</p>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeCount}>Change Count</button>
      <div>
        <Input ref={refInput}></Input>
        <button onClick={changeBorder}>Change Border </button>
      </div>
      <input onChange={setValue} value={value} type="number"></input>
      <textarea value={valuetext} onChange={setValueText} name="" id="" cols="30" rows="10"></textarea>

      <ul>
        <li>Name:{use.name}</li>
        <li>Age: {use.age}</li>
      </ul>
    </div>
  )
}

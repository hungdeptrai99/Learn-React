import React, { useEffect, useState } from 'react'

export default function UserFunc() {
  //Destructuring

  // const [profile, setProfile] = useState({
  //   name: 'Hung',
  //   age: 22
  // })
  // const [name, setName] = useState('Hung')
  // const [age, setAge] = useState(22)
  const [age, setAge] = useState(22)
  const [count, setCount] = useState(0)

  //ComponentDidUpdate
  useEffect(() => {
    console.log('useEffect')
    //ComponetWillUnMount
    return () => {
      console.log('clean')
    }
  })

  //ComponentDidMount
  useEffect(() => {
    console.log('useEffect []')
    return () => {
      console.log('clean')
    }
  }, [])

  useEffect(() => {
    console.log(`Count: ${count}`)
  }, [count])
  // const handleChange = () => {
  //   setProfile(prevProfile => ({ ...prevProfile, age: prevProfile.age + 1 }))
  //   setProfile(prevProfile => ({ ...prevProfile, age: prevProfile.age + 1 }))
  // }

  return (
    <div>
      {/* <button onClick={handleChange}> Change</button>
      <p>Name : {profile.name}</p>
      <p>Age : {profile.age}</p> */}
      <button onClick={() => setAge(age => age + 1)}>Increase Age {age}</button>
      <button onClick={() => setCount(count => count + 1)}>Increase count {count}</button>
    </div>
  )
}

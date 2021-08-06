import React, { useMemo, useEffect, useState, useCallback } from 'react'
import UserProfile from './UserProfile'

//Currying
const connect = Component => props => {
  const data = [1, 2, 3, 4]
  return <Component {...props} data={data}></Component>
}
const UseComponent = connect(UserProfile)
// Mutate state
export default function UserFunction() {
  // console.log('UserFunction');

  // const [profile, setProfile] = useState({
  //   name: 'Hung',
  //   address: {
  //     company: 'quan 1 hcm',
  //     home: 'quan 2 hcm'
  //   }
  // })
  const [, setCount] = useState(0)
  // const changeProfile = () => {
  //   const _profile = { ...profile }
  //   _profile.name = 'Hung dep trai'
  //   console.log(_profile.address)
  //   _profile.address = { ..._profile.address, company: 'Quan 11 HCM' }
  //   console.log(profile.address.company)
  //   setProfile(_profile)
  // }
  // useEffect(() => {
  //   console.log(profile.address)
  // }, [profile.address])
  var data = 100
  const profile = useMemo(
    () => ({
      name: 'hung',
      age: 24
    }),
    []
  )
  // const handleCLick = useMemo(() => value => console.log('Value:', value), [])
  const handleCLick = useCallback(value => console.log('Value:', value), [])
  // const handleCLick = value => console.log('Value:', value)
  return (
    <div className="container">
      {/* <div>Ten : {profile.name}</div>
      <div>Ten : Dia chi :</div>
      <div>Company : {profile.address.company}</div>
      <div>Home : {profile.address.home}</div> */}
      {/* <button onClick={changeProfile}> ChangeProfile</button> */}
      <button onClick={() => setCount(count => count + 1)}> Change Count</button>
      {/* <UserProfile profile={profile}></UserProfile> */}
      {/* <UserProfile data={data} profile={profile}></UserProfile> */}
      <UserProfile handleCLick={handleCLick}></UserProfile>
    </div>
  )
}

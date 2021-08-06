import React, { memo, useState, useEffect } from 'react'

const UserProfile = memo(props => {
  // console.log(props);
  console.log('UserProfile props', props)
  const { handleCLick } = props
  // const [,setProfile] = useState(profile)
  // useEffect(() => {
  //   const _profile = { ...profile }
  //   _profile.name = 'hung dep'
  // }, [profile])
  // const [address, setAddress] = useState(profile.address)

  // const handleChange = () => {
  // console.log(address)
  // address.home =  '15 nugyen trac'
  // var _address = { ...address }
  // _address = { ..._address, home: '15 nguyen trac' }
  // console.log(address.home);

  // setAddress(_address)
  // _address.home = '15 nguyen trac'
  // }
  // useEffect(() => {
  //     // console.log(profile.address)
  //   }, [profile.address])
  return (
    <div>
      <h2>User Profile</h2>
      <button onClick={() => handleCLick(10)}> Click</button>
    </div>
  )
})

export default UserProfile

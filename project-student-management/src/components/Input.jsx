import React from "react";
import PropTypes from 'prop-types'
export default function Input({type='text',onChange,value,...props}) {
   const handleChange = event => {
       const val = event.target.value
       if(type === 'number') {
           if( /^\d+$/.test(val) || val ==='') {
            onChange(val)
           }
       }else {
        onChange(val)
       }
   } 
//    console.log(...props);
  return  <input 
  type={type ==='number' ? 'text' : type}
  value={value}
  onChange={handleChange}
  {...props}              
               >
  </input>
}

Input.propTypes = {
    value : PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    type :PropTypes.string

}
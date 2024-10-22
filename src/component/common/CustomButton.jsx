import React from 'react'
import './common.css'
const CustomButton = ({title}) => {
  return (
    <button className='px-4 py-1 rounded border-0 custom-button'>
       {title}
    </button>
  )
}

export default CustomButton
import React from 'react'
import '../styling/CVOutput.css'

const CVOutput = ({firstName, lastName, email, phoneNumber}) => {
  return (
    <div className='output'>
      {firstName}
      {lastName}
      {email}
      {phoneNumber}
    </div>
  )
}

export default CVOutput
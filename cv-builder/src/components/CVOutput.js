import React from 'react'
import '../styling/CVOutput.css'
import PersonalDetailsOutput from './PersonalDetailsOutput'

const CVOutput = ({firstName, lastName, email, phoneNumber}) => {

  /* {firstName}
      {lastName}
      {email}
      {phoneNumber}
      */
  return (
    <div className='output'>
      <PersonalDetailsOutput />
    </div>
  )
}

export default CVOutput
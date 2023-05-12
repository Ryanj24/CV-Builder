import React from 'react'
import '../styling/CVOutput.css'
import PersonalDetailsOutput from './PersonalDetailsOutput'
import ExperienceOutput from './ExperienceOutput'
import EducationOutput from './EducationOutput'

const CVOutput = ({firstName, lastName, email, phoneNumber, companies}) => {

  /* {firstName}
      {lastName}
      {email}
      {phoneNumber}
      */
  return (
    <div className='output'>
      <PersonalDetailsOutput 
      firstName={firstName}
      lastName={lastName}
      email={email}
      phoneNumber={phoneNumber}
      />
      <ExperienceOutput 
      companies={companies}/>
      <EducationOutput />
    </div>
  )
}

export default CVOutput
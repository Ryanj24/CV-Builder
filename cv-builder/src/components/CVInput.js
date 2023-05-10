import React from 'react'
import '../styling/CVInput.css'
import PersonalDetails from './PersonalDetails'
import Experience from './Experience'
import Education from './Education'

const CVInput = () => {
  return (
    <div className='inputs'>
      <form>
        <PersonalDetails />
        <Experience />
        <Education />
      </form>
    </div>
  )
}

export default CVInput
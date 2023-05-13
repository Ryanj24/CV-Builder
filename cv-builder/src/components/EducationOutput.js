import React from 'react'
import '../styling/EducationOutput.css'
import Institution from './Institution'

const EducationOutput = ({ schools }) => {
  
  return (
    <section className='education-output'>
      <h1>Education</h1>
      {schools.map(school => 
          <Institution 
          key={school.id}
          name={school.name}
          studyTitle={school.studyTitle}
          location={school.location}
          start={school.start}
          end={school.end}
          achievements={school.achievements}/>
        )}
    </section>
  )
}

export default EducationOutput
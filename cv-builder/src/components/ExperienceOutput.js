import React from 'react'
import '../styling/ExperienceOutput.css'
import Company from './Company'

const ExperienceOutput = ({ companies }) => {
  return (
    <section className='experience-output'>
        <h1>Professional Experience</h1>
        {companies.map(company => 
          <Company 
          key={company.id}
          name={company.name}
          position={company.position}
          location={company.location}
          start={company.start}
          end={company.end}
          tasks={company.tasks}/>
        )}
    </section>
  )
}

export default ExperienceOutput
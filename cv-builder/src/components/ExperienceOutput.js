import React from 'react'
import '../styling/ExperienceOutput.css'
import Company from './Company'

const ExperienceOutput = ({ companies }) => {

  /* Take array of objects of companies and map a new Company component for each
  <Company 
        name={company.name}
        startDate={company.startdate}
        endDate={company.endDate}
        jobTitle={company.jobTitle}
        keyPoints={company.keyPoints}/>
  */
  return (
    <section className='experience-output'>
        <h1>Professional Experience</h1>
        <Company />
    </section>
  )
}

export default ExperienceOutput
import React from 'react'
import '../styling/Experience.css'

const Experience = () => {
  return (
    <fieldset className='experience-container'>
        <legend>Professional Experience</legend>
        <div className='company-input'>
            <label htmlFor='company'>Company Name</label>
            <input type= 'text' placeholder='Company Name' id='company'></input>
        </div>
        <div className='position-input'>
            <label htmlFor='position'>Position</label>
            <input type= 'text' placeholder='Position' id='position'></input>
        </div>
        <div className='location-input'>
          <label htmlFor='location'>Location</label>
            <input type= 'text' placeholder='Location' id='location'></input>
        </div>
        <div className='job-duration-input'>
          <div className='start-date-input'>
            <label htmlFor='start'>Start Date</label>
            <input type= 'date' id='start'></input>
          </div>
          <div className='end-date-input'>
            <label htmlFor='end'>End Date</label>
            <input type= 'date' id='end'></input>
          </div>
        </div>
    </fieldset>
  )
}

export default Experience
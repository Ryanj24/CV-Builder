import React from 'react'
import '../styling/Experience.css'

const Experience = ({ handleAdd, handleRemove }) => {
  return (
    <fieldset className='experience-container'>
        <legend>Professional Experience</legend>
        <div className='company-container'>
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
          <div className='tasks-input'>
              <label>Main Tasks of Role</label>
              <label htmlFor='task1'>Task 1</label>
              <input type= 'text' id='task1' placeholder='Task Description'></input>

              <label htmlFor='task2'>Task 2</label>
              <input type= 'text' id='task2' placeholder='Task Description'></input>

              <label htmlFor='task3'>Task 3</label>
              <input type= 'text' id='task3' placeholder='Task Description'></input>
          </div>
          <div className='btn-container'>
              <button type='button' id='add-btn' onClick={handleAdd}>Add New</button>
              <button type='button' id='remove-btn' onClick={handleRemove}>Remove</button>
          </div>
        </div>

    </fieldset>
  )
}

export default Experience
import React from 'react'
import '../styling/Experience.css'

const Experience = ({ companies, setCompanies, handleAdd, handleRemove }) => {

  function handleChange(e) {

    if (e.target.name === 'company') {
        setCompanies()
    } else if (e.target.name === 'lastName') {
        
    } else if (e.target.name === 'email') {
        
    } else if (e.target.name === 'phoneNumber') {
        
    }
}

  return (
    <fieldset className='experience-container'>
        <legend>Professional Experience</legend>
        <div className='company-container'>
          <div className='company-input'>
              <label htmlFor='company'>Company Name</label>
              <input type= 'text' placeholder='Company Name' name='company'></input>
          </div>
          <div className='position-input'>
              <label htmlFor='position'>Position</label>
              <input type= 'text' placeholder='Position' name='position'></input>
          </div>
          <div className='location-input'>
            <label htmlFor='location'>Location</label>
              <input type= 'text' placeholder='Location' name='location'></input>
          </div>
          <div className='job-duration-input'>
            <div className='start-date-input'>
              <label htmlFor='start'>Start Date</label>
              <input type= 'date' name='start'></input>
            </div>
            <div className='end-date-input'>
              <label htmlFor='end'>End Date</label>
              <input type= 'date' name='end'></input>
            </div>
          </div>
          <div className='tasks-input'>
              <label>Main Tasks of Role</label>
              <label htmlFor='task1'>Task 1</label>
              <input type= 'text' name='task1' placeholder='Task Description'></input>

              <label htmlFor='task2'>Task 2</label>
              <input type= 'text' name='task2' placeholder='Task Description'></input>

              <label htmlFor='task3'>Task 3</label>
              <input type= 'text' name='task3' placeholder='Task Description'></input>
          </div>
          <div className='btn-container'>
              <button type='button' name='add-btn' onClick={handleAdd}>Add New</button>
              <button type='button' name='remove-btn' onClick={handleRemove}>Remove</button>
          </div>
        </div>

    </fieldset>
  )
}

export default Experience
import React from 'react'
import '../styling/Education.css'

const Education = ({ handleAdd, handleRemove }) => {
  return (
    <fieldset className='education-container'>
        <legend>Education</legend>
        <div className='institution-container'>
          <div className='institution-input'>
              <label htmlFor='institution'>Institution</label>
              <input type= 'text' placeholder='Institution Name' id='institution'></input>
          </div>
          <div className='study-title-input'>
              <label htmlFor='study-title'>Title of Study</label>
              <input type= 'text' placeholder='Title of Study' id='study-title'></input>
          </div>
          <div className='location-input'>
            <label htmlFor='location'>Location</label>
              <input type= 'text' placeholder='Location' id='location'></input>
          </div>
          <div className='study-duration-input'>
            <div className='start-date-input'>
              <label htmlFor='start'>Start Date</label>
              <input type= 'date' id='start'></input>
            </div>
            <div className='end-date-input'>
              <label htmlFor='end'>End Date</label>
              <input type= 'date' id='end'></input>
            </div>
          </div>
          <div className='btn-container'>
              <button type='button' id='add-btn' onClick={handleAdd}>Add New</button>
              <button type='button' id='remove-btn' onClick={handleRemove}>Remove</button>
          </div>
        </div>
    </fieldset>
  )
}

export default Education
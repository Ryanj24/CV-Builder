import React, { useState } from 'react'
import '../styling/Experience.css'

const Experience = ({ company, setCompany, companies, setCompanies, handleAddNew, handleRemove }) => {

  const [tasks, setTasks] = useState('');

  function handleChange(e) {

    if (e.target.name === 'company') {
        setCompany({...company, name: e.target.value})
    } else if (e.target.name === 'position') {
        setCompany({...company, position: e.target.value})
    } else if (e.target.name === 'location') {
        setCompany({...company, location: e.target.value})
    } else if (e.target.name === 'start') {
        setCompany({...company, start: e.target.value})
    } else if (e.target.name === 'end') {
        setCompany({...company, end: e.target.value})
    } else if (e.target.name === 'task') {
        setTasks(tasks => ([...tasks, e.target.value]));
        setCompany(company => ({...company, tasks: tasks}))
    }
  }

  function logCompany(e) {
    setCompanies([...companies, company]);
    console.log(companies);
  }

  return (
    <fieldset className='experience-container'>
        <legend>Professional Experience</legend>
        <div className='company-container'>
          <div className='company-input'>
              <label htmlFor='company'>Company Name</label>
              <input type= 'text' placeholder='Company Name' name='company' onChange={handleChange}></input>
          </div>
          <div className='position-input'>
              <label htmlFor='position'>Position</label>
              <input type= 'text' placeholder='Position' name='position' onChange={handleChange}></input>
          </div>
          <div className='location-input'>
            <label htmlFor='location'>Location</label>
              <input type= 'text' placeholder='Location' name='location' onChange={handleChange}></input>
          </div>
          <div className='job-duration-input'>
            <div className='start-date-input'>
              <label htmlFor='start'>Start Date</label>
              <input type= 'date' name='start' onChange={handleChange}></input>
            </div>
            <div className='end-date-input'>
              <label htmlFor='end'>End Date</label>
              <input type= 'date' name='end' onChange={handleChange}></input>
            </div>
          </div>
          <div className='tasks-input'>
              <label>Main Tasks of Role</label>
              <label htmlFor='task1'>Task 1</label>
              <input type= 'text' name='task' placeholder='Task Description' onChange={handleChange}></input>

              <label htmlFor='task2'>Task 2</label>
              <input type= 'text' name='task' placeholder='Task Description' onChange={handleChange}></input>

              <label htmlFor='task3'>Task 3</label>
              <input type= 'text' name='task' placeholder='Task Description' onChange={handleChange}></input>
          </div>
          <div className='btn-container'>
              <button type='button' name='enter-btn' onClick={logCompany}>Enter</button>
              <button type='button' name='add-btn' onClick={handleAddNew}>Add New</button>
              <button type='button' name='remove-btn' onClick={handleRemove}>Remove</button>
          </div>
        </div>

    </fieldset>
  )
}

export default Experience
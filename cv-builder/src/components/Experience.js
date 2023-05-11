import React, { useState } from 'react'
import '../styling/Experience.css'

const Experience = ({ company, setCompany, companies, setCompanies, handleAddNew, handleRemove }) => {

  const [singleTask, setSingleTask] = useState('')
  const [tasks, setTasks] = useState([]);

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
    } else if (e.target.name === 'task1') {
        setSingleTask(e.target.value)
    } else if (e.target.name === 'task2') {
        setSingleTask(prev => e.target.value)
    } else if (e.target.name === 'task3') {
        setSingleTask(prev => e.target.value)   
    }
  }

  function addTask(e) {
    setTasks(prev => [...prev, singleTask])
  }

  function AddCompany(e) {
    setCompany({...company, tasks: tasks})
    setCompanies(prev => [...prev, company]);
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
              <div className='task'>
                  <label htmlFor='task1'>Task 1</label>
                  <div className='input-btn-group'>
                  <input type= 'text' name='task1' placeholder='Task Description' onChange={handleChange}></input>
                  <button type='button' onClick={addTask}>Enter</button>
                  </div>
              </div>

              <div className='task'>
                  <label htmlFor='task2'>Task 2</label>
                  <div className='input-btn-group'>
                  <input type= 'text' name='task2' placeholder='Task Description' onChange={handleChange}></input>
                  <button type='button' onClick={addTask}>Enter</button>
                  </div>
              </div>

              <div className='task'>
                  <label htmlFor='task3'>Task 3</label>
                  <div className='input-btn-group'>
                  <input type= 'text' name='task3' placeholder='Task Description' onChange={handleChange}></input>
                  <button type='button' onClick={addTask}>Enter</button>
                  </div>
              </div>

          </div>
          <div className='btn-container'>
              <button type='button' name='enter-btn' onClick={AddCompany}>Enter</button>
              <button type='button' name='add-btn' onClick={handleAddNew}>Add New</button>
              <button type='button' name='remove-btn' onClick={handleRemove}>Remove</button>
          </div>
        </div>

    </fieldset>
  )
}

export default Experience
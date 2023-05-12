import React, { useState } from 'react'
import '../styling/Experience.css'

const Experience = ({ company, setCompany, companies, setCompanies, handleAddNew, handleRemove }) => {

  /*
  const [singleTask, setSingleTask] = useState('')
  const [tasks, setTasks] = useState([]);*/


  function handleChange(e) {

    const {name, value} = e.target;


    setCompany((prevState) => {
      if (name.includes('task')) {
        let index = Number(name.at(-1)) - 1
        let newTasks = [...company.tasks]
        newTasks[index] = value 
        return {...prevState, tasks: newTasks}
      }
      return {...prevState, [name]: value}
    })
  }

  /*
  function addTask(e) {
    setTasks(prev => [...prev, singleTask])
  }*/

  function AddCompany(e) {
    setCompanies([...companies, company]);
  }


  return (
    <fieldset className='experience-container'>
        <legend>Professional Experience</legend>
        <div className='company-container'>
          <div className='company-input'>
              <label htmlFor='company'>Company Name</label>
              <input type= 'text' placeholder='Company Name' name='name' onChange={handleChange}></input>
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
                  <button type='button'>Enter</button>
                  </div>
              </div>

              <div className='task'>
                  <label htmlFor='task2'>Task 2</label>
                  <div className='input-btn-group'>
                  <input type= 'text' name='task2' placeholder='Task Description' onChange={handleChange}></input>
                  <button type='button'>Enter</button>
                  </div>
              </div>

              <div className='task'>
                  <label htmlFor='task3'>Task 3</label>
                  <div className='input-btn-group'>
                  <input type= 'text' name='task3' placeholder='Task Description' onChange={handleChange}></input>
                  <button type='button'>Enter</button>
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
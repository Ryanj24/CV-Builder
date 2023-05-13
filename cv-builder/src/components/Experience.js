import React from 'react'
import '../styling/Experience.css'
import uniqid from 'uniqid'


const Experience = ({ company, setCompany, companies, setCompanies }) => {



  function handleChange(e) {

    const {name, value} = e.target;
    const id = uniqid();


    setCompany((prevState) => {
      if (name.includes('task')) {
        let index = Number(name.at(-1)) - 1
        let newTasks = [...company.tasks]
        newTasks[index] = value 
        return {...prevState, tasks: newTasks}
      }
      return {...prevState, [name]: value}
    })

    setCompany(prevState => ({...prevState, id: id}))
  }


  function handleEnterCompany(e) {
    document.querySelectorAll('input').forEach(input => input.value = '')
    setCompanies([...companies, company]);
    setCompany({
      id: '',
      name: '',
      position: '',
      location: '',
      start: '',
      end: '',
      tasks: []
    })
    document.querySelector('.experience-container').scrollIntoView({behavior:'smooth'})
  }

  function handleClearInputs() {
    document.querySelectorAll('input').forEach(input => input.value = '')
    setCompany({
      id: '',
      name: '',
      position: '',
      location: '',
      start: '',
      end: '',
      tasks: []
    })
  }


  return (
    <fieldset className='experience-container'>
        <legend>Professional Experience</legend>
        <div className='company-container'>
        <h2 className='subsection-headers'>Company Details</h2>
        <p className='experience-instructions'>
          Enter the details below of each company you have worked for one at a time and hit the enter button at the bottom of the section to add the company to the CV on the right.
        </p>
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
          <h2 className='subsection-headers'>Employment Period</h2>
            <p className='experience-instructions'>
              If you are currently still employed at this company, simply leave the end date field blank
            </p>
            <div className='date-inputs'>
              <div className='start-date-input'>
                <label htmlFor='start'>Start Date</label>
                <input type= 'date' name='start' onChange={handleChange}></input>
              </div>
              <div className='end-date-input'>
                <label htmlFor='end'>End Date</label>
                <input type= 'date' name='end' onChange={handleChange}></input>
              </div>
            </div>
          </div>
          <div className='tasks-input'>
              <h2 className='subsection-headers' id='task-section-label'>Main Tasks of Role</h2>
              <p className='experience-instructions'>
                If there were fewer than 5 main tasks/ responsibilities at this company, leave the remaining fields empty
              </p>
              <div className='task'>
                  <label htmlFor='task1'>Task 1</label>
                  <div className='input-btn-group'>
                  <input type= 'text' name='task1' placeholder='Task Description' onChange={handleChange}></input>
                  </div>
              </div>

              <div className='task'>
                  <label htmlFor='task2'>Task 2</label>
                  <div className='input-btn-group'>
                  <input type= 'text' name='task2' placeholder='Task Description' onChange={handleChange}></input>
                  </div>
              </div>

              <div className='task'>
                  <label htmlFor='task3'>Task 3</label>
                  <div className='input-btn-group'>
                  <input type= 'text' name='task3' placeholder='Task Description' onChange={handleChange}></input>
                  </div>
              </div>

              <div className='task'>
                  <label htmlFor='task1'>Task 4</label>
                  <div className='input-btn-group'>
                  <input type= 'text' name='task4' placeholder='Task Description' onChange={handleChange}></input>
                  </div>
              </div>

              <div className='task'>
                  <label htmlFor='task1'>Task 5</label>
                  <div className='input-btn-group'>
                  <input type= 'text' name='task5' placeholder='Task Description' onChange={handleChange}></input>
                  </div>
              </div>
          </div>
        </div>
        <div className='btn-container'>
              <button type='button' name='enter-btn' onClick={() => handleEnterCompany()}>Enter Company</button>
              <button type='button' name='remove-btn' onClick={handleClearInputs}>Clear Fields</button>
        </div>
    </fieldset>
  )
}

export default Experience
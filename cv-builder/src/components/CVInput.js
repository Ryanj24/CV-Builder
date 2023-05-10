import React from 'react'
import '../styling/CVInput.css'
import PersonalDetails from './PersonalDetails'
import Experience from './Experience'
import Education from './Education'

const CVInput = () => {

  function handleAdd() {
    console.log('Add');
  }

  function handleRemove() {
    console.log('Remove');
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Submitted')
  }

  return (
    <div className='inputs'>
      <form onSubmit={e => handleSubmit(e)}>
        <PersonalDetails />
        <Experience 
          handleAdd = {handleAdd}
          handleRemove = {handleRemove}
        />
        <Education 
          handleAdd = {handleAdd}
          handleRemove = {handleRemove}
        />
        <div className='submit-btn-container'>
            <button type='submit'>Generate CV</button>
        </div>
      </form>
    </div>
  )
}

export default CVInput
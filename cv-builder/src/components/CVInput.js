import React from 'react'
import '../styling/CVInput.css'
import PersonalDetails from './PersonalDetails'
import Experience from './Experience'
import Education from './Education'

const CVInput = ({ firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, companies, setCompanies }) => {

  function handleAdd() {
    console.log('Add');
  }

  function handleRemove() {
    console.log('Remove');
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target);
  }


  return (
    <div className='inputs'>
      <form onSubmit={e => handleSubmit(e)}>
        <PersonalDetails 
        firstName={firstName} 
        setFirstName={setFirstName}
        lastName={lastName} 
        setLastName={setLastName}
        email={email} 
        setEmail={setEmail}
        phoneNumber={phoneNumber} 
        setPhoneNumber={setPhoneNumber}
        />
        <Experience 
          companies={companies}
          setCompanies={setCompanies}
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
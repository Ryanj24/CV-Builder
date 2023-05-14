import React from 'react'
import '../styling/CVInput.css'
import PersonalDetails from './PersonalDetails'
import Experience from './Experience'
import Education from './Education'

const CVInput = ({ firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, companies, setCompanies, company, setCompany, school, setSchool, schools, setSchools }) => {

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target);
  }

  /*
        <div className='submit-btn-container'>
            <button type='submit'>Generate CV</button>
        </div>*/

  return (
    <div className='inputs'>
      <form onSubmit={e => handleSubmit(e)} id='myForm'>
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
          company={company}
          setCompany={setCompany}
        />
        <Education 
          schools={schools}
          setSchools={setSchools}
          school={school}
          setSchool={setSchool}
        />
      </form>
    </div>
  )
}

export default CVInput
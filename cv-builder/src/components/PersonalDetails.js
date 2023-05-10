import React from 'react'
import '../styling/PersonalDetails.css'


const PersonalDetails = ({ firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber }) => {

    function handleChange(e) {

        if (e.target.name === 'firstName') {
            setFirstName(e.target.value)
        } else if (e.target.name === 'lastName') {
            setLastName(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'phoneNumber') {
            setPhoneNumber(e.target.value)
        }
    }
  return (
    <fieldset className='personal-details-container'>
        <legend>Personal Details</legend>
        <div className='first-name-input'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' placeholder='First Name' name='firstName' onChange={handleChange}></input>
        </div>
        <div className='last-name-input'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' placeholder='Last Name' name='lastName' onChange={handleChange}></input>
        </div>
        <div className='email-input'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Email' name='email' onChange={handleChange}></input>
        </div>
        <div className='phone-input'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type='text' placeholder='Phone Number' name='phoneNumber' onChange={handleChange}></input>
        </div>
    </fieldset>
  )
}

export default PersonalDetails
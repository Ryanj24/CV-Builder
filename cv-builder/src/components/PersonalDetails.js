import React from 'react'
import '../styling/PersonalDetails.css'


const PersonalDetails = () => {
  return (
    <fieldset className='personal-details-container'>
        <legend>Personal Details</legend>
        <div className='first-name-input'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' placeholder='First Name' id='firstName'></input>
        </div>
        <div className='last-name-input'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' placeholder='Last Name' id='lastName'></input>
        </div>
        <div className='email-input'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Email' id='email'></input>
        </div>
        <div className='phone-input'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type='text' placeholder='Phone Number' id='phoneNumber'></input>
        </div>
    </fieldset>
  )
}

export default PersonalDetails
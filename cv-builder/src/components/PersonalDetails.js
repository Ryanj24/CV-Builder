import React from 'react'
import '../styling/PersonalDetails.css'


const PersonalDetails = ({ firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber }) => {

    function handleChange(e) {
        console.log(e.target.id);

        if (e.target.id === 'firstName') {
            setFirstName(e.target.value)
        } else if (e.target.id === 'lastName') {
            setLastName(e.target.value)
        } else if (e.target.id === 'email') {
            setEmail(e.target.value)
        } else if (e.target.id === 'phoneNumber') {
            setPhoneNumber(e.target.value)
        }
        /*
        setFirstName(e.target.value)
        setLastName(e.target.value)
        setEmail(e.target.value)
        setPhoneNumber(e.target.value)*/
    }
  return (
    <fieldset className='personal-details-container'>
        <legend>Personal Details</legend>
        <div className='first-name-input'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' placeholder='First Name' id='firstName' onChange={handleChange}></input>
        </div>
        <div className='last-name-input'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' placeholder='Last Name' id='lastName' onChange={handleChange}></input>
        </div>
        <div className='email-input'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Email' id='email' onChange={handleChange}></input>
        </div>
        <div className='phone-input'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type='text' placeholder='Phone Number' id='phoneNumber' onChange={handleChange}></input>
        </div>
    </fieldset>
  )
}

export default PersonalDetails
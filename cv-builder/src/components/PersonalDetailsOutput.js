import React from 'react'
import '../styling/PersonalDetailsOutput.css'

const PersonalDetailsOutput = ({firstName, lastName, email, phoneNumber}) => {
  return (
    <section className='personal-details-output'>
        <section className='person-name'>
            <h1>{firstName + ' ' + lastName}</h1>
        </section>
        <section className='other-details'>
            <section className='person-email'>
                <p>{email}</p>
            </section>
            <div className='divider'>{phoneNumber === '' ? null : '|'}</div>
            <section className='person-phoneNumber'>
                <p>{phoneNumber}</p>
            </section>
        </section>
    </section>
  )
}

export default PersonalDetailsOutput
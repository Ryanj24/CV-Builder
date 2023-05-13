import React from 'react'
import '../styling/Institution.css'
import format from 'date-fns/format'

const Institution = ({ id, name, studyTitle, location, start, end, achievements }) => {
  return (
    <section className='institution'>
        <section className='name-duration'>
          <div className='institution-name'>
              <h2>{name}</h2>
          </div>
          <div className='duration-of-study'>
          <p>{end === '' ? format(new Date(start), 'yyyy') + ' - Present' : format(new Date(start), 'yyyy') + ' - ' + format(new Date(end), 'yyyy')}</p>
          </div>
        </section>
        <section className='study-title'>
            <p>{studyTitle}</p>
        </section>
        <section className='key-points'>
            <ul>
            {achievements.map(item => 
              <li key={achievements.indexOf(item)}>{item}</li>)}
            </ul>
        </section>
      </section>
  )
}

export default Institution
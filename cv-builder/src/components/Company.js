import React from 'react'
import '../styling/Company.css'
import format from 'date-fns/format'

const Company = ({ name, position, location, start, end, tasks}) => {
  return (
    <section className='company'>
      <section className='name-duration'>
        <div className='company-name'>
            <h3>{name}</h3>
        </div>
        <div className='duration-of-job'>
            <p>{end === '' ? format(new Date(start), 'LLLL yyyy') + ' - Present' : format(new Date(start), 'LLLL yyyy') + ' - ' + format(new Date(end), 'LLLL yyyy')}</p>
        </div>
      </section>
      <section className='job-title-location'>
        <div className='job-title'>
          <p>{position}</p>
        </div>
        <div className='job-location'>
          <p>{location}</p>
        </div>
      </section>
      <section className='key-points'>
          <ul>
            {tasks.map(task => 
              <li key={tasks.indexOf(task)}>{task}</li>)}
          </ul>
      </section>
    </section>
  )
}

export default Company
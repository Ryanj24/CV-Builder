import React from 'react'
import '../styling/Company.css'

const Company = ({ name, position, location, start, end, tasks}) => {
  return (
    <section className='company'>
      <section className='name-duration'>
        <div className='company-name'>
            <h2>{name}</h2>
        </div>
        <div className='duration-of-job'>
            <p>{start + '-' + end}</p>
        </div>
      </section>
      <section className='job-title'>
        <p>{position}</p>
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
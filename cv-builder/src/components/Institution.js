import React from 'react'
import '../styling/Institution.css'

const Institution = () => {
  return (
    <section className='institution'>
        <section className='name-duration'>
          <div className='institution-name'>
              <h2>University of Glasgow</h2>
          </div>
          <div className='duration-of-study'>
              <p>2016-2020</p>
          </div>
        </section>
        <section className='study-title'>
            <p>Bsc (Hons) Statistics</p>
        </section>
        <section className='key-points'>
            <ul>
              <li>Graduated from Honors Program, Rank 1</li>
              <li>Recipient of Dean's List Academic Achievement Award</li>
              <li>Dean's List, GPA 3.89</li>
            </ul>
        </section>
      </section>
  )
}

export default Institution
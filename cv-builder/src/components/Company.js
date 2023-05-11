import React from 'react'
import '../styling/Company.css'

const Company = () => {
  return (
    <section className='company'>
          <section className='name-duration'>
            <div className='company-name'>
                <h2>Barclays</h2>
            </div>
            <div className='duration-of-job'>
                <p>September 2016 - Present</p>
            </div>
          </section>
          <section className='job-title'>
            <p>Marketing & Sales Director</p>
          </section>
          <section className='key-points'>
              <ul>
                <li>Led the Marketing and Sales teams achieving a company growth of 163% in 5 years</li>
                <li>Reinforced the brand by redesigning the corporate identity and executing online marketing campaigns</li>
                <li>Expanded operations to 9 new countries in Latin America</li>
              </ul>
          </section>
        </section>
  )
}

export default Company
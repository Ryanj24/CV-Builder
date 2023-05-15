import React from 'react'
import PersonalDetailsOutput from './PersonalDetailsOutput';
import ExperienceOutput from './ExperienceOutput';
import EducationOutput from './EducationOutput';
import '../styling/PrintCV.css'

const PrintCV = React.forwardRef(({firstName, lastName, email, phoneNumber, companies, schools}, ref) => {
    return (
      <div className='print-container' ref={ref}>
        <div className='personal'>
        <PersonalDetailsOutput 
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNumber={phoneNumber}
        />
        </div>
        <div className='exp'>
        <ExperienceOutput 
            companies={companies}
        />
        </div>
        <div className='education'>
        <EducationOutput 
            schools={schools}
        />
        </div>
      </div>
    )
  });
  
  export default PrintCV
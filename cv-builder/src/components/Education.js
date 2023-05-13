import React from 'react'
import '../styling/Education.css'
import uniqid from 'uniqid'

const Education = ({ school, setSchool, schools, setSchools }) => {

  function handleChange(e) {

    const {name, value} = e.target;
    const id = uniqid();


    setSchool((prevState) => {
      if (name.includes('item')) {
        let index = Number(name.at(-1)) - 1
        let newAchievements = [...school.achievements]
        newAchievements[index] = value 
        return {...prevState, achievements: newAchievements}
      }
      return {...prevState, [name]: value}
    })

    setSchool(prevState => ({...prevState, id: id}))
  }


  function handleEnterSchool() {
    document.querySelectorAll('input').forEach(input => input.value = '')
    setSchools([...schools, school]);
    setSchool({
      id: '',
      name: '',
      position: '',
      location: '',
      start: '',
      end: '',
      achievements: []
    })
    document.querySelector('.education-container').scrollIntoView({behavior:'smooth'})
  }

  function handleClearInputs() {
    document.querySelectorAll('input').forEach(input => input.value = '')
    setSchool({
      id: '',
      name: '',
      position: '',
      location: '',
      start: '',
      end: '',
      achievements: []
    })
  }
  return (
    <fieldset className='education-container'>
        <legend>Education</legend>
        
        <div className='institution-container'>
          <h2 className='subsection-headers'>Institution Details</h2>

          <p className='education-instructions'>As you have done above for previous companies you've worked for, now enter the details of the schools/colleges/universities you have attended</p>

          <div className='institution-input'>
              <label htmlFor='institution'>Institution Name</label>
              <input type= 'text' placeholder='Institution Name' name='name' onChange={handleChange}></input>
          </div>

          <div className='study-title-input'>
              <label htmlFor='study-title'>Title of Study</label>
              <input type= 'text' placeholder='Title of Study' name='studyTitle' onChange={handleChange}></input>
          </div>

          <div className='location-input'>
              <label htmlFor='location'>Location</label>
              <input type= 'text' placeholder='Location' name='location' onChange={handleChange}></input>
          </div>

          <div className='study-duration-input'>
              <h2 className='subsection-headers'>Study Duration</h2>
              <p className='education-instructions'>As mentioned above, if you are currently still studying at this institution, please leave the following end date field blank</p>
              <div className='date-inputs'>
                <div className='start-date-input'>
                  <label htmlFor='start'>Start Date</label>
                  <input type= 'date' name='start' onChange={handleChange}></input>
                </div>
                <div className='end-date-input'>
                  <label htmlFor='end'>End Date</label>
                  <input type= 'date' name='end' onChange={handleChange}></input>
                </div>
            </div>
          </div>

          <div className='achievements-input'>
              <h2 className='subsection-headers'>Main Achievements/ Extra Curricular Activities</h2>
              <p className='education-instructions'>
                Now enter any outstanding achievements/ extra-curricular activities you have done/are doing at this institution. Not all fields have to be filled
              </p>
              <div className='item'>
                  <label htmlFor='item1'>Achievement/Activity 1</label>
                  <div className='input-btn-group'>
                      <input type= 'text' name='item1' placeholder='Achievement/Activity' onChange={handleChange}></input>
                  </div>
              </div>

              <div className='item'>
                  <label htmlFor='item2'>Achievement/Activity 2</label>
                  <div className='input-btn-group'>
                      <input type= 'text' name='item2' placeholder='Achievement/Activity' onChange={handleChange}></input>
                  </div>
              </div>

              <div className='item'>
                  <label htmlFor='item3'>Achievement/Activity 3</label>
                  <div className='input-btn-group'>
                      <input type= 'text' name='item3' placeholder='Achievement/Activity' onChange={handleChange}></input>
                  </div>
              </div>
          </div>
        </div>

        <div className='btn-container'>
          <button type='button' name='enter-btn' onClick={() => handleEnterSchool()}>Enter School</button>
          <button type='button' name='remove-btn' onClick={handleClearInputs}>Clear Fields</button>
        </div>
      </fieldset>
  )
}

export default Education
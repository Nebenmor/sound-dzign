import React from 'react'
import "./Info.css"
import { bgElement2, studentIcon, videoIcon } from '../../assets' 

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} alt="student-icon" />
            <div className='amount' >23,000+</div>
            <div className='type' >students</div>
          </div>

          <div className="info-content">
            <img src={videoIcon} alt="student-icon" />
            <div className='amount' >26 Hrs</div>
            <div className='type' >Video Content</div>
          </div>
        </div>

        <img className='bg-element-2' src={bgElement2} alt="bg-element-2" />
      </div>
    </section>
  )
}

export default Info
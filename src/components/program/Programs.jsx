import React from 'react'
import './Programs.css';
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const program = () => {
  return (
   <div className="Programs" id="programs">
    <div className="programs-header">
      <span className='stroke-text'>Explore</span>
      <span>Programs</span>
      <span className='stroke-text'>to shape you</span>
    </div>
    <div className="program-categories">
      {programsData.map((program)=>(
        <div className="category">
          {program.image}
          <span>{program.heading}</span>
          <span>{program.details}</span>
          <div className="join-now">
            <span>join-now</span>
            <img src={RightArrow} alt="" />
          </div>
        </div>
      ))}
    </div>

   </div>
  )
}

export default program

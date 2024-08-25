import React from 'react'
import './Stats.css'
const Stats = () => {
  return (
    
        <div className="stats-container" >
          <div className="stat-item">
            <div className="stat-number">300+</div>
            <p className="stat-description">Projects</p>
          </div>
          <div className="vertical-bar"></div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <p className="stat-description">Consultation</p>
          </div>
          <div className="vertical-bar"></div>
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <p className="stat-description">Community Members</p>
          </div>
        </div>
  )
}

export default Stats
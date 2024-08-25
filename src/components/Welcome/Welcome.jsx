import React from 'react'
import './Welcome.css'
import arrow from '../../assets/dark-arrow.png'
const Welcome = () => {
  return (
    <div class ="bg">
    
    <div class="welcome-text">
        <h1>Welcome to M-Stars Engineering & Construction </h1>
        <br />
        <p>M-Stars Engineering & Construction is a trusted name in the construction services industry, serving government sectors, commercial and industrial building projects. As your reliable source for mechanical & electrical, plumbing, sanitary and gas/fire protection services, we deliver on our promise to provide customized solutions and expertise in mechanical, electrical and I&C services to address all your construction needs.</p>
         <br />
         <button class="btnnav">Meet the Team<img src={arrow} alt="" /></button>

    </div>

</div>
  )
}

export default Welcome
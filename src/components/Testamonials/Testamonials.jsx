import React, { useRef } from 'react'
import './Testamonials.css'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user1.jpeg'



const Testamonials = () => {
  const slider= useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -60) {
      tx -= 40;
    }
    slider.current.style.transform = `translateX(${tx}%)`;


}
const slideBackward = ()=>{
  if(tx < 0) {
    tx += 40;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

  

  return (
    <>
    <div className="testbg">
      <div className="test-container">
      <div class="test" >
           <p>Our Testamonials</p>
           <h2>What our Client Say</h2> 
       </div>
      </div>
   
    
   <div className="testimonial-container">
   

   
    <div className="testimonials">
      <img src={next_icon} className='next-btn'alt=""  onClick={slideForward}/>
      <img src={back_icon}  className='back-btn'alt="" onClick={slideBackward}/>

       <div className="slider">
           <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                    <h3>User 1</h3>
                    <span>California, USA</span>
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                    <h3>User 2</h3>
                    <span>California, USA</span>
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                    <h3>User 3</h3>
                    <span>California, USA</span>
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                    <h3>User 4</h3>
                    <span>California, USA</span>
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                    <h3>User 5</h3>
                    <span>California, USA</span>
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

              </div>
            </li>
           
          </ul> 
       </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Testamonials
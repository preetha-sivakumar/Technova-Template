import React  from 'react'
// import {Helmet} from 'react-helmet'
import './About.css'

import about1 from '../../assets/about.png'
import about2 from '../../assets/about1.png'
import about3 from '../../assets/team1.jpg'
import serv3 from '../../assets/serv3.png'

import img1 from '../../assets/teamwork.jpg'
import img2 from '../../assets/teamwork2.jpg'
import img3 from '../../assets/quality1.jpg'
import img4 from '../../assets/management.jpg'


const About = () => {

    
    const team = [
        {
          title: "How it Began",
          subtitle: "About Us",
          description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
          description2: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: about3,
          
        },
        {
          title: "Management Team",
          subtitle: "Mr. Udayappa MUTHU - Director",
          description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
          description2: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          description1: "Mr. Udayappa Muthu received his qualification for Licensed plumber from PUB in 2000 where he excelled in his training. He then went on to gain an excellent collection of hands-on-experience for site installation works in addition to his qualifications and theoretical expertise.",
          description2: "In 2009, he founded M-Stars Engineering & Construction Pte Ltd. As Managing Director, he spearheaded the company direction by implementing customer-oriented, top and prompt quality service to all their clients. He led a team of committed staff by adhering to strict training programs and obtained ISO 9001:2015 and OHSAS 45001:2018 for the Company.",
          
          image: serv3,
       
        },
        
        // Add more services as needed
      ];
      const team1 = [
        {
          title: "Management Team",
          subtitle: "Mr. M P Arun Director – Operations",
          description1: "With over 32 years of experience in the construction industry, Mr. M P Arun is a veteran in his field. He has two decades worth of involvement in Singapore’s Construction Industry and has expertise in Commercial, Residential and Factory Buildings, including 15 years of experience with water and waste water treatment plant projects.",
          description2: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: about3,
          
        },
      ];

  return (
    <>
    
    
      
    <div class="about containernav">
    <div class="about-text">
        <h1>Meet the Team</h1>
        
    </div>
</div>

<div className="title-container">
        <div class="title" id="titlelink">
            <p>Our Profile</p>
             <h2>What makes us Different</h2>

      </div>
      <div className="abo-container">
      {team.map((service, index) => (
        <div className={`abo ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="abo-left">
            <img src={service.image} alt={service.subtitle} className="servimg" />
          </div>
          <div className="abo-right">
            <h3>{service.title}</h3>
            <h2>{service.subtitle}</h2>
            <p>{service.description1}</p>
            <p>{service.description2}</p>
          </div>
        </div>
      ))}
    </div>
      <div className="management">
        <div className="card-row">
      <div class="card-wrapper1">
  <div class="card-top">
    <img class="image" src={img1} />
  </div>
   
  <div class="card-bottom">
    <span class="top-text">Management Skill</span><br />
   <span class="bottom-text">Chairs the committee for Project Management, Planning and Design, and workplace Safety and Health in the company.</span>
    
   
  </div>
</div>
<div class="card-wrapper1">
  <div class="card-top">
    <img class="image" src={img2} />
  </div>
   
  <div class="card-bottom">
    <span class="top-text">Communication</span><br />
   <span class="bottom-text">He launched a policy of timely progress reporting, coordination and attends regular meetings with clients, contractors and authorities.</span>
    
  </div>
</div>
<div class="card-wrapper1">
  <div class="card-top">
    <img class="image" src={img3} />
  </div>
   
  <div class="card-bottom">
    <span class="top-text">Quality</span><br />
   <span class="bottom-text">involved in all engineering design and technical calculation and purchasing process by ensuring that proper, accurate and quality materials.</span>
   
  </div>
</div>
<div class="card-wrapper1">
  <div class="card-top">
    <img class="image" src={img4} />
  </div>
   
  <div class="card-bottom">
    <span class="top-text">Teamwork</span><br />
   <span class="bottom-text">Emphasis on strong team support and co-operation is key in his drive to complete all tasks within client’s expectations and believes in adhering to the golden rule of placing his customers first.</span>
    
  </div>
</div>
      
                </div>
                </div>
                <div className="abo-container">
      {team1.map((service, index) => (
        <div className={`abo ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="abo-left">
            <img src={service.image} alt={service.subtitle} className="servimg" />
          </div>
          <div className="abo-right">
            <h3>{service.title}</h3>
            <h2>{service.subtitle}</h2>
            <p>{service.description1}</p>
            <p>{service.description2}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="management" >
        <div className="card-row">
      <div class="card-wrapper1">
  <div class="card-top">
    <img class="image" src={img1} />
  </div>
   
  <div class="card-bottom">
    <span class="top-text">Education</span><br />
   <span class="bottom-text">Bachelor degree in Engineering (Civil) and Masters in Engineering (Structures).</span>
    
   
  </div>
</div>
<div class="card-wrapper1">
  <div class="card-top">
    <img class="image" src={img2} />
  </div>
   
  <div class="card-bottom">
    <span class="top-text">Professional</span><br />
   <span class="bottom-text">With over 27 years of experience in the construction industry, Mr. M P Arun is a veteran in his field. He has two decades worth of involvement.</span>
    
  </div>
</div>
<div class="card-wrapper1">
  <div class="card-top">
    <img class="image" src={img3} />
  </div>
   
  <div class="card-bottom">
    <span class="top-text">Leadership</span><br />
   <span class="bottom-text">His leadership is key in steering the company to greater heights and he believes in providing clients with high quality service.</span>
   
  </div>
</div>
<div class="card-wrapper1">
  <div class="card-top">
    <img class="image" src={img4} />
  </div>
   
  <div class="card-bottom">
    <span class="top-text">Knowledge</span><br />
   <span class="bottom-text">He is well versed in Aeration systems for reservoirs and waterways - Superpulsators, clarifiers and sand filters - and is experienced in EPC projects.</span>
    
  </div>
</div>
      
                </div>
                </div>
                
             
{/*     
      <Helmet>
        <script>
          {`
            let slideIndex = 0;
            showSlides();

            function showSlides() {
              let i;
              let slides = document.getElementsByClassName('mySlides');
              let dots = document.getElementsByClassName('dot');
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
              }
              slideIndex++;
              if (slideIndex > slides.length) {slideIndex = 1}
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(' active', '');
              }
              slides[slideIndex-1].style.display = 'block';
              dots[slideIndex-1].className += ' active';
              setTimeout(showSlides, 2000); // Change image every 2 seconds
            }
          `}
        </script>
      </Helmet>
              <div class="slideshow-container">

<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img src="" style="width:100%" />
  <div className="text">Caption Text</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  <img src="" style="width:100%" />
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img src="" style="width:100%" />
  <div className="text">Caption Three</div>
</div>

</div> 
 <br />

<div style="text-align:center">
  <span className="dot"></span> 
  <span className="dot"></span> 
  <span className="dot"></span> 

  
</div>   */}
      </div>
    
      
     
      </>
  )
}

export default About
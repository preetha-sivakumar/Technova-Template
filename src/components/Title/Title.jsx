import React, { useEffect, useRef } from 'react'
import './Title.css'

import service1 from '../../assets/service1.jpg'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'

import arrow from '../../assets/white-arrow1.png'

const services = [
    {
      title: "Plumbing, Sanitary & Gas Services",
      subtitle: "Plumbing, Sanitary & Gas Services",
      description1: "We provide quality plumbing, sanitary and gas services to our clients. We commit to maintain our high standards of workmanship and service for all our clients.",
      description2: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: service1,
      link: "dummy",
    },
    {
      title: "Fire Protection Service",
      subtitle: "Fire Protection Service",
      description1: "We provide comprehensive services in the area of Fire Protection to safeguard the lives of people and property in commercial, industrial and institutional premises.",
      description2: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: service2,
      link: "dummy",
    },
    {
        title: "Mechanical, Electrical and I&C Services",
        subtitle: "Mechanical, Electrical and I&C Services",
        description1: "We provide a wide range of services that attend to any of your mechanical, electrical and I&C needs.",
        description2: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: service3,
        link: "dummy",
        
      }
    // Add more services as needed
  ];

const Title = () => {

  const serviceRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            ref.querySelector('.servimg').classList.add('animate');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="title-container">
        <div class="title" id="titlelink">
            <p>Our SERVICES</p>
             <h2>What we Offer</h2>

      </div>
      <div className="services-container">
      {services.map((service, index) => (
        <div className={`service ${index % 2 === 0 ? 'left' : 'right'}`} key={index} ref={(el) => (serviceRefs.current[index] = el)}>
          <div className="service-left">
            <img src={service.image} alt={service.subtitle} className="servimg" />
          </div>
          <div className="service-right">
            <h3>{service.title}</h3>
            <h2>{service.subtitle}</h2>
            <p>{service.description1}</p>
            {/* <p>{service.description2}</p> */}
            <button href={service.link} class="btnserv">Explore More <img src={arrow} alt="" /></button>
          </div>
          <br />
        </div>
      ))}
    </div>
      </div>
  )
}

export default Title


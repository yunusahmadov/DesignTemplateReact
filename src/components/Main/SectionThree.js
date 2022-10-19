import React, { Component } from 'react'
import img10 from '../img/woman.jpg'

export class SectionThree extends Component {
  render() {
    const {about,multi}=this.props
    return (
      <section>
        <div className="portfolio">
        <h2 data-aos="fade-up"
     data-aos-duration="1500">{about}</h2>
        <h3 data-aos="fade-up"
     data-aos-duration="2000">{multi}</h3>
        <img data-aos="fade-up"
     data-aos-duration="2000" src={img10} alt="" />
        <button data-aos="fade-up"
     data-aos-duration="2000">VIEW PORTFOLIO</button>
        <div className="icons" data-aos="fade-up"
     data-aos-duration="3000">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-pinterest-p"></i>
        </div>
        </div>
      </section>
    )
  }
}

export default SectionThree
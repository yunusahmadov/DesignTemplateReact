import React, { Component } from 'react'
import img10 from '../img/woman.jpg'

export class SectionThree extends Component {
  render() {
    const {about,multi}=this.props
    return (
      <section>
        <div className="portfolio">
        <h2>{about}</h2>
        <h3>{multi}</h3>
        <img src={img10} alt="" />
        <button>VIEW PORTFOLIO</button>
        <div className="icons">
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
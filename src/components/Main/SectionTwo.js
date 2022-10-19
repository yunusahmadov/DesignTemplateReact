import React, { Component } from 'react'
import SectionTwoCard from './SectionTwoCard';
import img7 from '../img/phone.jpg'
import img8 from '../img/purple.jpg'
import img9 from '../img/choice.jpg'

export class SectionTwo extends Component {
  render() {
    const {power}=this.props;
    return (
      <section>
        <div className="section-two">
             <h2 data-aos="fade-up" data-aos-duration="1000">{power}</h2>
             <p data-aos="fade-up" data-aos-duration="2000">The result of our company branding process is a comprehensive brand guideline that can be used to design <a href="#">a marketing</a> website and other design assets like brand illustrations that reflect the new brand.</p>
             <div className="section-two-container">
                <SectionTwoCard
                dataaos="fade-up" 
                dataaosduration="1500"
                img={img7}
                brand="Brand strategy"
                li1="Brand equity audit"
                li2="Audience analysis"
                li3="Competitive review"
                li4="Strategic direction"
                />
                   <SectionTwoCard
                       dataaos="fade-up" 
                       dataaosduration="2000"
                img={img8}
                brand="Brand identity"
                li1="Visual positioning"
                li2="Visual identity system"
                li3="Icon & illustration guides"
                li4="Brand application"
                />
                   <SectionTwoCard
                       dataaos="fade-up" 
                       dataaosduration="3000"
                img={img9}
                brand="Communication strategy"
                li1="Verbal identity"
                li2="Tagline exploration"
                li3="Communication style guide"
                />
             </div>
        </div>
      </section>
    )
  }
}

export default SectionTwo
import React, { Component } from 'react'
import Card from '../Main/Card'
import img1 from '../img/Снимок.PNG'
import img2 from '../img/Снимок2.PNG'
import img3 from '../img/Снимок3.PNG'
import img4 from '../img/Снимок4.PNG'
import img5 from '../img/Снимок5.PNG' 
import img6 from '../img/Снимок6.PNG'


export class SectionOne extends Component {
  render() {
    const {work}=this.props;
    return (
      <section>
        <div className="section-one">
             <h2>{work}</h2>
             <div className="section-one-grid-container">
                    <Card
                    img={img1}
                    research="Research user needs"
                    discover="Discover pain points and understand user behaviour"
                    />
                    <Card
                    img={img2}
                    research="Prototype an idea"
                    discover="Validate ideas with an interactive prototype of your vision"
                    />
                      <Card
                    img={img3}
                    research="Design a new product"
                    discover="Launch an MVP with a best in class user experience"
                    />
                      <Card
                    img={img4}
                    research="Improve a product"
                    discover="Become a category leader using designops and UX/UI design"
                    />
                      <Card
                    img={img5}
                    research="Build Marketing Plan"
                    discover="Easiest way to manage your projects and tasks."
                    />
                      <Card
                    img={img6}
                    research="24/7 Support"
                    discover="Amet porttitor eget dolor morbi non. Facilisis volutpat est velit egestas."
                    /> 
             </div>
             <div className='contact'>
             <button className='contact-us'>Contact Us</button>
             </div>
        </div>
      </section>
    )
  }
}

export default SectionOne
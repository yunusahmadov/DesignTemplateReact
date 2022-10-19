import React, { Component } from 'react'
import img11 from '../img/four1.jpg'
import img12 from '../img/four2.jpg'
import img13 from '../img/four3.jpg'
import img14 from '../img/four4.jpg'
import img15 from '../img/four5.jpg'
import img16 from '../img/four6.jpg'
import SectionFourCard from './SectionFourCard'



export class SectionFour extends Component {
  render() {
    const {features,services}=this.props
    return (
      <section>
        <div className="section-four">
            <h3>{features}</h3>
            <h4>{services}</h4>

            <div className="section-four-container">
                <SectionFourCard
                img={img11}
                underimg="NO CODING"
                /> 
                 <SectionFourCard
                img={img12}
                underimg="SEO OPTIMOZATION"
                /> 
                  <SectionFourCard
                img={img13}
                underimg="CLOUD SOLUTIONS"
                /> 
                      <SectionFourCard
                img={img14}
                underimg="NO CODING"
                /> 
                 <SectionFourCard
                img={img15}
                underimg="SEO OPTIMOZATION"
                /> 
                  <SectionFourCard
                img={img16}
                underimg="CLOUD SOLUTIONS"
                /> 
            </div>
        </div>
      </section>
    )
  }
}

export default SectionFour
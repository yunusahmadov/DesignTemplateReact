import React, { Component } from 'react'
import SectionSixCard from './SectionSixCard'

export class SectionSix extends Component {
  render() {
    return (
      <section>
        <div className="section-six">
            <h3>We craft <span>innovative products</span></h3>
            <div className="craft-container">
                <SectionSixCard
                test="fa-regular fa-user"
                count="2.324"
                text="PROJECTS FINISHED"
                />
                  <SectionSixCard
                test="fa-solid fa-location-pin"
                count="7.158"
                text="HAPPY CLIENTS"
                />
                   <SectionSixCard
                test="fa-solid fa-location-pin"
                count="729"
                text="COFFEE CUPS"
                />
                   <SectionSixCard
                test="fa-solid fa-location-pin"
                count="3.129"
                text="WORKING HOURS"
                />
            </div>
        </div>
      </section>
    )
  }
}

export default SectionSix
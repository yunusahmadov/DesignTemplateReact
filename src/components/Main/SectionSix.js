import React, { Component } from 'react'
import SectionSixCard from './SectionSixCard'

export class SectionSix extends Component {
  render() {
    return (
      <section>
        <div className="section-six">
            <h3 data-aos="fade-up"
     data-aos-duration="1500">We craft <span data-aos="fade-up"
     data-aos-duration="1500">innovative products</span></h3>
            <div className="craft-container">
                <SectionSixCard
                   dataaos="fade-up" 
                   dataaosduration="500"
                test="fa-regular fa-user"
                count="2.324"
                text="PROJECTS FINISHED"
                />
                  <SectionSixCard
                     dataaos="fade-up" 
                     dataaosduration="1000"
                test="fa-solid fa-location-pin"
                count="7.158"
                text="HAPPY CLIENTS"
                />
                   <SectionSixCard
                      dataaos="fade-up" 
                      dataaosduration="1500"
                test="fa-solid fa-location-pin"
                count="729"
                text="COFFEE CUPS"
                />
                   <SectionSixCard
                      dataaos="fade-up" 
                      dataaosduration="2000"
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
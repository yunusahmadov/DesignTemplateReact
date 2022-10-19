import React, { Component } from 'react'
import SectionFive from './SectionFive'
import SectionFour from './SectionFour'
import SectionOne from './SectionOne'
import SectionSix from './SectionSix'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'


export class Main extends Component {
  render() {
    return (
      <main>
    <SectionOne
    work="We work in dedicated project teams, UX design"
    />
    <SectionTwo
    power="The power of branding"
    />
   <SectionThree
   about="About Us"
   multi="Multidisciplinary design studio"
   />
   <SectionFour
   features="Features"
   services="Our Features & Services"
   />
   <SectionFive/>
   <SectionSix/>
      </main>
    )
  }
}

export default Main
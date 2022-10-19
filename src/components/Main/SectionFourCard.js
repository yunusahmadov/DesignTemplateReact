import React, { Component } from 'react'

export class SectionFourCard extends Component {
  render() {
    const {underimg,img,dataaos,dataaosduration}=this.props
    return (
      <div className="section-four-card" data-aos={dataaos} data-aos-duration={dataaosduration}>
        <img src={img} />
        <h4>{underimg}</h4>
        <p>Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
        <button>MORE</button>
      </div>
    )
  }
}

export default SectionFourCard
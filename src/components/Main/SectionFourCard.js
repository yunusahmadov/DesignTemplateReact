import React, { Component } from 'react'

export class SectionFourCard extends Component {
  render() {
    const {underimg,img}=this.props
    return (
      <div className="section-four-card">
        <img src={img} />
        <h4>{underimg}</h4>
        <p>Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
        <button>MORE</button>
      </div>
    )
  }
}

export default SectionFourCard
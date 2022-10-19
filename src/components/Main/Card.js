import React, { Component } from 'react'


export class Card extends Component {
  render() {
 const {research,discover,img,dataaos,dataaosduration}=this.props;
    return (
      <div className="grid-container-card" data-aos={dataaos} data-aos-duration={dataaosduration}>
        <div className="icon">
          <img src={img} />
        </div>
        <h2>{research}</h2>
        <h3>{discover}</h3>
      </div>
    )
  }
}

export default Card
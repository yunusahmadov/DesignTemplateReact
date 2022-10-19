import React, { Component } from 'react'


export class SectionTwoCard extends Component {
  render() {
    const {img,li1,li2,li3,li4,brand,dataaos,dataaosduration}=this.props;
    return (
      <div className="section2-card" data-aos={dataaos} data-aos-duration={dataaosduration}>
           <div>
           <img src={img}/>
           </div>
            <h3>{brand}</h3>
            <ul>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
            </ul>
      </div>
    )
  }
}

export default SectionTwoCard
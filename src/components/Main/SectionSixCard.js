import React, { Component } from 'react'

export class SectionSixCard extends Component {
  render() {
    const{test,count,text,dataaos,dataaosduration}=this.props
    return (
      <div className="six-card" data-aos={dataaos} data-aos-duration={dataaosduration}>
            <div className="six-card-img">
            <i class={test}></i>
            </div>
            <p className='count'>{count}</p>
            <h4>{text}</h4>
      </div>
    )
  }
}

export default SectionSixCard
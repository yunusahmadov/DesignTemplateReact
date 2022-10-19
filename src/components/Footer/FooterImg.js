import React, { Component } from 'react'
import center from '../img/think.jpg'
import rocket from '../img/rocket.jpg'
export class FooterImg extends Component {
  render() {
    return (
      <div className="center-img">
            <div className='round'></div>
            <img className='center' src={center} />
            <img className='rocket' src={rocket}/>
      </div>
    )
  }
}

export default FooterImg
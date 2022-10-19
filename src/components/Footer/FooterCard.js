import React, { Component } from 'react'

export class FooterCard extends Component {
  render() {
    const{logo,t,t1,t2}=this.props
    return (
      <div className="footer-card">
        <div className="footer-card-top">
        <i class={logo}></i>
        <h4>{t}</h4>
        </div>
        <p>{t1}</p>
        <p>{t2}</p>
      </div>
    )
  }
}

export default FooterCard
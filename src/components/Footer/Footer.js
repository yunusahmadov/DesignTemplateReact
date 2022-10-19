import React, { Component } from 'react'
import FooterCard from './FooterCard'
import FooterImg from './FooterImg'

export class Footer extends Component {
  render() {
    return (
        <footer>
      <div className="footer-container">
        <div className="footer-left">
            <FooterCard
            logo="fa-solid fa-phone"
            t="CALL US"
            t1="1 (234) 567-891,"
            t2="1 (234) 987-654"
            />
               <FooterCard
            logo="fa-solid fa-phone"
            t="CALL US"
            t1="1 (234) 567-891,"
            t2="1 (234) 987-654"
            />
               <FooterCard
            logo="fa-solid fa-phone"
            t="CALL US"
            t1="1 (234) 567-891,"
            t2="1 (234) 987-654"
            />
        </div>
        <div className="footer-right">
            <FooterImg/>
        </div>
      </div>
      </footer>
    )
  }
}

export default Footer
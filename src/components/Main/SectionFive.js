import React, { Component } from 'react'
import img17 from '../img/purple.jpg'
import img18 from '../img/blackphone.jpg'
import img19 from '../img/water.jpg'
import img20 from '../img/nft.jpg'
import img21 from '../img/mockup.jpg'
import img22 from '../img/hand.jpg'


export class SectionFive extends Component {
  render() {
    return (
      <section>
        <div className="section-five">
            <div className="images-container">
            <div className="purple-container">
                        </div>
                    <img src={img17}/>
                    <img src={img18}/>
                    <img src={img19}/>
                    <img src={img20}/>
                    <img src={img21}/>
                    <img src={img22}/>
                    <div className="our-portfolio">
                <h3>Our Portfolio</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <button>LEARN MORE</button>
            </div>
            </div> 

        </div>
      </section>
    )
  }
}

export default SectionFive
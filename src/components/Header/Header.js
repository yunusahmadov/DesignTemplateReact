import React, { Component } from 'react'
export class Header extends Component {
  render() {
    let design = this.props.design
    return (
      <header>
        <div className="design-studio">
            <div className="design-studio-left">
                <h1>{design}</h1>
                <p>Quickly incentivize impactful action items before tactical collaboration and idea-sharing. Monotonically engage market-driven intellectual capital.</p>
                <button><a href="#">Learn More</a></button>
            </div>
        </div>
      </header>
    )
  }
}

export default Header
import React, { Component } from 'react'
import {Link} from 'react-router-dom';



export class Navbar extends Component {
    render() {
        return (
            <div>
                  <header>
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse.collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="navbar-brand">
              <Link exact to='/'><h1><span>QA IT</span>Agency</h1></Link>
              
            </div>
          </div>
          <div className="navbar-collapse collapse">
            <div className="menu">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation"><Link className='active' exact to='/'>Home</Link></li>
                <li role="presentation"><Link   to='/about'>About Us</Link></li>
                <li role="presentation"><Link   to='/services'>Services</Link></li>
                <li role="presentation"><Link   to='/portfolio'>Portfolio</Link></li>
                <li role="presentation"><Link    to='/blog'>Blog</Link></li>
                <li role="presentation"><Link   to='/contact'>Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
            </div>
        )
    }
}

export default Navbar

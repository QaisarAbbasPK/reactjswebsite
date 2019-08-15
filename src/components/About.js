import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
            <div id="breadcrumb">
              <div className="container">
                <div className="breadcrumb">
                  <li><a href="index.html">Home</a></li>
                  <li>About Us</li>
                </div>
              </div>
            </div>
            <div className="aboutus">
              <div className="container">
                <h3>Our company information</h3>
                <hr />
                <div className="col-md-7 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                  <img src="images/7.jpg" className="img-responsive" />
                  <h4>We Create, Design and Make it Real</h4>
                  <p>Nam tempor velit sed turpis imperdiet vestibulum. In mattis leo ut sapien euismod id feugiat mauris euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus id nulla risus, vel tincidunt
                    turpis. Aliquam a nulla mi, placerat blandit eros. </p>
                  <p>In neque lectus, lobortis a varius a, hendrerit eget dolor. Fusce scelerisque, sem ut viverra sollicitudin, est turpis blandit lacus, in pretium lectus sapien at est. Integer pretium ipsum sit amet dui feugiat vitae dapibus odio eleifend.</p>
                </div>
                <div className="col-md-5 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="skill">
                    <h2>Our Skills</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="progress-wrap">
                      <h3>Graphic Design</h3>
                      <div className="progress">
                        <div className="progress-bar  color1" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                          <span className="bar-width">85%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-wrap">
                      <h4>HTML</h4>
                      <div className="progress">
                        <div className="progress-bar color2" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>
                          <span className="bar-width">95%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-wrap">
                      <h4>CSS</h4>
                      <div className="progress">
                        <div className="progress-bar color3" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                          <span className="bar-width">80%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-wrap">
                      <h4>Wordpress</h4>
                      <div className="progress">
                        <div className="progress-bar color4" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                          <span className="bar-width">90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-team">
              <div className="container">
                <h3>Our Team</h3>
                <div className="text-center">
                  <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <img src="images/services/1.jpg" alt="" />
                    <h4>John Doe</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>
                  </div>
                  <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <img src="images/services/2.jpg" alt="" />
                    <h4>John Doe</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>
                  </div>
                  <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="900ms">
                    <img src="images/services/3.jpg" alt="" />
                    <h4>John Doe</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>
                  </div>
                </div>
              </div>
            </div>
            <footer>
              <div className="footer">
                <div className="container">
                  <div className="social-icon">
                    <div className="col-md-4">
                      <ul className="social-network">
                        <li><a href="#" className="fb tool-tip" title="Facebook"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#" className="twitter tool-tip" title="Twitter"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#" className="gplus tool-tip" title="Google Plus"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#" className="linkedin tool-tip" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="#" className="ytube tool-tip" title="You Tube"><i className="fa fa-youtube-play" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-md-offset-4">
                    <div className="copyright">
                      © Company Theme. All Rights Reserved.
                      <div className="credits">
                        {/*
                    All the links in the footer should remain intact.
                    You can delete the links only if you purchased the pro version.
                    Licensing information: https://bootstrapmade.com/license/
                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Company
                  */}
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>
                    </div>
                  </div>
                </div>
                <div className="pull-right">
                  <a href="#home" className="scrollup"><i className="fa fa-angle-up fa-3x" /></a>
                </div>
              </div>
            </footer>
          </div>
          
        )
    }
}

export default About

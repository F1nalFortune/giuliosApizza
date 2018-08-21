import React, { Component } from 'react';

class Footer extends Component {


  render() {
    return (
      <div id='footer' className='ui container'>
          <div className="ui grid foot">
            <p className="two wide column"></p>
            <p className="footer-block two wide column">SOCIAL</p>
            <div className='three wide column container ui'>
              <div className='ui grid'>
                <i className="fab fa-facebook-f fa-lg four wide column"></i>
                <i className="fab fa-instagram fa-lg four wide column"></i>
                <i className="fab fa-yelp fa-lg four wide column"></i>
              </div>
            </div>
            <p className="four wide column">126 Middletown Ave, North Haven CT</p>
            <div className="five wide column row">
              <p className='footer-link'>Menu</p>
              <p className='footer-link'>Catering</p>
              <p className='footer-link'>Order</p>
              <p className='footer-link'>Top Shelf Lounge</p>
            </div>

          </div>
      </div>
    );
  }
}

export default Footer;

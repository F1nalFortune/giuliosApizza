import React, { Component } from 'react';
import logo from '../images/grubHub.jpg'; // Tell Webpack this JS file uses this image

class Footer extends Component {


  render() {
    return (
      <div id='footer' className='ui container'>
          <div className="ui grid foot">
            <p className="one wide column"></p>
            <p className="footer-block two wide column">SOCIAL</p>
            <div className='four wide column container ui'>
              <div className='ui grid'>
                <a className='footer-icon' href='https://www.facebook.com/groups/172469496129743/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f fa-3x four wide column"></i></a>
                <a className='footer-icon' href='https://www.yelp.com/biz/giulios-pizza-restaurant-north-haven' target='_blank' rel="noopener noreferrer"><i className="fab fa-yelp fa-3x four wide column"></i></a>
                <a href='https://www.grubhub.com/restaurant/giulios-pizza-126-middletown-ave-north-haven/315745' target='_blank' rel="noopener noreferrer"><img id='grubIcon' className="four wide column" src={logo} alt="Logo" /></a>
              </div>
            </div>
            <p className="four wide column">126 Middletown Ave, North Haven CT</p>
            <div className="five wide column row">
              <a href='/menu' className='footer-link'>Menu</a>
              <a href='/catering' className='footer-link'>Catering</a>
              <a href='/order' className='footer-link'>Order</a>
              <a href='/topshelflounge' className='footer-link'>Top Shelf Lounge</a>
            </div>

          </div>
      </div>
    );
  }
}

export default Footer;

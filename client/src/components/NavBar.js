import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
<div>
  <link href='https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css' rel='stylesheet' />

      <div id="nav-bar" className='ui container'>
        <div className='ui grid'>
        <Menu pointing secondary className='row navbar'>
            <Link to='/menu' className='three wide column vertical-align'>
              <Menu.Item
                name='menu'
                id='menu'
                active={this.props.location.pathname === '/menu'}
              />
            </Link>
          <Link to='/catering' className='three wide column vertical-align'>
            <Menu.Item
              name='catering'
              id='catering'
              active={this.props.location.pathname === '/catering'}
            />
          </Link>
          <Link to='/' className='four wide column vertical-align'>
                  <img id='giuliosLogo' src="https://lh3.googleusercontent.com/gYQu-T3ElbVwRzgxmXXvt8Bh73zJYdEQ69x5nj-fCZ6tyzdwePKcQqER5iES8B-KscGvEVbxPSgDiNoA85Z_opDeOc5ltegJXNfkge7m3sieaSwdKLgOkb_f6KzFx2b8NX8pyPwtxo6fVddt9Py7XteUGH4yyShsFMl2lM4MZFwc9GRzIwKNGeuwmTguEIC5Jeftk4fyn5ZprEzs3sMWLkxjStIky5-gqLkYk6quPU2XWHh7Yx-RW4dhP_lm1Z0rsRQwCyITmgBFIMwejQ6V9nzGrRzaHm9ZnOl9GfkJ1Qrq_ibLySYax35vbZ7cSrWOJbWjI50gZ5ewEchH_zO4nclL5ptzSFy76xXbFncpsOm4oUSeBukNp0-0m6M3kbRv959x0PeTpepXWDrrBZH2aADPF6uuXYriRpCA5_ycSh9eEHKSyYGvsxMmBmLmHxq6lEIn68tTTGhLncdk7XGfaIKTpcksL5tLcPmd5lBSRBB9fKCUurJuahPR90thr-5klnn8ztND2zQBfxmAcOYAySzFhOv9SXO2LlQYc-q_N0yJs9CkAMfimn45etIC9vy4=w2560-h1364" alt="Giulio's" />
          </Link>
          <Link to='/order' className='three wide column vertical-align'>
            <Menu.Item
              name='order'
              id='order'
              active={this.props.location.pathname === '/order'}
            />
          </Link>

          <Link to='/topShelfLounge' className='three wide column vertical-align'>
            <Menu.Item
              name='topShelfLounge'
              id='topShelfLounge'
              active={this.props.location.pathname === '/topShelfLounge'}
            />
          </Link>
        </Menu>
      </div>
    </div>
  </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));

import React, { Component } from 'react';
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import { handleLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { Parallax } from 'react-materialize';
import { Footer } from 'react-materialize';

class Login extends Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.dispatch(handleLogin(email, password, this.props.history))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return(
<div>
  <div className="container">
    <div className="row">
      <Segment className="col s12 m8 l8 offset-l2" basic>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              autoFocus
              required
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    </div>
  </div>
    <Parallax className="border" imageSrc="http://i1028.photobucket.com/albums/y348/f1nalfortune/home_zpszwzbua01.jpg" strength={400}>
    </Parallax>
    <Footer 
      copyrights={ <i className="fa fa-copyright" aria-hidden="true">BananaBoltProductions</i>}
      className='footer-override'
    >
      <div className="col s3 m3 l3 center bold">
        <a className="bold footer-link" href="/">Home</a>
      </div>
      <div className="col s3 m3 l3 center">
        <a className="bold footer-link" href="/Game">Game</a>
      </div>
      <div className="col s3 m3 l3 center">
        <a className="bold footer-link" href="/Ladder">Ladder</a>
      </div>
      <div className="col s3 m3 l3 center">
        <a className="bold footer-link" href="/About">About</a>
      </div>
    </Footer>
</div>
    )
  }
}

export default connect()(Login);
import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Catering from './components/Catering';
import Order from './components/Order';
import TopShelfLounge from './components/TopShelfLounge';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
      <div>
        <NavBar />
        <FetchUser>
          <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/menu" component={Menu}/>
             <Route exact path="/catering" component={Catering}/>
             <Route exact path="/order" component={Order}/>
             <Route exact path="/topShelf" component={TopShelfLounge}/>
             <Route exact path="/login" component={Login} />
             <ProtectedRoute exact path="/register" component={Register} />
             <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
      </div>
)

export default App;

import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {Home} from "../home/Home";
import {About} from "../about/About";
import {FormContainer} from "../contact/FormContainer";
import {Footer} from '../footer/Footer';

import './App.css';
import {NavBar} from '../navbar/Navbar';

export class App extends React.Component {

  componentDidMount() {
    document.title = "Nathan Woodruff";
  }

  render() {
    return (
      <div className="App">
        

        <Router>
          {/* <NavBar /> */}
          <Switch className="nav">
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={FormContainer}></Route>
          </Switch>
        </Router>

        <Footer />
      </div>
    );
  }
  
}

export default App;

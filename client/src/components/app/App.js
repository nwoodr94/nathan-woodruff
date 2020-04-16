import React from 'react';
import {Nav} from '../nav/Nav';
import {Footer} from '../footer/Footer';

import './App.css';

export class App extends React.Component {

  componentDidMount() {
    document.title = "Nathan Woodruff";
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;

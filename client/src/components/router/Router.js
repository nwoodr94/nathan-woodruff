import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from '../home/Home'
import { About } from '../about/About'
import { FormContainer } from '../contact/FormContainer'

import './Router.css'

const blogURL = process.env.REACT_APP_BLOG_URL

export class Component extends React.Component {
  render () {
    return (
            <Router>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                </ul>
                <Switch className="component">
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={FormContainer}></Route>
                    <Redirect to="/"></Redirect>
                </Switch>
            </Router>
    )
  }
}

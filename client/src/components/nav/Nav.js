import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {Home} from "../home/Home";
import {About} from "../about/About";
import {FormContainer} from "../contact/FormContainer";
import './Nav.css';

export class Nav extends React.Component {
    render() {
        return (
            <Router>
                <Link to="/" className="link">Home</Link>
                <Link to="About" className="link">About</Link>
                <Link to="Contact" className="link">Contact</Link>

                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={FormContainer}></Route>
                </Switch>
            </Router>
        )
    }
}
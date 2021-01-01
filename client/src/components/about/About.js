import React from 'react';
import "./About.css";

export class About extends React.Component {
    render() {
        return aboutJSX;
    }
}

const aboutJSX = (
    <section className="text">
    <h2>About Me</h2>
      <p>
        I'm native to the Pacific Northwest, and I graduated from the University of Washington with a B.S. in Applied
        Physics in 2017.
        <br />
        <br />
        I'm a software developer at the Idaho National Laboratory, part of the United States' laboratory ecosystem.
      </p>
      <h2>My Programming Story</h2>
      <p>
        This is the Space Daemon, a multiple-stage sounding rocket launched and recovered in the Black Rock Desert, NV.
        <br />
        <br />
        I first learned to code by programming a C script that collected data from sensors on its payload.
      </p>
      <div className="img-container">
        <img src={require("../../assets/space-daemon.png")} alt="nathan's rocket"/>
      </div>

  </section>
)
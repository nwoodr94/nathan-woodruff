import React from 'react';
import "./About.css";

export class About extends React.Component {
    render() {
        return aboutJSX;
    }
}

const aboutJSX = (
    <section class="text">
    <h2>About Me</h2>
    <div>
      <p>
        I'm native to the Pacific Northwest, and I graduated from the University of Washington with a B.S. in Applied
        Physics in 2017.
        <br />
        <br />
        In the summer of 2019 I completed a full-stack software development bootcamp, and due to my interest in web applications and year-long sunshine, I started work as a software developer in Los Angeles.
      </p>
      <br />
      <h2>Machine Preferences</h2>
      <p>
        I'm developing on a Pixelbook Go, with the i5/8/128G configuration. I like the abstract-everything Chrome OS
        philosophy, but when it's time to code, I launch the terminal and work directly in the provisioned Debian Linux
        container.
      </p>
      <br />
      <h2>Lifestyle</h2>
      <p>
        I train with a crossfit gym, invest in the stock market, and go to church on Sundays.
        <br />
        <br />
        In the future I'd like to fund my own research in space propulsion. I want to
        buy a house in the desert, and explore the west in an old Toyota 4Runner.
        <br />
        <br />
      </p>
      <div class="img-container">
        <img src={require("../../assets/space-daemon.png")} alt="nathan's rocket"/>
      </div>
    </div>

  </section>
)
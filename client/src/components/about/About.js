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
        In the summer of 2019 I completed a full-stack software development bootcamp, and due to my interest in building web applications, I started work as a software developer on a React team in Los Angeles.
      </p>
      <br />
      <h2>Machine Preferences</h2>
      <p>
        I'm developing in Crostini on a Pixelbook Go, with the i5/8/128 gig configuration. I like the Chrome OS
        philosophy, and when it's time to code, I fire up the terminal and work directly in the provisioned Debian
        container. Linux is a lot of fun and the support is great.
        <br />
        <br />
        While Google is my provider of choice for hardware and OS solutions, I stick with AWS for cloud-based
        development work.
      </p>
      <br />
      <h2>Lifestyle</h2>
      <p>
        Right now I'm hitting the basics. I train with a crossfit gym, and run a 5K when I get home from work. I invest in the stock market, and meal prep once or twice every week.
        <br />
        <br />
        In the future I'd like to do more research in cnc manufacturing and space propulsion. I want to
        buy a house in the desert, run for Sheriff, and explore the west in an old Toyota 4Runner.
        <br />
        <br />
      </p>
      <div class="img-container">
        <img src={require("../../assets/space-daemon.png")} alt="rocket"/>
      </div>
    </div>

  </section>
)
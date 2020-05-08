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
      <p>
        I'm native to the Pacific Northwest, and I graduated from the University of Washington with a B.S. in Applied
        Physics in 2017.
        <br />
        <br />
        In the summer of 2019 I completed a full-stack software development bootcamp, and due to my interest in web applications and year-long sunshine, I started work as a software developer in Los Angeles.
      </p>
      <h2>Software Development</h2>
      <p>
        I'm a software developer at Southern California Edison in Los Angeles. SCE provides electricity to 14 million people in the Southern California region.
        <br />
        <br />
        I like to traverse the whole stack throughout the course of a typical sprint. 
        <br />
        <br />
        That means I code both front- and back-end features and modules in JavaScript, integrate third party APIs, script in Python and SQL, deploy applications
        on AWS, and implement DevOps utilities to automate important tasks. 
        <br />
        <br />
        I write clean code for my company.
      </p>
      <h2>Machine Preferences</h2>
      <p>
        I'm developing on a Pixelbook Go, with the i5/8/128G configuration. I like the abstract-everything
        philosophy of Chrome OS, but when it's time to code, I fire up the terminal and work directly in the provisioned Debian Linux
        container.
      </p>
      <h2>My Website</h2>
      <p>
        This website is developed in React, and hosted on AWS. All requests to this domain are handled by Route 53, and passed through CloudFront before landing in an S3 bucket, where you are now.
        <br />
        <br />
        The contact form submits information to a Flask server running on an EC2 instance. The form data is parsed on the backend and loaded into a SQLite database.
        <br />
        <br />
        I'm using Elastic Beanstalk to manage the infrastructure configuration, networking, and security essentials needed to host this application.
        <br />
        <br />
        I collect form submissions from this site by securely posting a credential to the endpoint with cURL, in effect calling a function that returns my contacts.
      </p>
      <h2>Lifestyle</h2>
      <p>
        I train with a crossfit gym, explore the outdoors, and learn a new skill as frequently as possible.
        <br />
        <br />
        In the future I'd like to fund my own research in space propulsion. I want to
        start my own business, and explore the west in an old Toyota 4Runner.
      </p>
      <h2>My Programming Story</h2>
      <p>
        This is the Space Daemon, a multiple-stage sounding rocket launched and recovered in the Black Rock Desert, NV.
        <br />
        <br />
        I first learned to code by programming a C script that collected data from an array of onboard sensors and instrumentation.
      </p>
      <div class="img-container">
        <img src={require("../../assets/space-daemon.png")} alt="nathan's rocket"/>
      </div>

  </section>
)
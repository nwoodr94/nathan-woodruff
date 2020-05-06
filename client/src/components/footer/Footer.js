import React from 'react';
import './Footer.css';

export class Footer extends React.Component {

    date = new Date();
    year = this.date.getFullYear();

    render() {
        return (
        <section className="footer">
            <p>Developed by <a href="https://github.com/nwoodr94" target="_blank" rel="noopener noreferrer">Nathan Woodruff</a>  <span role="img" aria-label="us flag">{String.fromCodePoint(0x1f1fa, 0x1f1f8)}</span></p>
        </section>
        )
    }
}
import React from 'react';
import './Footer.css';

export class Footer extends React.Component {

    date = new Date();
    year = this.date.getFullYear();

    render() {
        return (
        <section class="footer">
            <p>Developed by <a href="https://github.com/nwoodr94" target="_blank">Nathan Woodruff</a> ({this.year})</p>
        </section>
        )
    }
}
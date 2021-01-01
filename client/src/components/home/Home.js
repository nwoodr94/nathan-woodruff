import React from 'react';
import './Home.css';

export class Home extends React.Component {
    render() {
        return (
            <section className="text">
                <div className="welcome">
                    <h2>I'm Nathan</h2>
                    <br />
                    <p>
                        I'm a software developer based in Idaho Falls<span role="img" aria-label="palm tree">{String.fromCodePoint(0x1F332)}</span>
                        <br />
                        Welcome to my website.
                    </p>
                </div>
            </section>
        );
    }
}
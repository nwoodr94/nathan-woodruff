import React from 'react';

export class Contact extends React.Component {
    render() {
        return (
        <section class="text">
            <h2>Contact</h2>
            <br /> 
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Company" />
                <input type="email" placeholder="Email Address" required />
                <textarea rows="12" placeholder="Message"></textarea>
            <br />
            <button style={{width: "15%"}}>Submit</button>
        </section>
        );
    }
}
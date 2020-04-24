import React from 'react';
import './Form.css';
import Contact from './Model';

export class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            email: '',
            message: '',
            length: 0,
            showCount: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.countLetters = this.countLetters.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    length = 0

    // For each state object key, assign it the corresponding target value
    handleChange(e) {
        console.log({[e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    countLetters(e) {
        let input = e.target.value
        this.setState({
            length: input.length,
            showCount: true
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let contact = new Contact();

        contact.name = this.state.name;
        contact.company = this.state.company;
        contact.email = this.state.email;
        contact.message = this.state.message;
    
        console.log(`${JSON.stringify(contact)}`)
        //this.props.onSubmit(contact);
    }


    render() {
        return (
        <section className="text">
            <h2>Contact</h2>
            <br /> 
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Name" maxLength="100" autocomplete="off" onChange={this.handleChange} />
                <input type="text" name="company" placeholder="Company" maxLength="100" autocomplete="off" onChange={this.handleChange} />
                <input type="email" name="email" placeholder="Email Address" maxLength="100" autocomplete="off" onChange={this.handleChange} />
                <textarea rows="12" name="message" placeholder="Message" maxLength="500" autocomplete="off" onChange={this.handleChange} onChange={this.countLetters}></textarea>
            </form>
            <p style={{"fontSize": "small"}}>
                {(this.state.length > 0) && `${this.state.length}/500`}
                <br />
                <br />
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </p>
        </section>
        );
    }
}
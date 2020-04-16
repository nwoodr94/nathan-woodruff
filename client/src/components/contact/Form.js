import React from 'react';
import './Form.css';

export class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            email: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // For each state object key, assign it the corresponding target value
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let contact = new Contact();

        contact.name = this.state.name;
        contact.company = this.state.company;
        contact.email = this.state.email;
        contact.message = this.state.message;
    
        this.props.onSubmit(contact);
    }


    render() {
        return (
        <section className="text">
            <h2>Contact</h2>
            <br /> 
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
                <input type="text" name="company" placeholder="Company" onChange={this.handleChange} />
                <input type="email" name="email" placeholder="Email Address" onChange={this.handleChange} />
                <textarea rows="12" name="message" placeholder="Message" onChange={this.handleChange} ></textarea>
            </form>
            <br />
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </section>
        );
    }
}

class Contact {
    name
    company
    email
    message
}
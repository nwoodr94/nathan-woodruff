import React from 'react';
import './Form.css';
import Contact from './ContactModel';

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // For each state object key, assign it the corresponding target value
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateForm(contact) {
        let valid = true;

        Object.entries(contact).forEach(entry => {
            if (!entry[1] || entry[1].replace(/\s+/g, '').length === 0) {
                valid = false;
            }
        });

        return valid;
    }

    handleSubmit() {
        let contact = new Contact();

        contact.name = this.state.name;
        contact.company = this.state.company;
        contact.email = this.state.email;
        contact.message = this.state.message;

        let valid = this.validateForm(contact);
    
        if (valid){
            this.props.onSubmit(contact);
        }
    }


    render() {
        return (
        <section className="text">
            <h2>Contact</h2>
            <p>Ask me a question, add me to your team, or just say hello.</p>
            <br /> 
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Name" maxLength="100" autoComplete="off" onChange={this.handleChange} />
                <input type="text" name="company" placeholder="Company" maxLength="100" autoComplete="off" onChange={this.handleChange} />
                <input type="email" name="email" placeholder="Email Address" maxLength="100" autoComplete="off" onChange={this.handleChange} />
                <textarea rows="12" name="message" placeholder="Message" maxLength="500" autoComplete="off" onChange={this.handleChange} ></textarea>
            </form>
            <p style={{"fontSize": "small"}}>
                {(this.state.message.length > 0) && `${this.state.message.length}/500`}
                <br />
                <br />
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </p>
        </section>
        );
    }
}
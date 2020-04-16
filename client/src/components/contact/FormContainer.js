import React from 'react';
import {Form} from './Form';


export class FormContainer extends React.Component {

    constructor(props) {
        super(props);
    }

   onSubmit(contact) {
       console.log(contact);
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}/>
        )
    }
}
import React from 'react';
import {Form} from './Form';
import {callAPI} from '../../fetch';


export class FormContainer extends React.Component {

    constructor(props) {
        super(props);
    }

   onSubmit(contact) {
       (async() => {
        console.log(`Calling API with ${contact}`)
        let response = await callAPI(contact);
        await console.log(`API responded with ${response}`);
       })();
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}/>
        )
    }
}
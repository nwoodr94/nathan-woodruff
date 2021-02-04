import React from 'react'
import { Form } from './Form'
import { callAPI } from '../../fetch'

export class FormContainer extends React.Component {
  onSubmit (contact) {
    (async () => {
      const response = await callAPI(contact)
      await console.log(`API responded with ${response}`)
    })()
  }

  render () {
    return (
            <Form onSubmit={this.onSubmit}/>
    )
  }
}

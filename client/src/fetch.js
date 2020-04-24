const fetch = require('node-fetch');
  
let url = 'http://localhost:5000/webapi/v1/contact/';

export async function callAPI(contact) {

    let response = await fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(contact)
    })

    let status = await response.json();

    return status;
}
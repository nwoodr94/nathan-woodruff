const fetch = require('node-fetch');
  
let url = 'https://backend.nathanwoodruff.dev/webapi/v1/contact/';

export async function callAPI(contact) {

    let response = await fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(contact)
    })

    let status = await response.status;

    if (status === 200) {
        window.location.reload();
    }

    return status;
}
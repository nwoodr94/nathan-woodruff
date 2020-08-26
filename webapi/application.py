# Flask
import flask
from flask import Flask, request, jsonify
from flask_cors import CORS

# SQL Dependencies
from datetime import datetime
from data.scripts import Insert, Query

# Secrets
import os
from dotenv import load_dotenv
load_dotenv(verbose=True)
key = os.getenv('SECRET_KEY')

# Flask Configuration
application = flask.Flask(__name__)
cors = CORS(application, resources={r"/webapi/*": {"origins": "*"}})

class Contact:

    def __init__(self, name, company, email, message):
        self.name = name
        self.company = company
        self.email = email
        self.message = message
        self.time = time = datetime.now().strftime("%m/%d/%Y %H:%M:%S")

@application.route('/webapi/v1/contact/', methods=['POST'])
def post():
    if request.method == 'POST':

        data = request.get_json()

        if (len(data) == 4):
            name = data['name']
            company = data['company']
            email = data['email']
            message = data['message']

            contact = Contact(name, company, email, message)
            
            Insert(contact)
            return "OK"

        elif (data['pw'] == key):
            contacts = Query()
            
            return jsonify(contacts)
        else:
            return "Denied: %s" %data + "\n"
        

if __name__ == "__main__":
    application.run()
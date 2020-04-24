#!webapi/bin/python3.7

import sqlite3
import flask
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

# Flask
app = flask.Flask(__name__)
app.config["DEBUG"] = True
cors = CORS(app, resources={r"/webapi/*": {"origins": "*"}})

now = datetime.now() # current date and time

class Contact:

    time = datetime.now().strftime("%m/%d/%Y %H:%M:%S")

    def __init__(self, name, company, email, message):
        self.name = name
        self.company = company
        self.email = email
        self.message = message

# SQLite
@app.route('/webapi/v1/contact/', methods=['GET', 'POST'])
def API():
    if request.method == 'POST':
        data = request.get_json()

        name = data['name']
        company = data['company']
        email = data['email']
        message = data['message']

        contact = Contact(name, company, email, message)
        print("Contact: %s"%contact)
        Write(contact)
        
        return "OK"

def Write(contact):
    connect = sqlite3.connect('database/contacts.db')

    cursor = connect.cursor()
    print("Connected to DB")

    values = [contact.time, contact.name, contact.company, contact.email, contact.message]

    print("Inserting values: %s"%values)
    cursor.execute('INSERT INTO Contacts VALUES (?,?,?,?,?)', values)

    connect.commit()

    connect.close()

app.run()
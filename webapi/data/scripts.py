import sqlite3
import os

db_path = './data/database/contacts.db'

def Insert(contact):
    connect = sqlite3.connect(db_path)

    cursor = connect.cursor()

    values = [contact.time, contact.name, contact.company, contact.email, contact.message]

    cursor.execute('INSERT INTO Contacts VALUES (?,?,?,?,?)', values)

    connect.commit()

    connect.close()

    return

def Query(): 

    connect = sqlite3.connect(db_path)

    cursor = connect.cursor()

    contacts = cursor.execute('SELECT * FROM Contacts').fetchall()

    connect.close()

    contacts.reverse()

    return contacts
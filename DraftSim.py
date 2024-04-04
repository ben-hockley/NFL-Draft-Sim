import os
from flask import Flask, redirect, request, render_template, url_for
import json
import sqlite3

app = Flask(__name__)

ALLOWED_EXTENTIONS = set(['jpg', 'txt', 'svg', 'png', 'jpeg', 'gif'])

@app.route('/')
def loadHome():
    return render_template('home.html')

@app.route('/2024Draft')
def load2024():
    return render_template('2024Draft.html')

@app.route('/2024Draft/simulator', methods = ['POST'])
def getActiveTeams():
    activeTeams = request.form.get('activeTeams')
    draftYear = 2024
    #SQLlite3
    conn = sqlite3.connect('2024Draft.db')
    cur = conn.cursor()
    cur.execute('SELECT Team FROM draftOrder')
    draftOrder = cur.fetchall()
    conn.close()

    conn = sqlite3.connect('2024Draft.db')
    cur = conn.cursor()
    cur.execute('SELECT Name FROM draftProspects')
    prospectNames = cur.fetchall()
    cur.execute('SELECT College FROM draftProspects')
    prospectColleges = cur.fetchall()
    cur.execute('SELECT Position FROM draftProspects')
    prospectPositions = cur.fetchall()
    conn.close()

    return render_template('2024DraftRoom.html', activeTeams=activeTeams, draftOrder=draftOrder,
    prospectNames=prospectNames, prospectColleges=prospectColleges, prospectPositions=prospectPositions)

@app.route('/2024Draft/DraftResults', methods=['POST'])
def getDraftResults():
    draftResults = request.form.get('draftResultsInput')
    return render_template('DraftResults.html', draftResults=draftResults)


if __name__ == "__main__":
    app.run(debug=True)
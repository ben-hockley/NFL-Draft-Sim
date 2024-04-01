import os
from flask import Flask, redirect, request, render_template, url_for

app = Flask(__name__)

ALLOWED_EXTENTIONS = set(['jpg', 'txt', 'svg', 'png', 'jpeg', 'gif'])

@app.route('/')
def loadHome():
    return render_template('home.html')

@app.route('/2024Draft')
def load2024():
    return render_template('2024Draft.html')

if __name__ == "__main__":
    app.run(debug=True)